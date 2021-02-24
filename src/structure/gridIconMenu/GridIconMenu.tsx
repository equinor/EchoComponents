import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { Icon } from '../../elements/icon/Icon';
import styles from './gridIconMenu.module.css';

export interface GridIconMenuProps {
    gridStyle: CSSProperties;
    items: GridItems[];
}

export interface GridItems {
    icon: string;
    title: string;
    onClick: () => void;
}

export const GridIconMenu: React.FC<GridIconMenuProps> = ({ gridStyle, items }: GridIconMenuProps): JSX.Element => {
    return (
        <div className={styles.gridIconMenu} style={gridStyle}>
            {items.map((item, index) => {
                return (
                    <div className={styles.item} key={index} onClick={item.onClick}>
                        <Icon name={item.icon} title={item.title} color="#007079"></Icon>
                        <Typography color="primary">{item.title}</Typography>
                    </div>
                );
            })}
        </div>
    );
};
