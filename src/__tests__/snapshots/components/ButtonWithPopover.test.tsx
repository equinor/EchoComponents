import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonWithPopover } from '../../..';
import { DataInformation } from '../../../types/dataInformation';

it('renders ButtonWithPopover with more info button correctly', () => {
    const fetchDataToShow = jest.fn();
    const fetchedDataToShow: DataInformation[] = [];

    const tree = renderer
        .create(
            <ButtonWithPopover
                expanded={true}
                onShowMoreClicked={fetchDataToShow}
                isLoading={false}
                fetchedData={fetchedDataToShow}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
