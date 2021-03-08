import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { ChoiceItem, ChoiceListProps } from '../../../../../src/structure/input/choiceList/ChoiceList';
import ChoiceListWrapper from './ChoiceListWrapper';

export default {
    title: 'Structure/Input/ChoiceList',

    component: ChoiceListWrapper,
    argTypes: {}
} as Meta;

const Template: Story<ChoiceListProps> = (args) => <ChoiceListWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    items: [
        {
            title: 'All',
            color: '#C4C4C4',
            selected: 'option1'
        },
        {
            title: 'Structure',
            color: '#926338',
            selected: 'option1'
        },
        {
            title: 'Electric',
            color: '#00727A',
            selected: 'option2'
        },
        {
            title: 'Instrument',
            color: '#1E003D',
            selected: 'option1'
        },
        {
            title: 'Mechanical',
            // color: '#155515',
            selected: 'option1'
        },
        {
            title: 'Pipe',
            color: '#727272',
            selected: 'option3'
        },
        {
            title: 'Pipe Sup.',
            color: '#646464',
            selected: 'option1'
        },
        {
            title: 'Safety',
            color: '#990000',
            selected: 'option3'
        }
    ] as ChoiceItem[],
    style: { width: '354px' } as CSSProperties,
    titles: ['Disciplines', 'Show', 'Transp.', 'Hide']
};
