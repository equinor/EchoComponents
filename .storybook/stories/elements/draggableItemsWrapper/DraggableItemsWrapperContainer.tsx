import React, { useState } from 'react';
import {
    DraggableItemsWrapper,
    DraggableItemsWrapperProps
} from '../../../../src/elements/draggableItemsWrapper/DraggableItemsWrapper';
import { DraggableItem } from '../../../../src/types/draggableItem';
import styles from './draggableItemsWrapper.module.css';

const DraggableItemsWrapperContainer: React.FC<DraggableItemsWrapperProps> = ({
    style
}: DraggableItemsWrapperProps) => {
    const [testElements, setTestElements] = useState<React.ReactNode[]>([
        <span key="1" className={styles.draggableItem}>
            1
        </span>,
        <span key="2" className={styles.draggableItem}>
            2
        </span>,
        <span key="3" className={styles.draggableItem}>
            3
        </span>,
        <span key="4" className={styles.draggableItem}>
            4
        </span>,
        <span key="5" className={styles.draggableItem}>
            5
        </span>,
        <span key="6" className={styles.draggableItem}>
            6
        </span>
    ]);

    return (
        <div className={styles.draggableOrderWrapper}>
            <div className={styles.list}>
                <DraggableItemsWrapper
                    style={style}
                    onChange={(newDragItems: DraggableItem[]) => {
                        setTestElements(newDragItems.map((n) => n.element));
                    }}
                >
                    {testElements}
                </DraggableItemsWrapper>
            </div>
        </div>
    );
};

export default DraggableItemsWrapperContainer;
