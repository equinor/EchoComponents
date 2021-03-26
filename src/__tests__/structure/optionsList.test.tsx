import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { OptionsItem } from '../..';
import { OptionsList } from '../../structure/optionsList/OptionsList';

it('Should be able to click radio button for a given item', () => {
    const onSelectedSpy = jest.fn();
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
            selectedColumnIndex: 1,
            onSelected: onSelectedSpy
        }
    ] as OptionsItem[];

    const columns = 4;
    render(
        <OptionsList items={items} titles={['Disciplines', 'Show', 'Transp.', 'Hide', 'Another']} columns={columns} />
    );

    const radioButtonWithSafetyTitle = screen.getAllByTitle(`Safety`);
    expect(radioButtonWithSafetyTitle.length).toBe(columns);
    fireEvent.click(radioButtonWithSafetyTitle[0]);

    expect(onSelectedSpy).toBeCalledWith(7, 0);
});
