import React from 'react';
import renderer from 'react-test-renderer';
import { DialogGenerator } from '../../..';

it('renders full DialogGenerator', () => {
    const tree = renderer
        .create(
            <DialogGenerator
                dialogStyle={{ width: '300px' }}
                title={'This is the title'}
                actionButtons={[
                    { title: 'I changed my mind', onClick: jest.fn() },
                    { title: 'I agree', onClick: jest.fn(), variant: 'outlined' }
                ]}
            >
                <p>Hello from the inside</p>
            </DialogGenerator>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders DialogGenerator without buttons', () => {
    const tree = renderer
        .create(
            <DialogGenerator title={'This is the title'} actionButtons={[]}>
                <p>Hello from the inside</p>
            </DialogGenerator>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
