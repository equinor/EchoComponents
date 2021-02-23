import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { Discipline, DisciplineSelected } from '../../../src/structure/disciplineListControl/DisciplineListControl';
import DisciplineListControlWrapper from './DisciplineListControlWrapper';

export interface DisciplineListControlWrapperProps {
    width: CSSProperties;
    disciplines: Discipline[];
}

export default {
    title: 'DisciplineListControl',

    component: DisciplineListControlWrapper,
    argTypes: {}
} as Meta;

const Template: Story<DisciplineListControlWrapperProps> = (args) => <DisciplineListControlWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    disciplines: [
        {
            title: 'All',
            color: '#C4C4C4',
            selected: 'show',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Structure',
            color: '#926338',
            selected: 'show',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Electric',
            color: '#00727A',
            selected: 'transparent',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Instrument',
            color: '#1E003D',
            selected: 'show',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Mechanical',
            color: '#155515',
            selected: 'show',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Pipe',
            color: '#727272',
            selected: 'hide',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Pipe Sup.',
            color: '#646464',
            selected: 'show',
            onSelected: (selected: DisciplineSelected): void => {}
        },
        {
            title: 'Safety',
            color: '#990000',
            selected: 'show',
            onSelected: (selected: DisciplineSelected): void => {}
        }
    ] as Discipline[],
    width: { width: '354px' } as CSSProperties
};
