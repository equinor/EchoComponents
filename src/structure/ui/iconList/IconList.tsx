import { themeConst } from '@equinor/echo-framework';
import { Typography } from '@equinor/eds-core-react';
import cx from 'classnames';
import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
import {
    DraggableHandleSelector,
    DraggableOrder,
    DragItem
} from '../../../elements/functional/draggableOrder/DraggableOrder';
import { Icon } from '../../../elements/icons/icon/Icon';
import styles from './iconList.module.css';

export interface IconListProps {
    style: CSSProperties;
    title: string;
    items: IconListItem[];
    isMovable: boolean;
    expanded: IconItem[];
}

export interface IconListItem {
    title: string;
    subTitle: string;
    icons: IconItem[];
}

export interface IconItem {
    icon: string;
    onClick: () => void;
}

export const IconList: React.FC<IconListProps> = ({
    style,
    title,
    items,
    isMovable,
    expanded
}: IconListProps): JSX.Element => {
    const [orderedItems, setOrderedItems] = useState<IconListItem[]>(items);
    const [expandedIndex, setExpandedIndex] = useState<number>();
    const [rowElements, setRowElements] = useState<JSX.Element[]>([]);
    useEffect(() => {
        console.log('Props items', items);
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

        console.log('Reordered', updatedOrder, oldIndex, newIndex);
        updateExpandedIndex();
        setOrderedItems(updatedOrder);

        function updateExpandedIndex(): void {
            if (typeof expandedIndex === 'undefined') return;
            console.log('exp', oldIndex, newIndex, expandedIndex);
            if (oldIndex === expandedIndex) {
                setExpandedIndex(newIndex);
            } else if (newIndex > oldIndex) {
                if (oldIndex < expandedIndex && newIndex >= expandedIndex) {
                    setExpandedIndex(expandedIndex - 1);
                }
            } else if (newIndex < oldIndex) {
                if (oldIndex > expandedIndex && newIndex <= expandedIndex) {
                    setExpandedIndex(expandedIndex + 1);
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
        console.log('Redraw', rows);

        function createRow(index: number): JSX.Element {
            return (
                <div className={styles.item} key={index}>
                    <div className={styles.row1}>
                        <div className={styles.col1}>
                            {isMovable && (
                                <div className={cx(styles.moveable, DraggableHandleSelector)}>
                                    <Icon name="unfold_more" title="Move" color={themeConst.asBuilt}></Icon>
                                </div>
                            )}
                            <div className={cx(styles.info, isMovable ? '' : styles.infoMargin)}>
                                <Typography variant="body_short" bold>
                                    {orderedItems[index].title}
                                </Typography>
                                <Typography variant="body_short">{orderedItems[index].subTitle}</Typography>
                            </div>
                        </div>
                        <div className={styles.col2}>
                            {orderedItems[index].icons.map((icon, index2) => {
                                return (
                                    <div
                                        className={styles.iconWrapper}
                                        key={index2}
                                        onClick={(): void => {
                                            icon.onClick();
                                        }}
                                    >
                                        <Icon name={icon.icon} title={icon.icon} color={themeConst.asBuilt}></Icon>
                                    </div>
                                );
                            })}
                            {expanded && (
                                <div
                                    className={styles.expandable}
                                    onClick={(): void => {
                                        console.log('Expand', index);
                                        setExpandedIndex(index);
                                    }}
                                >
                                    <Icon name="more_vertical" title="Expand" color={themeConst.asBuilt}></Icon>
                                </div>
                            )}
                        </div>
                    </div>
                    {expandedIndex == index && (
                        <div className={styles.row2}>
                            {expanded.map((icon, index3) => {
                                return (
                                    <div
                                        className={styles.iconWrapper}
                                        key={index3}
                                        onClick={(): void => {
                                            icon.onClick();
                                        }}
                                    >
                                        <Icon name={icon.icon} title={icon.icon} color={themeConst.asBuilt}></Icon>
                                    </div>
                                );
                            })}
                            <div
                                className={styles.close}
                                onClick={(): void => {
                                    setExpandedIndex(undefined);
                                }}
                            >
                                <Icon name={'close'} title={'Close'} color={themeConst.asBuilt}></Icon>
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }, [orderedItems, isMovable, expanded, expandedIndex]);

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
                elements={rowElements}
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
            ></DraggableOrder>
        </div>
    );
};
