import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TagContextMenuWrapper, { TagContextMenuWrapperProps } from './TagContextMenuWrapper';

export default {
    title: 'TagContextMenu',

    component: TagContextMenuWrapper,
    argTypes: {
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

const Template: Story<TagContextMenuWrapperProps> = (args) => <TagContextMenuWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    icon: 'Electrical',
    legendColor: '#007079',
    tagNo: 'D-11PSSV0803',
    description: 'CEMENT UNIT',
    selectedClassName: '',
    selected: false
};
