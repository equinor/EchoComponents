import { Typography } from '@equinor/eds-core-react';
import cx from 'classnames';
import React, { CSSProperties } from 'react';
import { Icon } from '../../elements/icon/Icon';
import styles from './gridIconMenu.module.css';

export interface GridIconMenuProps {
    activeIndex?: number;
    gridStyle: CSSProperties;
    items: GridItems[];
}

export interface GridItems {
    index: number;
    icon: string;
    title: string;
    onClick: () => void;
}

export const GridIconMenu: React.FC<GridIconMenuProps> = ({
    activeIndex,
    gridStyle,
    items
}: GridIconMenuProps): JSX.Element => {
    return (
        <div className={styles.gridIconMenu} style={gridStyle}>
            {items.map((item, index) => {
                return (
                    <div
                        className={cx(styles.item, item.index === activeIndex ? styles.active : '')}
                        key={index}
                        onClick={item.onClick}
                    >
                        <Icon name={item.icon} title={item.title} color="#007079"></Icon>
                        <Typography color="primary">{item.title}</Typography>
                        <div className={styles.circle}></div>
                    </div>
                );
            })}
        </div>
    );
};
