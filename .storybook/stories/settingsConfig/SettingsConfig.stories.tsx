import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SettingsConfigProps } from '../../../src/structure/settingsConfig/SettingsConfig';
import SettingsConfigWrapper from './SettingsConfigWrapper';

export default {
    title: 'SettingsConfig',

    component: SettingsConfigWrapper,
    argTypes: {}
} as Meta;

const Template: Story<SettingsConfigProps> = (args) => <SettingsConfigWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {};
