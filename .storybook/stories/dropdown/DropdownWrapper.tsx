import React, { useState } from 'react';
import Dropdown from '../../../src/components/dropdown/Dropdown';

export interface DropdownWrapperProps {
    data: any[];
    openDownWards: boolean;
    placeholder: string;
    showSearch: boolean;
    isDisabled?: boolean;
    disabledText?: string;
    variant?: 'compact' | 'default';
    position?: 'relative' | 'absolute';
}

const TagContextMenuWrapper: React.FC<DropdownWrapperProps> = ({
    data,
    openDownWards,
    placeholder,
    isDisabled,
    disabledText,
    variant,
    showSearch,
    position
}: DropdownWrapperProps) => {
    const [selected, setSelected] = useState('');
    const filterPlants = (data: string[], filter: string): string[] => {
        const filteredPlants = data.filter((item) => item.toLowerCase().indexOf(filter.trim().toLowerCase()) > -1);
        return filteredPlants.map((item: string) => item);
    };
    return (
        <div className="Dropdown">
            <div>
                <Dropdown
                    selected={selected}
                    setSelected={setSelected}
                    data={data}
                    openDownWards={openDownWards}
                    placeholder={placeholder}
                    isDisabled={isDisabled}
                    disabledText={disabledText}
                    variant={variant}
                    showSearch={showSearch}
                    position={position}
                    filterFunc={filterPlants}
                />
            </div>
        </div>
    );
};

export default TagContextMenuWrapper;
