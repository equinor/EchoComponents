import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextIconButtonProps } from '../../../../src/elements/textIconButton/TextIconButton';
import TextIconButtonWrapper from './TextIconButtonWrapper';

export default {
    title: 'Elements/Icons/TextIconButton',

    component: TextIconButtonWrapper,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: [
                    'cut',
                    'invert_colors',
                    'bookmarks',
                    'convenience_store',
                    'view_stream',
                    'view_module',
                    'widgets',
                    'videocam',
                    'assignment_return'
                ]
            }
        }
    }
} as Meta;

const Template: Story<TextIconButtonProps> = (args) => <TextIconButtonWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    icon: 'cut',
    title: 'Saved slices',
    onClick: () => {},
    style: {},
    active: false
};
