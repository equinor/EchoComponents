import React, { CSSProperties, useState } from 'react';
import TagMoreInfo from '../../../src/buttonWithPopover/ButtonWithPopover';
import ContextMenu from '../../../src/contextMenu/ContextMenu';
import { DataInformation } from '../../../src/types/dataInformation';

export interface ContextMenuWrapperProps {
    dataToShow: DataInformation[];
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
    position: CSSProperties;
}

const ContextMenuWrapper: React.FC<ContextMenuWrapperProps> = ({
    dataToShow,
    icon,
    legendColor,
    tagNo,
    description,
    position
}: ContextMenuWrapperProps): JSX.Element => {
    const [fetchedDataToShow, setFetchedDataToShow] = useState<DataInformation[]>([]);
    const [expanded, setExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openTagInformation = (): void => {
        setExpanded(!expanded);
    };

    const fetchDataToShow = (): void => {
        setIsLoading(true);
        setFetchedDataToShow([]);

        setTimeout(function () {
            setFetchedDataToShow(dataToShow);
            setIsLoading(false);
        }, 3000);
    };

    return (
        <ContextMenu
            icon={icon}
            legendColor={legendColor}
            expanded={expanded}
            setExpanded={setExpanded}
            tagNo={tagNo}
            description={description}
            positionStyle={position}
            openTagInformation={openTagInformation}
        >
            <TagMoreInfo fetchDataToShow={fetchDataToShow} isLoading={isLoading} fetchedData={fetchedDataToShow} />
        </ContextMenu>
    );
};

export default ContextMenuWrapper;
