import React, { CSSProperties, useEffect, useState } from 'react';
import { ReactSortable, SortableEvent } from 'react-sortablejs';
import styles from './draggableOrder.module.css';

export const DraggableHandleSelector = 'globalDraggableHandle';

export interface DraggableOrderProps {
    style?: CSSProperties;
    onChange: (
        newDragItems: DragItem[],
        newElements: JSX.Element[],
        oldIndex: number | undefined,
        newIndex: number | undefined
    ) => void;
    children?: React.ReactNode[];
}

export interface DragItem {
    id: number;
    element: JSX.Element;
}

export const DraggableOrder: React.FC<DraggableOrderProps> = ({
    style,
    onChange,
    children
}: DraggableOrderProps): JSX.Element => {
    const [dragItems, setDragItems] = useState<DragItem[]>([]);

    useEffect(() => {
        const dragItemsTemp: DragItem[] = [];
        let index = 0;
        if (children) {
            for (const element of children) {
                dragItemsTemp.push({
                    id: index,
                    element: element as JSX.Element
                });
                index++;
            }
        }
        setDragItems(dragItemsTemp);
    }, [children]);

    useEffect(() => {
        const dragItemsTemp: DragItem[] = [];
        let index = 0;
        if (children) {
            for (const element of children) {
                dragItemsTemp.push({
                    id: index,
                    element: element as JSX.Element
                });
                index++;
            }
        }
        setDragItems(dragItemsTemp);
    }, [children]);

    return (
        <div className={styles.draggableOrder} style={style}>
            {dragItems.length > 0 && (
                <ReactSortable
                    handle={'.' + DraggableHandleSelector}
                    list={dragItems}
                    onEnd={(evt: SortableEvent): void => {
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
