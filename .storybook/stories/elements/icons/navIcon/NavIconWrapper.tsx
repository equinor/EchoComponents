import React from 'react';
import { NavIcon, NavIconProps } from '../../../../../src/elements/icons/navIcon/NavIcon';

const NavIconWrapper: React.FC<NavIconProps> = ({ icon, selected, size, title }: NavIconProps) => {
    return (
        <div className={'NavIcon'}>
            <NavIcon icon={icon} selected={selected} size={size} title={title}></NavIcon>
        </div>
    );
};

export default NavIconWrapper;
