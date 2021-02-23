import React from 'react';
import { DisciplineListControl } from '../../../src/structure/disciplineListControl/DisciplineListControl';
import { DisciplineListControlWrapperProps } from './DisciplineListControl.stories';

const DisciplineListControlWrapper: React.FC<DisciplineListControlWrapperProps> = ({
    width,
    disciplines
}: DisciplineListControlWrapperProps) => {
    return (
        <div className={'DisciplineListControl'}>
            <DisciplineListControl disciplines={disciplines} widthStyle={width}></DisciplineListControl>
        </div>
    );
};

export default DisciplineListControlWrapper;
