import React from 'react';
import { GridIconMenu, GridIconMenuProps } from '../../../../src/structure/gridIconMenu/GridIconMenu';

const GridIconMenuWrapper: React.FC<GridIconMenuProps> = ({ activeIndex, gridStyle, items }: GridIconMenuProps) => {
    return (
        <div className={'GridIconMenu'}>
            <GridIconMenu activeIndex={activeIndex} gridStyle={gridStyle} items={items}></GridIconMenu>
        </div>
    );
};

export default GridIconMenuWrapper;
