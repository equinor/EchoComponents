import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import DialogGeneratorWrapper, { DialogGeneratorWrapperProps } from './DialogGeneratorWrapper';

export default {
    title: 'Components/DialogGenerator',
    component: DialogGeneratorWrapper,
    argTypes: {}
} as Meta;

const Template: Story<DialogGeneratorWrapperProps> = (args) => <DialogGeneratorWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    dialogStyle: { width: '400px' } as CSSProperties,
    sampleContentText: 'This sample only shows text as content. But this component accept any JSX.Elements.',
    actionButton: {
        title: 'Accept',
        onClick: () => {
            console.log('Action');
        }
    },
    cancelButton: {
        title: 'Cancel',
        onClick: () => {
            console.log('Cancel');
        }
    },
    title: 'Note!'
};
