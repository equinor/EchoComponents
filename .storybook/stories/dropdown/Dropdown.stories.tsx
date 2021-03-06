import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import DropdownWrapper, { DropdownWrapperProps } from './DropdownWrapper';

export default {
    title: 'Components/Dropdown',

    component: DropdownWrapper,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['compact', 'default']
            }
        }
    }
} as Meta;

const Template: Story<DropdownWrapperProps> = (args) => <DropdownWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    data: [
        'Aasta Hanseen',
        'Johan Sverdrup operation & project',
        'Gullfaks Common documents (A+B+C+Veslefrikk)',
        'Johan Castberg',
        'Mongstad',
        'Aasta Hanseen',
        'Johan Sverdrup',
        'Johan Castberg',
        'Mongstad'
    ],
    placeholder: 'Select a plant',
    openDownWards: true,
    showSearch: true,
    isDisabled: false,
    disabledText: 'Disabled while syncing or loading data',
    maxCharacterCount: 24,
    position: 'absolute'
};
