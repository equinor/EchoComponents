import React from 'react';
import { IconList, IconListProps } from '../../../src/structure/iconList/IconList';

const IconListWrapper: React.FC<IconListProps> = ({ style, title, items, isMovable, expanded }: IconListProps) => {
    return (
        <div className={'IconList'}>
            <IconList style={style} title={title} items={items} isMovable={isMovable} expanded={expanded}></IconList>
        </div>
    );
};

export default IconListWrapper;
