import React from 'react';
import { IconList, IconListProps } from '../../../src/structure/iconList/IconList';

const IconListWrapper: React.FC<IconListProps> = ({ test }: IconListProps) => {
    return (
        <div className={'IconList'}>
            <IconList test={test}></IconList>
        </div>
    );
};

export default IconListWrapper;
