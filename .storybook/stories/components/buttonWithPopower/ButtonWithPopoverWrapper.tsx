import React, { useState } from 'react';
import { ButtonWithPopover } from '../../../../src/components/buttonWithPopover/ButtonWithPopover';
import { DataInformation } from '../../../../src/types/dataInformation';

export interface ButtonWithPopoverWrapperProps {
    fetchedData: DataInformation[];
}

const ButtonWithPopoverWrapper: React.FC<ButtonWithPopoverWrapperProps> = ({
    fetchedData
}: ButtonWithPopoverWrapperProps): JSX.Element => {
    const [fetchedDataToShow, setFetchedDataToShow] = useState<DataInformation[]>([]);
    const [expanded, setExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onPopoverShowMoreClicked = (): void => {
        if (expanded) {
            setExpanded(false);
            setFetchedDataToShow([]);
        } else {
            setExpanded(true);
            setIsLoading(true);
            setFetchedDataToShow([]);

            setTimeout(function () {
                setFetchedDataToShow(fetchedData);
                setIsLoading(false);
            }, 3000);
        }
    };

    return (
        <div>
            <ButtonWithPopover
                onShowMoreClicked={onPopoverShowMoreClicked}
                expanded={expanded}
                isLoading={isLoading}
                fetchedData={fetchedDataToShow}
            />
        </div>
    );
};

export default ButtonWithPopoverWrapper;
