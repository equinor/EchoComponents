import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { DraggableItemsWrapperProps } from '../../../../src/elements/draggableItemsWrapper/DraggableItemsWrapper';
import DraggableItemsWrapperContainer from './DraggableItemsWrapperContainer';
export default {
    title: 'Elements/Functional/DraggableItemWrapper',

    component: DraggableItemsWrapperContainer,
    argTypes: {}
} as Meta;

const Template: Story<DraggableItemsWrapperProps> = (args) => <DraggableItemsWrapperContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: { width: '350px' }
};
