import * as _ from 'lodash';
import React, { useState } from 'react';
import { ChoiceItem, ChoiceList, ChoiceListProps } from '../../../../../src/structure/input/choiceList/ChoiceList';

const ChoiceListWrapper: React.FC<ChoiceListProps> = ({ style, items, titles, columns }: ChoiceListProps) => {
    const [disc, setDisc] = useState<ChoiceItem[]>(items);

    for (let d of disc) {
        d.onSelected = setDiscipline;
    }

    function setDiscipline(rowIndex: number, columnIndex: number) {
        if (rowIndex === 0) {
            const updatedDisciplines = _.clone(disc);
            for (let updateDiscipline of updatedDisciplines) {
                updateDiscipline.selectedColumnIndex = columnIndex;
            }
            setDisc(updatedDisciplines);
        } else {
            const updatedDisciplines = _.clone(disc);
            const updateDiscipline = updatedDisciplines[rowIndex];
            updateDiscipline.selectedColumnIndex = columnIndex;
            setDisc(updatedDisciplines);
        }
    }

    return (
        <div className={'DisciplineListControl'}>
            <ChoiceList items={disc} style={style} titles={titles} columns={columns}></ChoiceList>
        </div>
    );
};

export default ChoiceListWrapper;
