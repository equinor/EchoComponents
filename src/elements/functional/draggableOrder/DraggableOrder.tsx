import React, { CSSProperties, useEffect, useState } from 'react';
import { ReactSortable, SortableEvent } from 'react-sortablejs';
import styles from './draggableOrder.module.css';

export const DraggableHandleSelector = 'globalDraggableHandle';

export interface DraggableOrderProps {
    elements: JSX.Element[];
    style?: CSSProperties;
    onChange: (
        newDragItems: DragItem[],
        newElements: JSX.Element[],
        oldIndex: number | undefined,
        newIndex: number | undefined
    ) => void;
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
                    handle={'.' + DraggableHandleSelector}
                    list={dragItems}
                    onEnd={(evt: SortableEvent): void => {
                        console.log(evt);
                        const newElements: JSX.Element[] = [];
                        for (const dragItem of dragItems) {
                            newElements.push(dragItem.element);
                        }
                        onChange(dragItems, newElements, evt.oldIndex, evt.newIndex);
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
