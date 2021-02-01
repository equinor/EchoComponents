import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { getIcon, TagIcon } from '..';
import TagContextMenu from '../tagContextMenu/TagContextMenu';

test('should click show more and popover button should show open state', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = true;
    };
    const tagNo = '123';
    const description = 'tag description';
    const openTagInformation = jest.fn();

    const { rerender } = render(
        <TagContextMenu
            setExpanded={setExpanded}
            openTagInformation={openTagInformation}
            tagNo={tagNo}
            description={description}
            expanded={expanded}
        >
            <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'}></TagIcon>
        </TagContextMenu>
    );

    const showExpandedTagInfoButton = screen.getByTestId('open-tag-info');

    fireEvent.click(showExpandedTagInfoButton);

    expect(expanded).toBeTruthy();
    rerender(
        <TagContextMenu
            setExpanded={setExpanded}
            openTagInformation={openTagInformation}
            tagNo={tagNo}
            description={description}
            expanded={expanded}
        >
            <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'}></TagIcon>
        </TagContextMenu>
    );
    expect(screen.getByText(tagNo)).toBeTruthy();
    expect(screen.getByText(description)).toBeTruthy();
});
