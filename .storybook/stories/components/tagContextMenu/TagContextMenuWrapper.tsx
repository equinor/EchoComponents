import React, { useState } from 'react';
import TagContextMenu from '../../../../src/components/tagContextMenu/TagContextMenu';
import TagIcon from '../../../../src/elements/tagIcon/TagIcon';
import { getIcon } from '../../../../src/helpers/getIcon';

export interface TagContextMenuWrapperProps {
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
    selected: boolean;
    selectedClassName?: string;
}

const TagContextMenuWrapper: React.FC<TagContextMenuWrapperProps> = ({
    icon,
    legendColor,
    tagNo,
    description,
    selected,
    selectedClassName
}: TagContextMenuWrapperProps) => {
    const [expanded, setExpanded] = useState(false);

    const openTagInformation = (): void => {
        setExpanded(!expanded);
    };

    return (
        <div className={'TagContextMenu'}>
            <TagContextMenu
                setExpanded={setExpanded}
                openTagInformation={openTagInformation}
                tagNo={tagNo}
                description={description}
                expanded={expanded}
                selected={selected}
                selectedClassName={selectedClassName}
            >
                <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>
            </TagContextMenu>
        </div>
    );
};

export default TagContextMenuWrapper;
