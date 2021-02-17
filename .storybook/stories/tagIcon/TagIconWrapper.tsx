import React from 'react';
import { getIcon } from '../../../src/helpers/getIcon';
import TagIcon from '../../../src/tagIcon/TagIcon';
import TagIconShadowWrapper from '../../../src/tagIcon/TagIconShadow';

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
