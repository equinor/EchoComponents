import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { DisciplineListControl, DisciplineSelected } from '../structure/disciplineListControl/DisciplineListControl';

test('should click on a radio button and a new value is selected', () => {
    render(
        <DisciplineListControl
            disciplines={[
                {
                    title: 'Mechanical',
                    color: '#155515',
                    selected: 'show',
                    onSelected: (selected: DisciplineSelected): void => {
                        console.log(selected);
                    }
                },
                {
                    title: 'Pipe',
                    color: '#727272',
                    selected: 'hide',
                    onSelected: (selected: DisciplineSelected): void => {
                        console.log(selected);
                    }
                }
            ]}
            widthStyle={{ width: '350px' }}
        />
    );

    const selectedRadios = screen.getAllByRole(`radio`, { checked: true });
    const notSelectedRadios = screen.getAllByRole(`radio`, { checked: false });
    expect(selectedRadios.length).toBe(2);
    expect(notSelectedRadios.length).toBe(4);
});
