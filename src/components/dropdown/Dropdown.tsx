/* eslint-disable @typescript-eslint/no-explicit-any */

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
    styleClass?: DropdownStyleClass;
    showSearch: boolean;
    relativeDropdown?: boolean;
    triggerOpen?: (value: boolean) => void;
}

export enum DropdownStyleClass {
    Default = 'default',
    Home = 'home'
}
const Dropdown: React.FC<DropdownItemProps> = ({
    selected,
    data,
    placeholder,
    openDownWards,
    filterFunc,
    setSelected,
    isDisabled,
    styleClass,
    showSearch,
    relativeDropdown,
    triggerOpen
}: DropdownItemProps) => {
    const disabledColor = '#6f6f6f';
    const asBuiltColor = '#007079';
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [filter, setFilter] = useState<string>('');
    const [filteredData, setFilteredData] = useState<any>(null);
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
                    position: relativeDropdown ? 'relative' : 'absolute'
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
                                  {item !== '' ? (
                                      <div className={styles.optionsItem}>{item}</div>
                                  ) : (
                                      <div className={styles.optionsItem}>None</div>
                                  )}
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
                    styleClass === DropdownStyleClass.Home ? styles.dropdownToggleHome : styles.dropdownToggle,
                    styleClass === DropdownStyleClass.Home && isOpen === true ? styles.dropdownToggleHomeActive : '',
                    styleClass === DropdownStyleClass.Home && selected ? styles.dropdownSelected : ''
                ].join(' ')}
                onClick={(event: React.MouseEvent): void => handleIsOpenToggle(event)}
                title={isDisabled ? 'Disabled while syncing or loading data' : 'Choose an option'}
            >
                <div data-testid="display-text" className="d-inline-block">
                    {selected.length > 0 ? selected : placeholder}{' '}
                </div>
                <Icon
                    name="arrow_drop_down"
                    className="float-right"
                    title="Choose options"
                    color={isDisabled ? disabledColor : asBuiltColor}
                    size={24}
                ></Icon>
            </button>
            {openDownWards && RenderDropdown()}
        </div>
    );
};

export default Dropdown;
