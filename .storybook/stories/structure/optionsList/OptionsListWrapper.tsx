import React, { useState } from 'react';
import { OptionsList, OptionsListProps } from '../../../../src/structure/optionsList/OptionsList';
import { OptionsItem } from '../../../../src/types/optionsItem';

const OptionsListWrapper: React.FC<OptionsListProps> = ({ style, items, titles, columns }: OptionsListProps) => {
    const [disc, setDisc] = useState<OptionsItem[]>(items);

    for (let d of disc) {
        d.onSelected = setDiscipline;
    }

    function setDiscipline(rowIndex: number, columnIndex: number) {
        if (rowIndex === 0) {
            const updatedDisciplines = [...disc];
            updatedDisciplines.map((u) => (u.selectedColumnIndex = columnIndex));
            setDisc(updatedDisciplines);
        } else {
            const updatedDisciplines = [...disc];
            const updateDiscipline = updatedDisciplines[rowIndex];
            updateDiscipline.selectedColumnIndex = columnIndex;
            setDisc(updatedDisciplines);
        }
    }

    return <OptionsList items={disc} style={style} titles={titles} columns={columns}></OptionsList>;
};

export default OptionsListWrapper;
