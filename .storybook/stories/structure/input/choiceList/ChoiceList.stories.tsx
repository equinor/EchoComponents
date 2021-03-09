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
            selectedColumnIndex: 0
        },
        {
            title: 'Structure',
            color: '#926338',
            selectedColumnIndex: 1
        },
        {
            title: 'Electric',
            color: '#00727A',
            selectedColumnIndex: 1
        },
        {
            title: 'Instrument',
            color: '#1E003D',
            selectedColumnIndex: 3
        },
        {
            title: 'Mechanical',
            // color: '#155515',
            selectedColumnIndex: 1
        },
        {
            title: 'Pipe',
            color: '#727272',
            selectedColumnIndex: 0
        },
        {
            title: 'Pipe Sup.',
            color: '#646464',
            selectedColumnIndex: 0
        },
        {
            title: 'Safety',
            color: '#990000',
            selectedColumnIndex: 1
        }
    ] as ChoiceItem[],
    style: { width: '454px' } as CSSProperties,
    titles: ['Disciplines', 'Show', 'Transp.', 'Hide', 'Another'],
    columns: 4
};
