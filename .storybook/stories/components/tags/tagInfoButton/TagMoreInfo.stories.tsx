import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import DataInfoButton, {
    DataInfoButtonProps
} from '../../../../../src/components/tags/contextMenuPopover/DataInfoButton';

export default {
    title: 'Components/Tags/TagInfoButton',

    component: DataInfoButton,
    argTypes: {}
} as Meta;

const Template: Story<DataInfoButtonProps> = (args) => <DataInfoButton {...args} />;

export const Default = Template.bind({});

Default.args = {
    data: {
        label: 'test',
        numberOfItems: 2,
        itemType: 'test',
        onTagInfoClicked: () => {
            console.log('ff');
        }
    }
};
