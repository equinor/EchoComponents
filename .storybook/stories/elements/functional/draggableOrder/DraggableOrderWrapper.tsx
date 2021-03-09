import cx from 'classnames';
import React, { useState } from 'react';
import {
    DraggableHandleSelector,
    DraggableOrder,
    DraggableOrderProps,
    DragItem
} from '../../../../../src/elements/functional/draggableOrder/DraggableOrder';
import styles from './draggableOrderWrapper.module.css';

const DraggableOrderWrapper: React.FC<DraggableOrderProps> = ({ style }: DraggableOrderProps) => {
    const [testElements, setTestElements] = useState<JSX.Element[]>([
        <span className={cx(styles.draggableItem, DraggableHandleSelector)}>1</span>,
        <span className={cx(styles.draggableItem, DraggableHandleSelector)}>2</span>,
        <span className={cx(styles.draggableItem, DraggableHandleSelector)}>3</span>,
        <span className={cx(styles.draggableItem, DraggableHandleSelector)}>4</span>,
        <span className={cx(styles.draggableItem, DraggableHandleSelector)}>5</span>,
        <span className={cx(styles.draggableItem, DraggableHandleSelector)}>6</span>
    ]);

    return (
        <div className={styles.draggableOrderWrapper}>
            <div className={styles.list}>
                <DraggableOrder
                    style={style}
                    onChange={(newDragItems: DragItem[], newElements: JSX.Element[]) => {
                        setTestElements(newElements);
                    }}
                >
                    {testElements}
                </DraggableOrder>
            </div>
            {testElements.map((el, index) => {
                return <span key={index}>{el}</span>;
            })}
        </div>
    );
};

export default DraggableOrderWrapper;
