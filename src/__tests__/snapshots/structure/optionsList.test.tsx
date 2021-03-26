import React from 'react';
import renderer from 'react-test-renderer';
import { OptionsItem } from '../../..';
import { OptionsList } from '../../../structure/optionsList/OptionsList';

it('renders OptionsList correctly', () => {
    const items = [
        {
            title: 'All',
            color: '#C4C4C4',
            selectedColumnIndex: 0
        },
        {
            title: 'Structure',
            color: '#926338',
            selectedColumnIndex: 1
        },
        {
            title: 'Electric',
            color: '#00727A',
            selectedColumnIndex: 1
        },
        {
            title: 'Instrument',
            color: '#1E003D',
            selectedColumnIndex: 3
        },
        {
            title: 'Mechanical',
            // color: '#155515',
            selectedColumnIndex: 1
        },
        {
            title: 'Pipe',
            color: '#727272',
            selectedColumnIndex: 0
        },
        {
            title: 'Pipe Sup.',
            color: '#646464',
            selectedColumnIndex: 0
        },
        {
            title: 'Safety',
            color: '#990000',
            selectedColumnIndex: 1
        }
    ] as OptionsItem[];

    const tree = renderer
        .create(
            <OptionsList items={items} titles={['Disciplines', 'Show', 'Transp.', 'Hide', 'Another']} columns={4} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
