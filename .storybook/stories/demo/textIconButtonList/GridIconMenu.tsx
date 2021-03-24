import React, { CSSProperties } from 'react';
import { TextIconButton } from '../../../../src/elements/textIconButton/TextIconButton';
import styles from './gridIconMenu.module.css';

export interface GridIconMenuProps {
    gridStyle: CSSProperties;
    items: GridItems[];
}

export interface GridItems {
    index: number;
    icon: string;
    title: string;
    onClick: () => void;
}

export const GridIconMenu: React.FC<GridIconMenuProps> = ({ gridStyle, items }: GridIconMenuProps): JSX.Element => {
    return (
        <div className={styles.gridIconMenu} style={gridStyle}>
            {items.map((item, index) => {
                return (
                    <TextIconButton
                        icon={item.icon}
                        title={item.title}
                        onClick={item.onClick}
                        key={index}
                        style={{ margin: '5px' }}
                    ></TextIconButton>
                );
            })}
        </div>
    );
};
