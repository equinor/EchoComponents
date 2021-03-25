import React from 'react';
import renderer from 'react-test-renderer';
import { LinkCard } from '../../../structure/linkCard/LinkCard';
import { LinkCardItem } from '../../../types/linkCardItem';

it('renders LinkCardItem correctly', () => {
    const links: LinkCardItem[] = [
        {
            title: 'Full',
            url: '#'
        },
        {
            title: 'HVDC',
            url: 'https://yahoo.com',
            target: '_blank'
        },
        {
            title: 'MSF',
            url: '#'
        },
        {
            title: 'UPM',
            url: '#'
        }
    ];
    const tree = renderer
        .create(
            <LinkCard
                title={'Johan Sverdrup'}
                subTitle={'Processing Platform 2'}
                links={links}
                image={'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRLqgF0OqRHg/v0/1200x900.jpg'}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
