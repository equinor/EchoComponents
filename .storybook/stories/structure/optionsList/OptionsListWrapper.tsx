import React, { useState } from 'react';
import { OptionsList, OptionsListProps } from '../../../../src/structure/optionsList/OptionsList';
import { OptionsItem } from '../../../../src/types/optionsItem';

const OptionsListWrapper: React.FC<OptionsListProps> = ({ style, items, titles, columns }: OptionsListProps) => {
    const [itemsToShow, setItemsToShow] = useState<OptionsItem[]>(items);

    for (let d of itemsToShow) {
        d.onSelected = setSelected;
    }

    function setSelected(rowIndex: number, columnIndex: number) {
        if (rowIndex === 0) {
            const updatedItemsToShow = [...itemsToShow];
            updatedItemsToShow.map((u) => (u.selectedColumnIndex = columnIndex));
            setItemsToShow(updatedItemsToShow);
        } else {
            const updatedItemsToShow = [...itemsToShow];
            const updatedItem = updatedItemsToShow[rowIndex];
            updatedItem.selectedColumnIndex = columnIndex;
            setItemsToShow(updatedItemsToShow);
        }
    }

    return <OptionsList items={itemsToShow} style={style} titles={titles} columns={columns}></OptionsList>;
};

export default OptionsListWrapper;
