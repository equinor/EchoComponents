import * as _ from 'lodash';
import React, { useState } from 'react';
import {
    Discipline,
    DisciplineListControl,
    DisciplineSelected
} from '../../../src/structure/disciplineListControl/DisciplineListControl';
import { DisciplineListControlWrapperProps } from './DisciplineListControl.stories';

const DisciplineListControlWrapper: React.FC<DisciplineListControlWrapperProps> = ({
    width,
    disciplines
}: DisciplineListControlWrapperProps) => {
    const [disc, setDisc] = useState<Discipline[]>(disciplines);

    for (let d of disc) {
        d.onSelected = setDiscipline;
    }

    function setDiscipline(index: number, selected: DisciplineSelected) {
        const updatedDisciplines = _.clone(disc);
        const updateDiscipline = updatedDisciplines[index];
        updateDiscipline.selected = selected;
        setDisc(updatedDisciplines);
    }

    return (
        <div className={'DisciplineListControl'}>
            <DisciplineListControl disciplines={disc} widthStyle={width}></DisciplineListControl>
        </div>
    );
};

export default DisciplineListControlWrapper;
