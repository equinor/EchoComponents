import React from 'react';
import renderer from 'react-test-renderer';
import { DataInfoButton } from '../../..';

it('renders open DataInfoButton with badge correctly', () => {
    const data = {
        numberOfItems: 5,
        label: 'P&ID',
        ariaLabel: 'P&ID',
        onTagInfoClicked: jest.fn(),
        itemType: 'document'
    };

    const tree = renderer.create(<DataInfoButton data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders open DataInfoButton without badge correctly', () => {
    const data = {
        numberOfItems: 1,
        label: 'D&ID',
        onTagInfoClicked: jest.fn(),
        itemType: 'document'
    };

    const tree = renderer.create(<DataInfoButton data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders open DataInfoButton with badge with over 99 items correctly', () => {
    const data = {
        numberOfItems: 120,
        label: 'Others',
        onTagInfoClicked: jest.fn(),
        itemType: 'document'
    };

    const tree = renderer.create(<DataInfoButton data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
});
