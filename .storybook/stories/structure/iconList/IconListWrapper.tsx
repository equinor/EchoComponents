import React, { CSSProperties } from 'react';
import { IconListItem } from '../../../../src';
import { IconList } from '../../../../src/structure/iconList/IconList';

export interface IconListWrapperProps {
    style?: CSSProperties;
    title: string;
    items: IconListItem[];
    isDraggable: boolean;
    expandedIcons: string[];
    isExpandable: boolean;
}

const IconListWrapper: React.FC<IconListWrapperProps> = ({
    style,
    title,
    items,
    isDraggable,
    expandedIcons,
    isExpandable
}: IconListWrapperProps) => {
    const onUpdatedOrder = (itemsInNewOrder: IconListItem[]) => {
        console.log(itemsInNewOrder);
    };

    return (
        <div className={'IconList'}>
            <IconList
                style={style}
                title={title}
                items={items}
                isDraggable={isDraggable}
                expandedIcons={
                    isExpandable
                        ? expandedIcons.map((i) => {
                              return {
                                  icon: i,
                                  onClick: () => {
                                      console.log('clicked');
                                  }
                              };
                          })
                        : undefined
                }
                onUpdatedOrder={onUpdatedOrder}
            ></IconList>
        </div>
    );
};

export default IconListWrapper;
