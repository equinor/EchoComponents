import * as icons from '@equinor/eds-icons';

import { Icon as EdsIcon } from '@equinor/eds-core-react';
import React from 'react';

export interface IconProps {
    name: string;
    title: string;
    color: string;
}
/**
 * Component that work's as a eds icon wrapper, it imports all eds possible icons
 *
 * @param {IconProps} {
 *  name: The name of the icon to be displayed
 *  title: The html title to use
 *  color:The color to icon should have
 * }
 * @return {*} {JSX.Element} A icon for the provided information
 */
export const Icon: React.FC<IconProps> = ({ name, title, color }: IconProps): JSX.Element => {
    EdsIcon.add(icons);

    return <EdsIcon name={name} title={title} color={color} />;
};
