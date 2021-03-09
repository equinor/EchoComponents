import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { IconItem, IconListItem, ListRow } from '../../../components/ui/listRow/ListRow';
import { DraggableOrder, DragItem } from '../../../elements/functional/draggableOrder/DraggableOrder';
import styles from './iconList.module.css';

export interface IconListProps {
    style: CSSProperties;
    title: string;
    items: IconListItem[];
    isMovable: boolean;
    expandedIcons: IconItem[];
}

export const IconList: React.FC<IconListProps> = ({
    style,
    title,
    items,
    isMovable,
    expandedIcons
}: IconListProps): JSX.Element => {
    const [orderedItems, setOrderedItems] = useState<IconListItem[]>(items);
    const expandedIndex = useRef<number>();
    const [redraw, setRedraw] = useState<boolean>(false);
    const [rowElements, setRowElements] = useState<JSX.Element[]>([]);
    useEffect(() => {
        setOrderedItems(items);
    }, [items]);

    function reorderOnChange(oldIndex: number, newIndex: number): void {
        const updatedOrder = [];

        if (newIndex > oldIndex) {
            for (let i = 0; i < oldIndex; i++) {
                updatedOrder[i] = orderedItems[i];
            }
            for (let i = oldIndex; i < newIndex; i++) {
                updatedOrder[i] = orderedItems[i + 1];
            }
            updatedOrder[newIndex] = orderedItems[oldIndex];
            for (let i = newIndex + 1; i < orderedItems.length; i++) {
                updatedOrder[i] = orderedItems[i];
            }
        } else if (newIndex < oldIndex) {
            for (let i = orderedItems.length - 1; i > oldIndex; i--) {
                updatedOrder[i] = orderedItems[i];
            }
            for (let i = oldIndex; i > newIndex; i--) {
                updatedOrder[i] = orderedItems[i - 1];
            }
            updatedOrder[newIndex] = orderedItems[oldIndex];
            for (let i = newIndex - 1; i >= 0; i--) {
                updatedOrder[i] = orderedItems[i];
            }
        }

        updateExpandedIndex();
        setOrderedItems(updatedOrder);

        function updateExpandedIndex(): void {
            if (typeof expandedIndex.current === 'undefined') return;

            if (oldIndex === expandedIndex.current) {
                expandedIndex.current = newIndex;
            } else if (newIndex > oldIndex) {
                if (oldIndex < expandedIndex.current && newIndex >= expandedIndex.current) {
                    expandedIndex.current = expandedIndex.current - 1;
                }
            } else if (newIndex < oldIndex) {
                if (oldIndex > expandedIndex.current && newIndex <= expandedIndex.current) {
                    expandedIndex.current = expandedIndex.current + 1;
                }
            }
        }
    }

    const createRows = useCallback(() => {
        const rows: JSX.Element[] = [];
        for (let i = 0; i < orderedItems.length; i++) {
            rows.push(createRow(i));
        }
        setRowElements(rows);

        function createRow(index: number): JSX.Element {
            return (
                <ListRow
                    isMovable={isMovable}
                    item={orderedItems[index]}
                    expandedIcons={expandedIcons}
                    expanded={expandedIndex.current == index}
                    rowIndex={index}
                    key={index}
                    onExpand={(status: boolean): void => {
                        if (status) {
                            expandedIndex.current = index;
                            setRedraw(!redraw);
                        } else {
                            expandedIndex.current = undefined;
                            setRedraw(!redraw);
                        }
                    }}
                ></ListRow>
            );
        }
    }, [orderedItems, isMovable, expandedIcons, redraw]);

    useEffect(() => {
        createRows();
    }, [items, createRows]);

    return (
        <div className={styles.iconList} style={style}>
            <div className={styles.header}>
                <Typography group="table" variant="cell_text" bold>
                    {title}
                </Typography>
            </div>
            <DraggableOrder
                style={style}
                onChange={(
                    newDragItems: DragItem[],
                    newElements: JSX.Element[],
                    oldIndex: number | undefined,
                    newIndex: number | undefined
                ): void => {
                    setRowElements(newElements);
                    if (typeof oldIndex !== 'undefined' && typeof newIndex !== 'undefined' && newIndex !== oldIndex) {
                        reorderOnChange(oldIndex, newIndex);
                    }
                }}
            >
                {rowElements}
            </DraggableOrder>
        </div>
    );
};
