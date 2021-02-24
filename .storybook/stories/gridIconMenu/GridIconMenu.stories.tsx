import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { GridIconMenuProps } from '../../../src/structure/gridIconMenu/GridIconMenu';
import GridIconMenuWrapper from './GridIconMenuWrapper';

export default {
    title: 'GridIconMenu',
    component: GridIconMenuWrapper,
    argTypes: {}
} as Meta;

const Template: Story<GridIconMenuProps> = (args) => <GridIconMenuWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    gridStyle: { width: '350px' },
    items: [
        {
            icon: 'invert_colors',
            title: 'Disciplines',
            onClick: () => {}
        },
        {
            icon: 'cut',
            title: 'Saved slices',
            onClick: () => {}
        },
        {
            icon: 'bookmarks',
            title: 'Bookmarks',
            onClick: () => {}
        },
        {
            icon: 'convenience_store',
            title: 'Floor',
            onClick: () => {}
        },
        {
            icon: 'view_stream',
            title: 'Areas',
            onClick: () => {}
        },
        {
            icon: 'view_module',
            title: 'Modules',
            onClick: () => {}
        },
        {
            icon: 'widgets',
            title: 'Building block',
            onClick: () => {}
        },
        {
            icon: 'videocam',
            title: 'Animations',
            onClick: () => {}
        },
        {
            icon: 'assignment_return',
            title: 'SO',
            onClick: () => {}
        }
    ]
};
