import { themeConst } from '@equinor/echo-framework';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TagIconWrapper, { TagIconWrapperProps } from './TagIconWrapper';

export default {
    title: 'Elements/Icons/TagIcon',

    component: TagIconWrapper,
    argTypes: {
        shadow: { table: { disable: true } },
        legendColor: { control: 'color' },
        icon: {
            control: {
                type: 'select',
                options: [
                    'Electrical',
                    'Main Equipment',
                    'Line',
                    'Manual Valve',
                    'Circuit/Starter',
                    'Cable',
                    'Instrument',
                    'Function',
                    'Signal',
                    'Telecom',
                    'Junction Box',
                    'Administrative',
                    'Other'
                ]
            }
        }
    }
} as Meta;

const Template: Story<TagIconWrapperProps> = (args) => <TagIconWrapper {...args} shadow={false} />;

export const Default = Template.bind({});

Default.args = {
    icon: 'Electrical',
    legendColor: themeConst.asBuilt
};

const TemplateShadow: Story<TagIconWrapperProps> = (args) => <TagIconWrapper {...args} shadow={true} />;
export const Shadow = TemplateShadow.bind({});

Shadow.args = {
    icon: 'Electrical',
    legendColor: themeConst.asBuilt
};
