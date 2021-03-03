import * as _ from 'lodash';
import React, { useState } from 'react';
import {
    ChoiceItem,
    ChoiceList,
    ChoiceListProps,
    ChoiceSelected
} from '../../../../../src/structure/input/choiceList/ChoiceList';

const ChoiceListWrapper: React.FC<ChoiceListProps> = ({ style, items, titles }: ChoiceListProps) => {
    const [disc, setDisc] = useState<ChoiceItem[]>(items);

    for (let d of disc) {
        d.onSelected = setDiscipline;
    }

    function setDiscipline(index: number, selected: ChoiceSelected) {
        if (index === 0) {
            const updatedDisciplines = _.clone(disc);
            for (let updateDiscipline of updatedDisciplines) {
                updateDiscipline.selected = selected;
            }
            setDisc(updatedDisciplines);
        } else {
            const updatedDisciplines = _.clone(disc);
            const updateDiscipline = updatedDisciplines[index];
            updateDiscipline.selected = selected;
            setDisc(updatedDisciplines);
        }
    }

    return (
        <div className={'DisciplineListControl'}>
            <ChoiceList items={disc} style={style} titles={titles}></ChoiceList>
        </div>
    );
};

export default ChoiceListWrapper;
