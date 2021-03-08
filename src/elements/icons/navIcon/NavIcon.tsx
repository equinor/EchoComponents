import { themeConst } from '@equinor/echo-framework';
import cx from 'classnames';
import React from 'react';
import { Icon } from '../icon/Icon';
import styles from './navIcon.module.css';

export interface NavIconProps {
    icon: string;
    selected?: boolean;
    size: Size;
    title: string;
}

type Size = 'standard' | 'smaller';

export const NavIcon: React.FC<NavIconProps> = ({ icon, selected, size, title }: NavIconProps): JSX.Element => {
    return (
        <div className={cx(styles.navIcon, selected ? styles.selected : '', styles[size])}>
            <Icon name={icon} title={title} color={selected ? themeConst.white : themeConst.equiGreen1}></Icon>
        </div>
    );
};
