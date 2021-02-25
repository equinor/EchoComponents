import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import {
    FormNoteField,
    FormSubmit,
    FormTextField,
    FormGeneratorProps
} from '../../../src/structure/formGenerator/FormGenerator';
import FormGeneratorWrapper from './FormGeneratorWrapper';

export default {
    title: 'FormGenerator',

    component: FormGeneratorWrapper,
    argTypes: {}
} as Meta;

const Template: Story<FormGeneratorProps> = (args) => <FormGeneratorWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: { width: '354px' } as CSSProperties,
    fields: [
        {
            id: '1',
            label: 'Title',
            placeholder: 'Placeholder input text',
            value: '',
            type: 'text'
        },
        {
            id: '2',
            label: 'Time at waypoint',
            placeholder: 'Placeholder input text',
            value: '',
            type: 'number',
            style: { width: '200px' },
            meta: 'Sec'
        },
        {
            id: '3',
            label: 'Description',
            placeholder: 'Placeholder input text',
            value: '',
            style: { height: '300px' },
            type: 'note'
        }
    ] as (FormTextField | FormNoteField)[],
    submit: {
        icon: 'save',
        title: 'Save',
        onSubmit: () => {
            console.log('Submit');
        }
    } as FormSubmit
};
