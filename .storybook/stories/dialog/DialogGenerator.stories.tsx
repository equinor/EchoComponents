import { Typography } from '@equinor/eds-core-react';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { DialogGeneratorProps } from '../../../src/components/dialogGenerator/DialogGenerator';
import DialogGeneratorWrapper from './DialogGeneratorWrapper';

export default {
    title: 'DialogGenerator',
    component: DialogGeneratorWrapper,
    argTypes: {}
} as Meta;

const Template: Story<DialogGeneratorProps> = (args) => <DialogGeneratorWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    dialogStyle: { width: '400px' } as CSSProperties,
    content: (
        <Typography variant="body_long">
            I accept that flow direction is an indication, and should not be used for safety critical tasks.
            <br></br>
            <br></br>This is because flow-direction is not a condition of the Tecnhical Requirements (TR) for 3D-models
            in Equinor.
        </Typography>
    ),
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
