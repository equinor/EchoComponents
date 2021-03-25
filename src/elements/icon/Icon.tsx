import { Icon as EdsIcon } from '@equinor/eds-core-react';
import * as icons from '@equinor/eds-icons';
import React from 'react';

export interface IconProps {
    name: string;
    title: string;
    color: string;
    className?: string;
    size?: 16 | 24 | 32 | 40 | 48;
}
/**
 * Component that work's as a eds icon wrapper, it imports all eds possible icons
 *
 * @param {IconProps} {
 *  name: The name of the icon to be displayed
 *  title: The html title to use
 *  color:The color to icon should have
 *  size: The wanted size of the icon. Possible values are 16, 24, 32, 40 and 48
 * }
 * @return {*} {JSX.Element} A icon for the provided information
 */
export const Icon: React.FC<IconProps> = ({ name, title, color, className, size }: IconProps): JSX.Element => {
    EdsIcon.add(icons);

    return <EdsIcon name={name} title={title} color={color} className={className} size={size} />;
};
