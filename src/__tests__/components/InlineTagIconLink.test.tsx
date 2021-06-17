import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import InlineTagIconLink from '../../components/inlineTagIconLink/InlineTagIconLink';

test('onclick function should be called on click', async () => {
    const onClickFunction = jest.fn();

    render(
        <InlineTagIconLink
            tagNo={'test'}
            description={'221312'}
            tagCategoryDescription={'testset32323'}
            legendColor={'#FF0000'}
            onClickHandler={onClickFunction}
        />
    );
    const buttonElem = screen.getByRole('button');

    fireEvent.click(buttonElem);
    expect(onClickFunction).toHaveBeenCalledTimes(1);
});
