import React from 'react';
import renderer from 'react-test-renderer';
import { ListRow } from '../../../components/listRow/ListRow';

it('renders ListRow correctly without expandable row', () => {
    const tree = renderer
        .create(
            <ListRow
                isDraggable={true}
                item={{
                    title: 'First item',
                    subTitle: 'Sub title',
                    icons: [{ icon: 'edit', onClick: jest.fn() }]
                }}
                rowIndex={0}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders ListRow correctly with expandable row', () => {
    const tree = renderer
        .create(
            <ListRow
                isDraggable={true}
                item={{
                    title: 'First item',
                    subTitle: 'Sub title',
                    icons: [{ icon: 'edit', onClick: jest.fn() }]
                }}
                rowIndex={0}
                expandable={{
                    expanded: true,
                    setExpanded: jest.fn(),
                    iconItems: [{ icon: 'edit', onClick: jest.fn() }]
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
