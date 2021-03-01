import * as _ from 'lodash';
import React, { useState } from 'react';
import {
    Discipline,
    DisciplineListControl,
    DisciplineSelected
} from '../../../src/structure/disciplineListControl/DisciplineListControl';
import { DisciplineListControlWrapperProps } from './DisciplineListControl.stories';

const DisciplineListControlWrapper: React.FC<DisciplineListControlWrapperProps> = ({
    style,
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
            <DisciplineListControl disciplines={disc} style={style}></DisciplineListControl>
        </div>
    );
};

export default DisciplineListControlWrapper;
