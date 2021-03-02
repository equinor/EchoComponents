import React, { CSSProperties } from 'react';
import { TextIcon } from '../../elements/textIcon/TextIcon';
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
                    <TextIcon
                        icon={item.icon}
                        title={item.title}
                        onClick={item.onClick}
                        active={item.index === activeIndex}
                        key={index}
                        style={{ margin: '5px' }}
                    ></TextIcon>
                );
            })}
        </div>
    );
};
