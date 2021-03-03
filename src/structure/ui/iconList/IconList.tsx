import { themeConst } from '@equinor/echo-framework';
import { Typography } from '@equinor/eds-core-react';
import cx from 'classnames';
import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
import { DraggableOrder, DragItem } from '../../../elements/functional/draggableOrder/DraggableOrder';
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
    const [expandedIndex, setExpandedIndex] = useState<number>();
    const [rowElements, setRowElements] = useState<JSX.Element[]>([]);
    const [order, setOrder] = useState<number[]>([]);

    const createRows = useCallback(() => {
        const rows: JSX.Element[] = [];
        if (order.length === 0) {
            for (let i = 0; i < items.length; i++) {
                rows.push(createRow(i, i));
            }
        } else {
            console.log('Order', order);
            let index = 0;
            for (const i of order) {
                rows.push(createRow(i, index));
                index++;
            }
        }
        setRowElements(rows);
        console.log('Rows', rows);
        function createRow(index: number, order: number): JSX.Element {
            return (
                <div className={styles.item} key={order}>
                    <div className={styles.row1}>
                        <div className={styles.col1}>
                            {isMovable && (
                                <div className={cx(styles.moveable, 'draggableHandle')}>
                                    <Icon name="unfold_more" title="Move" color={themeConst.asBuilt}></Icon>
                                </div>
                            )}
                            <div className={cx(styles.info, isMovable ? '' : styles.infoMargin)}>
                                <Typography variant="body_short" bold>
                                    {items[index].title}
                                </Typography>
                                <Typography variant="body_short">{items[index].subTitle}</Typography>
                            </div>
                        </div>
                        <div className={styles.col2}>
                            {items[index].icons.map((icon, index2) => {
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
                                        console.log('Expanding', order, index);
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
    }, [order, items, isMovable, expanded, expandedIndex]);

    useEffect(() => {
        createRows();
    }, [items, isMovable, createRows, order]);

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
                onChange={(newDragItems: DragItem[], newElements: JSX.Element[]): void => {
                    console.log('Reordered', newDragItems, newElements);
                    setRowElements(newElements);
                    const ord = [];
                    for (const dragItem of newDragItems) {
                        ord.push(dragItem.id);
                    }
                    setOrder(ord);
                }}
            ></DraggableOrder>
        </div>
    );
};
