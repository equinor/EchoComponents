import React from 'react';
import renderer from 'react-test-renderer';
import { DialogGenerator } from '../../..';

it('renders full DialogGenerator', () => {
    const tree = renderer
        .create(
            <DialogGenerator
                dialogStyle={{ width: '300px' }}
                content={<p>Hello from the inside</p>}
                title={'This is the title'}
                actionButton={{ title: 'I agree', onClick: jest.fn() }}
                cancelButton={{ title: 'I changed my mind', onClick: jest.fn() }}
            ></DialogGenerator>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders DialogGenerator without buttons', () => {
    const tree = renderer
        .create(<DialogGenerator content={<p>Hello from the inside</p>} title={'This is the title'}></DialogGenerator>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
