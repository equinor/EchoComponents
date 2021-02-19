import DataInfoPopover from '../../components/contextMenuPopover/DataInfoPopover';
import { DataInformation } from '../../types/dataInformation';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders DataInfoPopover without data correctly', () => {
    const dataToShow: DataInformation[] = [];
    const isLoading = false;

    const tree = renderer.create(<DataInfoPopover dataToShow={dataToShow} isLoading={isLoading} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders DataInfoPopover with data correctly', () => {
    const dataToShow: DataInformation[] = [
        {
            numberOfItems: 5,
            label: 'P&ID',
            ariaLabel: 'P&ID',
            onTagInfoClicked: jest.fn(),
            itemType: 'document'
        },
        {
            numberOfItems: 1,
            label: 'D&ID',
            onTagInfoClicked: jest.fn(),
            itemType: 'document'
        }
    ];
    const isLoading = false;

    const tree = renderer.create(<DataInfoPopover dataToShow={dataToShow} isLoading={isLoading} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders DataInfoPopover with multiple item types correctly', () => {
    const dataToShow: DataInformation[] = [
        {
            numberOfItems: 5,
            label: 'P&ID',
            ariaLabel: 'P&ID',
            onTagInfoClicked: jest.fn(),
            itemType: 'document'
        },
        {
            numberOfItems: 1,
            label: 'D&ID',
            onTagInfoClicked: jest.fn(),
            itemType: 'document'
        },
        {
            numberOfItems: 5,
            label: 'M1',
            onTagInfoClicked: jest.fn(),
            itemType: 'notifications'
        },
        {
            numberOfItems: 1,
            label: 'M2',
            onTagInfoClicked: jest.fn(),
            itemType: 'notifications'
        }
    ];
    const isLoading = false;

    const tree = renderer.create(<DataInfoPopover dataToShow={dataToShow} isLoading={isLoading} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders DataInfoPopover with loading indicator', () => {
    const dataToShow: DataInformation[] = [];
    const isLoading = true;

    const tree = renderer.create(<DataInfoPopover dataToShow={dataToShow} isLoading={isLoading} />).toJSON();
    expect(tree).toMatchSnapshot();
});
