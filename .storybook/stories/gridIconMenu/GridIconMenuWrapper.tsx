import React from 'react';
import { GridIconMenu, GridIconMenuProps } from '../../../src/structure/gridIconMenu/GridIconMenu';

const GridIconMenuWrapper: React.FC<GridIconMenuProps> = ({ gridStyle, items }: GridIconMenuProps) => {
    return (
        <div className={'GridIconMenu'}>
            <GridIconMenu gridStyle={gridStyle} items={items}></GridIconMenu>
        </div>
    );
};

export default GridIconMenuWrapper;
