import React from 'react';
import styles from './tagIcon.module.css';

interface TagIconProps {
    icon: JSX.Element;
    legendColor: string;
}
/**
 * Component that will wrap the provided icon with a background color (usually the legend color)
 *
 * @param {TagIconProps} {
 *  icon: Icon to be wrapped
 *  legendColor: background color to apply. Need to be valid css color
 * }
 * @return {*}  {JSX.Element} Wrapped icon with provided color
 */
export const TagIcon: React.FC<TagIconProps> = ({ icon, legendColor }: TagIconProps): JSX.Element => {
    return (
        <div style={{ background: legendColor }} className={`${styles.icon}`}>
            {icon}
        </div>
    );
};

export default TagIcon;
