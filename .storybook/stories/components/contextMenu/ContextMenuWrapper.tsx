import React, { CSSProperties, useState } from 'react';
import ButtonWithPopover from '../../../../src/components/buttonWithPopover/ButtonWithPopover';
import ContextMenu from '../../../../src/components/contextMenu/ContextMenu';
import { getIcon } from '../../../../src/helpers/getIcon';
import { DataInformation } from '../../../../src/types/dataInformation';

export interface ContextMenuWrapperProps {
    dataToShow: DataInformation[];
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
    position: CSSProperties;
    selected: boolean;
    selectedClassName?: string;
}

const ContextMenuWrapper: React.FC<ContextMenuWrapperProps> = ({
    dataToShow,
    icon,
    legendColor,
    tagNo,
    description,
    position,
    selected,
    selectedClassName
}: ContextMenuWrapperProps): JSX.Element => {
    const [fetchedDataToShow, setFetchedDataToShow] = useState<DataInformation[]>([]);
    const [expandContextMenu, setExpandContextMenu] = useState(false);
    const [expandPopover, setExpandPopover] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openTagInformation = (): void => {
        setExpandContextMenu(!expandContextMenu);
    };

    const fetchDataToShow = (): void => {
        if (expandPopover) {
            setExpandPopover(false);
            setFetchedDataToShow([]);
        } else {
            setExpandPopover(true);
            setIsLoading(true);

            setTimeout(function () {
                setFetchedDataToShow(dataToShow);
                setIsLoading(false);
            }, 3000);
        }
    };

    return (
        <ContextMenu
            icon={getIcon(icon)}
            legendColor={legendColor}
            expanded={expandContextMenu}
            setExpanded={setExpandContextMenu}
            tagNo={tagNo}
            description={description}
            positionStyle={position}
            openTagInformation={openTagInformation}
            selected={selected}
            selectedClassName={selectedClassName}
        >
            <ButtonWithPopover
                onShowMoreClicked={fetchDataToShow}
                isLoading={isLoading}
                expanded={expandPopover}
                fetchedData={fetchedDataToShow}
            />
        </ContextMenu>
    );
};

export default ContextMenuWrapper;
