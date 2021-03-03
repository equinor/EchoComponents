import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { DraggableOrderProps } from '../../../../../src/elements/functional/draggableOrder/DraggableOrder';
import DraggableOrderWrapper from './DraggableOrderWrapper';

export default {
    title: 'Elements/Functional/DraggableOrder',

    component: DraggableOrderWrapper,
    argTypes: {}
} as Meta;

const Template: Story<DraggableOrderProps> = (args) => <DraggableOrderWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    items: [],
    style: { width: '350px' }
};
