import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Dropdown from '../../components/dropdown/Dropdown';

const setSelected = jest.fn();
const DefaultDropdown: React.FC = () => {
    return (
        <Dropdown
            selected=""
            setSelected={setSelected}
            data={[]}
            openDownWards={true}
            placeholder=""
            showSearch={true}
        />
    );
};

test('should click on dropdown to open it', () => {
    const { rerender } = render(<DefaultDropdown />);

    expect(screen.getByTestId('dropdown-content').className).toEqual('dropdown');
    const dropdownButton = screen.getByTestId('dropdown-button');
    fireEvent.click(dropdownButton);

    rerender(<DefaultDropdown />);

    expect(screen.getByTestId('dropdown-content')).toBeTruthy();
    expect(screen.getByTestId('dropdown-content').className).not.toEqual('dropdown');
});

test('should close dropdown when clicking outside of it', () => {
    const { rerender } = render(
        <div data-testid="outside">
            <DefaultDropdown />
        </div>
    );

    const dropdownButton = screen.getByTestId('dropdown-button');
    fireEvent.click(dropdownButton);

    const outside = screen.getByTestId('outside');
    fireEvent.mouseDown(outside);

    rerender(
        <div data-testid="outside">
            <DefaultDropdown />
        </div>
    );

    expect(screen.getByTestId('dropdown-content').className).toEqual('dropdown');
});

test('should click on dropdown to open it', () => {
    render(
        <Dropdown
            selected=""
            setSelected={setSelected}
            data={[]}
            openDownWards={true}
            placeholder=""
            showSearch={true}
            variant={'compact'}
        />
    );

    expect(screen.getByTestId('dropdown-button').classList).toContain('dropdownToggleHome');
});

test('should show selected option when one is provided', () => {
    render(
        <Dropdown
            selected="Selected value"
            setSelected={setSelected}
            data={[]}
            openDownWards={true}
            placeholder=""
            showSearch={true}
        />
    );

    expect(screen.getByTestId('display-text').textContent).toBe('Selected value ');
});

test('should show placeholder text if selected option is not provided', () => {
    render(
        <Dropdown
            selected=""
            setSelected={setSelected}
            data={[]}
            openDownWards={true}
            placeholder="Placeholder text"
            showSearch={true}
        />
    );

    expect(screen.getByTestId('display-text').textContent).toBe('Placeholder text ');
});
