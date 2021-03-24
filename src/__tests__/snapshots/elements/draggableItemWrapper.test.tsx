import React from 'react';
import renderer from 'react-test-renderer';
import { DraggableItemsWrapper } from '../../../elements/draggableItemsWrapper/DraggableItemsWrapper';

it('renders DraggableItemsWrapper correctly', () => {
    const tree = renderer
        .create(
            <DraggableItemsWrapper onChange={jest.fn()}>
                <span key="1">1</span>
                <span key="2">2</span>
                <span key="3">3</span>
                <span key="4">4</span>
                <span key="5">5</span>
                <span key="6">6</span>
            </DraggableItemsWrapper>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
