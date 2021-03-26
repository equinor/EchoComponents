import React, { CSSProperties, useEffect, useState } from 'react';
import { ReactSortable, SortableEvent } from 'react-sortablejs';
import { DraggableItem } from '../../types/draggableItem';

const DraggableHandleSelector = 'globalDraggableHandle';

export interface DraggableItemsWrapperProps {
    style?: CSSProperties;
    onChange: (newDragItems: DraggableItem[], oldIndex: number | undefined, newIndex: number | undefined) => void;
    children: React.ReactNode[];
}

/**
 * Component that renders a wrapper for items that are draggable
 *
 * @param {DraggableItemsWrapperProps} {
 *     style: style element to override wrapper style
 *     onChange: method that will be called when elements have be reordered inside the wrapper
 *     children: list of elements that can be reordered
 * }
 * @return {*}  {JSX.Element}
 */
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

    useEffect(() => {
        setDragItems(
            children.map((element, id) => {
                return { id, element };
            })
        );
    }, [children]);

    return (
        <div style={style}>
            {dragItems.length > 0 && (
                <ReactSortable
                    animation={200}
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
