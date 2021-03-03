import React, { useState } from 'react';
import {
    DraggableOrder,
    DraggableOrderProps,
    DragItem
} from '../../../../../src/elements/functional/draggableOrder/DraggableOrder';
import styles from './draggableOrderWrapper.module.css';

const DraggableOrderWrapper: React.FC<DraggableOrderProps> = ({ style }: DraggableOrderProps) => {
    const [testElements, setTestElements] = useState<JSX.Element[]>([
        <span className={styles.draggableItem}>1</span>,
        <span className={styles.draggableItem}>2</span>,
        <span className={styles.draggableItem}>3</span>,
        <span className={styles.draggableItem}>4</span>,
        <span className={styles.draggableItem}>5</span>,
        <span className={styles.draggableItem}>6</span>
    ]);

    return (
        <div className={styles.draggableOrderWrapper}>
            <div className={styles.list}>
                <DraggableOrder
                    elements={testElements}
                    style={style}
                    onChange={(newDragItems: DragItem[], newElements: JSX.Element[]) => {
                        console.log('Reordered', newDragItems, newElements);
                        setTestElements(newElements);
                    }}
                ></DraggableOrder>
            </div>
            {testElements.map((el, index) => {
                return <span key={index}>{el}</span>;
            })}
        </div>
    );
};

export default DraggableOrderWrapper;
