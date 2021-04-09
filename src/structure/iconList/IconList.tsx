import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
import { DraggableItem, IconItem, IconListItem } from '../..';
import { DraggableItemsWrapper } from '../../elements/draggableItemsWrapper/DraggableItemsWrapper';
import { createListRow } from './createListRow';
import styles from './iconList.module.css';

export interface IconListProps {
    style?: CSSProperties;
    title: string;
    items: IconListItem[];
    isDraggable: boolean;
    expandedIcons?: IconItem[];
    onUpdatedOrder: (itemsInNewOrder: IconListItem[]) => void;
}

export interface IconListState {
    orderedItems: IconListItem[];
    expandedIndex: number;
}
/**
 * Component that renders an IconList of rows, that can be draggable and/or expandable
 *
 * @param {IconListProps} {
 *     style: the style to override the IconList wrapper
 *     title: The title of the list
 *     items: { The items to be rendered in the row
 *          title: the title of the item in the row
 *          subtitle: the subtitle of the item in the row
 *          icons: the icons that will be displayed on the same row, and their respective actions
 *     }[]
 *     isDraggable: flag to indicate if the elements in the list should be draggable
 *     expandedIcons: list of icons that should be displayed if a row is expanded. If undefined no row can be expanded
 *     onUpdatedOrder: method that will be called when the order of the list has changed
 * }
 * @return {*}  {JSX.Element} a list of items that can be draggable and/or expandable
 */
export const IconList: React.FC<IconListProps> = ({
    style,
    title,
    items,
    isDraggable,
    expandedIcons,
    onUpdatedOrder
}: IconListProps): JSX.Element => {
    const [iconListState, setIconListState] = useState<IconListState>({ orderedItems: items, expandedIndex: -1 });

    const [rowElements, setRowElements] = useState<React.ReactNode[]>(
        iconListState.orderedItems.map((_, index) =>
            createListRow(isDraggable, index, iconListState, setIconListState, expandedIcons)
        )
    );

    useEffect(() => {
        setIconListState({ orderedItems: items, expandedIndex: -1 });
    }, [items]);

    const reorderOnChange = (newDragItems: DraggableItem[]): void => {
        const updatedOrder = newDragItems.map((e) => {
            return iconListState.orderedItems[e.id];
        });

        let expandedIndex = iconListState.expandedIndex;
        if (iconListState.expandedIndex !== -1) {
            expandedIndex = updatedOrder.findIndex((e) => e === iconListState.orderedItems[expandedIndex]);
        }

        setIconListState({ orderedItems: updatedOrder, expandedIndex });
        onUpdatedOrder(updatedOrder);
    };

    const createRows = useCallback(() => {
        setRowElements(
            iconListState.orderedItems.map((_, index) =>
                createListRow(isDraggable, index, iconListState, setIconListState, expandedIcons)
            )
        );
    }, [iconListState, isDraggable, expandedIcons]);

    useEffect(() => {
        createRows();
    }, [items, createRows]);

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.header}>
                <Typography group="table" variant="cell_text" bold>
                    {title}
                </Typography>
            </div>
            {isDraggable ? (
                <DraggableItemsWrapper
                    style={style}
                    onChange={(newDragItems: DraggableItem[]): void => {
                        setRowElements(newDragItems.map((d) => d.element));
                        reorderOnChange(newDragItems);
                    }}
                >
                    {rowElements}
                </DraggableItemsWrapper>
            ) : (
                <div style={style}>{rowElements}</div>
            )}
        </div>
    );
};
