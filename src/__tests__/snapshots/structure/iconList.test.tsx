import React from 'react';
import renderer from 'react-test-renderer';
import { IconListItem } from '../../..';
import { IconList } from '../../../structure/iconList/IconList';

it('renders IconList correctly', () => {
    const items: IconListItem[] = [
        {
            title: 'Item 0',
            icons: [
                {
                    icon: 'link',
                    onClick: jest.fn()
                },
                {
                    icon: 'delete_to_trash',
                    onClick: jest.fn()
                }
            ]
        },
        {
            subTitle: 'Subtitle 1',
            icons: [
                {
                    icon: 'link',
                    onClick: jest.fn()
                },
                {
                    icon: 'delete_to_trash',
                    onClick: jest.fn()
                }
            ]
        },
        {
            icons: [
                {
                    icon: 'link',
                    onClick: jest.fn()
                },
                {
                    icon: 'delete_to_trash',
                    onClick: jest.fn()
                }
            ]
        },
        {
            title: 'Item 3',
            subTitle: 'Subtitle 3',
            icons: []
        },
        {
            title: 'Item 4',
            subTitle: 'Subtitle 4',
            icons: [
                {
                    icon: 'link',
                    onClick: jest.fn()
                },
                {
                    icon: 'delete_to_trash',
                    onClick: jest.fn()
                }
            ]
        }
    ];
    const tree = renderer
        .create(
            <IconList
                title={'This is the title'}
                items={items}
                isDraggable={true}
                expandedIcons={['link', 'delete_to_trash'].map((i) => {
                    return {
                        icon: i,
                        onClick: jest.fn()
                    };
                })}
                onUpdatedOrder={jest.fn()}
            ></IconList>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
