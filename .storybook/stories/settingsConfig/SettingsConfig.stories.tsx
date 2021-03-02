import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { SettingsConfigProps } from '../../../src/structure/settingsConfig/SettingsConfig';
import SettingsConfigWrapper from './SettingsConfigWrapper';

export default {
    title: 'SettingsConfig',

    component: SettingsConfigWrapper,
    argTypes: {}
} as Meta;

const Template: Story<SettingsConfigProps> = (args) => <SettingsConfigWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: { width: '350px' } as CSSProperties,
    fields: [
        {
            type: 'slider',
            value: 15,
            min: 0,
            max: 20,
            title: 'Movement speed',
            onChange: () => {}
        },
        {
            type: 'slider',
            value: 7,
            min: 0,
            max: 20,
            title: 'Rotation speed',
            onChange: () => {}
        },
        {
            type: 'slider',
            value: 2,
            min: 1,
            max: 3,
            title: 'Size',
            onChange: () => {}
        },
        {
            type: 'choice',
            title: 'Joystick position',
            choices: [
                {
                    title: 'Left',
                    value: true
                },
                {
                    title: 'Right',
                    value: false
                },
                {
                    title: 'Hidden',
                    value: false
                }
            ],
            onSelected: (index: number) => {
                console.log('Selected', index);
            }
        },
        {
            type: 'choice',
            title: 'Rotation direction',
            choices: [
                {
                    title: 'Standard',
                    value: true
                },
                {
                    title: 'Inverted',
                    value: false
                }
            ],
            onSelected: (index: number) => {
                console.log('Selected', index);
            }
        }
    ]
};
