import React, { CSSProperties, useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styles from './draggableOrder.module.css';
export interface DraggableOrderProps {
    elements: JSX.Element[];
    style?: CSSProperties;
    onChange: (newDragItems: DragItem[], newElements: JSX.Element[]) => void;
}

export interface DragItem {
    id: number;
    element: JSX.Element;
}

export const DraggableOrder: React.FC<DraggableOrderProps> = ({
    elements,
    style,
    onChange
}: DraggableOrderProps): JSX.Element => {
    const [dragItems, setDragItems] = useState<DragItem[]>([]);

    useEffect(() => {
        const dragItemsTemp: DragItem[] = [];
        let index = 0;
        for (const element of elements) {
            dragItemsTemp.push({
                id: index,
                element: element
            });
            index++;
        }
        setDragItems(dragItemsTemp);
    }, [elements]);

    return (
        <div className={styles.draggableOrder} style={style}>
            {dragItems.length > 0 && (
                <ReactSortable
                    handle=".draggableHandle"
                    list={dragItems}
                    onEnd={(): void => {
                        const newElements: JSX.Element[] = [];
                        for (const dragItem of dragItems) {
                            newElements.push(dragItem.element);
                        }
                        onChange(dragItems, newElements);
                    }}
                    setList={(dragItems: DragItem[]): void => {
                        setDragItems(dragItems);
                    }}
                >
                    {dragItems.map((dragItem) => (
                        <div key={dragItem.id}>{dragItem.element}</div>
                    ))}
                </ReactSortable>
            )}
        </div>
    );
};
