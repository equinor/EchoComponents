import React from 'react';
import { IconList, IconListProps } from '../../../../../src/structure/ui/iconList/IconList';

const IconListWrapper: React.FC<IconListProps> = ({ style, title, items, isMovable, expandedIcons }: IconListProps) => {
    return (
        <div className={'IconList'}>
            <IconList
                style={style}
                title={title}
                items={items}
                isMovable={isMovable}
                expandedIcons={expandedIcons}
            ></IconList>
        </div>
    );
};

export default IconListWrapper;
