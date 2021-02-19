import React from 'react';
import TagIcon from '../../../src/elements/tagIcon/TagIcon';
import TagIconShadowWrapper from '../../../src/elements/tagIcon/TagIconShadow';
import { getIcon } from '../../../src/helpers/getIcon';

export interface TagIconWrapperProps {
    icon: string;
    legendColor: string;
    shadow: boolean;
}

const TagIconWrapper: React.FC<TagIconWrapperProps> = ({ icon, legendColor, shadow }: TagIconWrapperProps) => {
    if (shadow) {
        return (
            <TagIconShadowWrapper>
                <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>
            </TagIconShadowWrapper>
        );
    } else {
        return <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>;
    }
};

export default TagIconWrapper;
