import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import DropdownWrapper, { DropdownStyleClass, DropdownWrapperProps } from './DropdownWrapper';

export default {
    title: 'Dropdown',

    component: DropdownWrapper,
    argTypes: {
        styleClass: {
            control: {
                type: 'select',
                options: [DropdownStyleClass.Home, DropdownStyleClass.Default]
            }
        }
    }
} as Meta;

const Template: Story<DropdownWrapperProps> = (args) => <DropdownWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    data: ['Aasta Hanseen', 'Johan Sverdrup', 'Johan Castberg', 'Mongstad'],
    placeholder: 'Select a plant',
    openDownWards: true,
    showSearch: true,
    isDisabled: false,
    relativeDropdown: true
};
