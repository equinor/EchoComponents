import { themeConst } from '@equinor/echo-framework';
import { Typography } from '@equinor/eds-core-react';
import cx from 'classnames';
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
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
    expandedIcons: IconItem[];
}

export interface IconListItem {
    title?: string;
    subTitle?: string;
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
                <div className={styles.item} key={index}>
                    <div className={styles.row1}>
                        <div className={styles.col1}>
                            {isMovable && (
                                <div className={cx(styles.moveable, DraggableHandleSelector)}>
                                    <Icon name="unfold_more" title="Move" color={themeConst.asBuilt}></Icon>
                                </div>
                            )}
                            <div className={cx(styles.info, isMovable ? '' : styles.infoMargin)}>
                                {orderedItems[index].title && (
                                    <Typography variant="body_short" bold>
                                        {orderedItems[index].title}
                                    </Typography>
                                )}
                                {orderedItems[index].subTitle && (
                                    <Typography variant="body_short">{orderedItems[index].subTitle}</Typography>
                                )}
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
                            {expandedIcons && (
                                <div
                                    className={styles.expandable}
                                    onClick={(): void => {
                                        expandedIndex.current = index;
                                        setRedraw(!redraw);
                                    }}
                                >
                                    <Icon name="more_vertical" title="Expand" color={themeConst.asBuilt}></Icon>
                                </div>
                            )}
                        </div>
                    </div>
                    {expandedIndex.current == index && (
                        <div className={styles.row2}>
                            {expandedIcons.map((icon, index3) => {
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
                                    expandedIndex.current = undefined;
                                    setRedraw(!redraw);
                                }}
                            >
                                <Icon name={'close'} title={'Close'} color={themeConst.asBuilt}></Icon>
                            </div>
                        </div>
                    )}
                </div>
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
