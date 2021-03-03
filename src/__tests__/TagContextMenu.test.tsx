import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { getIcon, TagIcon } from '..';
import TagContextMenu from '../components/tags/tagContextMenu/TagContextMenu';

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
            selected={false}
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
            selected={false}
        >
            <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'}></TagIcon>
        </TagContextMenu>
    );
    expect(screen.getByText(tagNo)).toBeTruthy();
    expect(screen.getByText(description)).toBeTruthy();
});

test('if tagContext has selected set to true and a class is provided the class provided should be used', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = true;
    };
    const tagNo = '123';
    const description = 'tag description';
    const openTagInformation = jest.fn();
    const selectedClassName = 'IsItMeYourLookingFor';

    render(
        <TagContextMenu
            setExpanded={setExpanded}
            openTagInformation={openTagInformation}
            tagNo={tagNo}
            description={description}
            expanded={expanded}
            selected={true}
            selectedClassName={selectedClassName}
        >
            <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'}></TagIcon>
        </TagContextMenu>
    );

    const showExpandedTagInfoButton = screen.getByTestId('open-tag-info');

    expect(showExpandedTagInfoButton.classList.contains(selectedClassName)).toBe(true);
});
test('if tagContext has selected set to false and a class is provided the class provided no class will be applied', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = true;
    };
    const tagNo = '123';
    const description = 'tag description';
    const openTagInformation = jest.fn();
    const selectedClassName = 'IsItMeYourLookingFor';

    render(
        <TagContextMenu
            setExpanded={setExpanded}
            openTagInformation={openTagInformation}
            tagNo={tagNo}
            description={description}
            expanded={expanded}
            selected={false}
            selectedClassName={selectedClassName}
        >
            <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'}></TagIcon>
        </TagContextMenu>
    );

    const showExpandedTagInfoButton = screen.getByTestId('open-tag-info');

    expect(showExpandedTagInfoButton.classList.contains(selectedClassName)).toBe(false);
    expect(showExpandedTagInfoButton.classList.contains('selected')).toBe(false);
});

test('if tagContext has selected set to true and a class is not provided the default class will be applied', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = true;
    };
    const tagNo = '123';
    const description = 'tag description';
    const openTagInformation = jest.fn();
    const selectedClassName = 'IsItMeYourLookingFor';

    render(
        <TagContextMenu
            setExpanded={setExpanded}
            openTagInformation={openTagInformation}
            tagNo={tagNo}
            description={description}
            expanded={expanded}
            selected={true}
        >
            <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'}></TagIcon>
        </TagContextMenu>
    );

    const showExpandedTagInfoButton = screen.getByTestId('open-tag-info');

    expect(showExpandedTagInfoButton.classList.contains(selectedClassName)).toBe(false);
    expect(showExpandedTagInfoButton.classList.contains('selected')).toBe(true);
});
