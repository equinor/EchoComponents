/* eslint-disable @typescript-eslint/no-explicit-any */

import { themeConst } from '@equinor/echo-framework';
import { useFocus, useOnOutsideClick } from '@equinor/echo-utils';
import { Search as EdsSearch } from '@equinor/eds-core-react';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../../elements/icon/Icon';
import styles from './dropdown.module.css';

interface DropdownItemProps {
    selected: string;
    setSelected: (selected: string) => void;
    data: any[];
    openDownWards: boolean;
    placeholder: string;
    filterFunc?: (data: any[], filter: string) => any[];
    isDisabled?: boolean;
    disabledText?: string;
    styleClass?: 'compact' | 'default';
    showSearch: boolean;
    position?: 'relative' | 'absolute';
    triggerOpen?: (value: boolean) => void;
}

/**
 * Component that renders a dropdown menu, e.g., for a plant selector.
 * Additional possibility to make the list searchable by adding a search field.
 * @param {DropdownItemProps} {
 *     selected: The item that is currently selected from the list.
 *     data: The list of data items to be displayed in the dropdown.
 *     placeholder: Placeholder text to be displayed when no item is selected.
 *     openDownWards: Flag which decides if the menu is opened downwards or upwards.
 *     filterFunc: Function which filters the list of data based on the value of the search field.
 *     setSelected: Function for setting the selected item.
 *     isDisabled: Flag which disables the dropdown.
 *     disabledText: The title text that displays when the dropdown is disabled.
 *     styleClass: Decides which style the dropdown should have. Either default or home.
 *     showSearch: Flag which decides whether we should include the search field or not.
 *     position: Determines if the dropdown position should be relative or absolute.
 *     triggerOpen: Callback to trigger when the dropdown is opened.
 * }
 * @return {*} {JSX.Element} The dropdown component.
 */
export const Dropdown: React.FC<DropdownItemProps> = ({
    selected,
    data,
    placeholder,
    openDownWards,
    filterFunc,
    setSelected,
    isDisabled,
    disabledText,
    styleClass,
    showSearch,
    position,
    triggerOpen
}: DropdownItemProps) => {
    Dropdown.defaultProps = {
        disabledText: 'Disabled'
    };
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const wrapperRef = useOnOutsideClick(() => {
        if (triggerOpen) triggerOpen(false);
        setIsOpen(false);
    });

    useEffect(() => {
        if (filterFunc) {
            setFilteredData(filterFunc(data, filter));
        } else {
            setFilteredData(data);
        }
    }, [data, filter, filterFunc]);

    const handleIsOpenToggle = (event: React.MouseEvent): void => {
        if (triggerOpen) triggerOpen(!isOpen);
        setIsOpen(!isOpen);
        event.preventDefault();
    };

    const handleItemSelected = (event: React.MouseEvent, item: string): void => {
        event.stopPropagation();
        if (triggerOpen) setIsOpen(false);
        setIsOpen(false);
        setSelected(item);
        setFilter('');
        event.preventDefault();
    };

    const handleSetFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.stopPropagation();
        setFilter(event.currentTarget.value);
    };

    const RenderDropdown = (): JSX.Element => {
        const dropdownShow = openDownWards ? styles.dropdownDownShow : styles.dropdownUpShow;
        const [searchInput, setFocus] = useFocus<HTMLInputElement>();

        useEffect(() => {
            setFocus();
        }, [setFocus]);

        return (
            <div
                ref={wrapperRef}
                data-testid="dropdown-content"
                style={{
                    width:
                        buttonRef && buttonRef.current && buttonRef.current?.offsetWidth
                            ? `${buttonRef.current?.offsetWidth}px`
                            : '100%',
                    position: position
                }}
                className={isOpen ? dropdownShow : styles.dropdown}
            >
                {showSearch && (
                    <div className={styles.searchWrapper}>
                        <EdsSearch
                            onChange={handleSetFilter}
                            value={filter}
                            ref={searchInput}
                            placeholder={'Search'}
                        ></EdsSearch>
                    </div>
                )}

                <div className={filterFunc ? styles.filteredDataListWithSearch : styles.filteredDataList}>
                    {filteredData
                        ? filteredData.map((item: string, index: number) => (
                              <button
                                  tabIndex={0}
                                  key={index}
                                  role="option"
                                  aria-selected={false}
                                  className={styles.options}
                                  onClick={(event: React.MouseEvent): void => handleItemSelected(event, item)}
                              >
                                  <div className={styles.optionsItem}>{item}</div>
                              </button>
                          ))
                        : null}
                </div>
            </div>
        );
    };

    return (
        <div>
            {!openDownWards && RenderDropdown()}
            <button
                data-testid="dropdown-button"
                disabled={isDisabled}
                ref={buttonRef}
                className={[
                    styleClass === 'compact' ? styles.dropdownToggleHome : styles.dropdownToggle,
                    styleClass === 'compact' && isOpen === true ? styles.dropdownToggleHomeActive : '',
                    styleClass === 'compact' && selected ? styles.dropdownSelected : ''
                ].join(' ')}
                onClick={(event: React.MouseEvent): void => handleIsOpenToggle(event)}
                title={isDisabled ? disabledText : 'Choose an option'}
            >
                <div data-testid="display-text">{selected.length > 0 ? selected : placeholder} </div>
                <Icon
                    name="arrow_drop_down"
                    title="Choose options"
                    color={isDisabled ? themeConst.disabledColor : themeConst.asBuilt}
                    size={24}
                ></Icon>
            </button>
            {openDownWards && RenderDropdown()}
        </div>
    );
};

export default Dropdown;
