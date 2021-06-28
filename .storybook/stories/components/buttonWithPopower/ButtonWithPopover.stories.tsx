import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
    ButtonWithPopoverWrapperProps,
    default as ButtonWithPopover,
    default as ButtonWithPopoverWrapper
} from './ButtonWithPopoverWrapper';

export default {
    title: 'Components/ButtonWithPopover',

    component: ButtonWithPopover
} as Meta;

const Template: Story<ButtonWithPopoverWrapperProps> = (args) => <ButtonWithPopoverWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    fetchedData: [
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'test',
            itemButtonClassName: '',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'M1',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '2',
            numberOfItems: 2,
            label: 'M2',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '2',
            numberOfItems: 2,
            label: 'Loop',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '3',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '3',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '4',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '4',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '5',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '5',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: (): void => {}
        }
    ],
};
