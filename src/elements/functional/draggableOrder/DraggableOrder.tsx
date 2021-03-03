import React, { CSSProperties } from 'react';
import styles from './draggableOrder.module.css';

export interface DraggableOrderProps {
    items: JSX.Element[];
    style?: CSSProperties;
}

export const DraggableOrder: React.FC<DraggableOrderProps> = ({ items, style }: DraggableOrderProps): JSX.Element => {
    return (
        <div className={styles.draggableOrder} style={style}>
            {items.map((item, index) => {
                return (
                    <div className={styles.item} key={index}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
};
