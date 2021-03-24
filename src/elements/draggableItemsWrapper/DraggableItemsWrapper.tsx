import React, { CSSProperties, useState } from 'react';
import { ReactSortable, SortableEvent } from 'react-sortablejs';
import { DraggableItem } from '../../types/draggableItem';
import styles from './draggableItemsWrapper.module.css';

const DraggableHandleSelector = 'globalDraggableHandle';

export interface DraggableItemsWrapperProps {
    style?: CSSProperties;
    onChange: (newDragItems: DraggableItem[], oldIndex: number | undefined, newIndex: number | undefined) => void;
    children: React.ReactNode[];
}

export const DraggableItemsWrapper: React.FC<DraggableItemsWrapperProps> = ({
    style,
    onChange,
    children
}: DraggableItemsWrapperProps): JSX.Element => {
    const [dragItems, setDragItems] = useState<DraggableItem[]>(
        children.map((element, id) => {
            return { id, element };
        })
    );

    return (
        <div className={styles.draggableOrder} style={style}>
            {dragItems.length > 0 && (
                <ReactSortable
                    handle={`.${DraggableHandleSelector}`}
                    list={dragItems}
                    onEnd={(evt: SortableEvent): void => {
                        onChange(dragItems, evt.oldIndex, evt.newIndex);
                    }}
                    setList={setDragItems}
                >
                    {dragItems.map((dragItem) => (
                        <div key={dragItem.id} className={DraggableHandleSelector}>
                            {dragItem.element}
                        </div>
                    ))}
                </ReactSortable>
            )}
        </div>
    );
};
