import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { SliderField } from '../../elements/sliderField/SliderField';

test('normal slider should call onChange event when slider value changes, clicking without moving the slider will not fire onChange event', async () => {
    const onChangeFunction = jest.fn();

    // Normal slider with numeric values
    render(<SliderField value={1} min={0} max={5} title={'New slider'} onChange={onChangeFunction} />);
    const sliderElem = screen.getByRole('slider');

    fireEvent.change(sliderElem, { target: { value: 2 } });
    fireEvent.change(sliderElem, { target: { value: 2 } }); //This line will not trigger onChange

    expect(onChangeFunction).toHaveBeenCalledTimes(1);

    fireEvent.change(sliderElem, { target: { value: 4 } });
    expect(onChangeFunction).toHaveBeenCalledTimes(2);
});

test('slider with labels should call onChange event when slider value changes, clicking without moving the slider will not fire onChange event', async () => {
    const onChangeFunction = jest.fn();

    // Slider with labels instead of numbers
    render(
        <SliderField
            value={1}
            min={0}
            max={5}
            labels={['A', 'B', 'C', 'D', 'E', 'F']}
            title={'New slider2'}
            onChange={onChangeFunction}
        />
    );
    const sliderElem = screen.getByRole('slider');

    fireEvent.change(sliderElem, { target: { value: 2 } });
    fireEvent.change(sliderElem, { target: { value: 2 } }); //This line will not trigger onChange

    expect(onChangeFunction).toHaveBeenCalledTimes(1);

    fireEvent.change(sliderElem, { target: { value: 4 } });
    expect(onChangeFunction).toHaveBeenCalledTimes(2);
});
