import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { RadioButtonGroup } from '../../elements/radioButtonGroup/RadioButtonGroup';
import { RadioButtonItem } from '../../types/radioButtonItem';

test('should click radio button and onSelected event is called, clicking on selected radio button will not fire onSelected event', async () => {
    const onSelectFunction = jest.fn();
    const buttons: RadioButtonItem[] = [
        { title: 'First value', isChecked: false },
        { title: 'Second value', isChecked: true }
    ];

    render(<RadioButtonGroup title={'My radio button group'} onSelected={onSelectFunction} options={buttons} />);

    const radioButtons = await screen.findAllByRole(`radio`);

    expect(radioButtons.length).toBe(buttons.length);

    fireEvent.click(radioButtons[0]);

    expect(onSelectFunction).toHaveBeenCalledTimes(1);
    expect(onSelectFunction).toHaveBeenCalledWith(0);
    fireEvent.click(radioButtons[1]);
    expect(onSelectFunction).toHaveBeenCalledTimes(1);
});
