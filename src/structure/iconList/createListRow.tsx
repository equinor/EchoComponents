import React from 'react';
import { IconItem } from '../..';
import { ListRow } from '../../components/listRow/ListRow';
import { IconListState } from './IconList';
/**
 * Helper method that will return a list row given some input values. Used in IconList component for rendering rows
 *
 * @param {boolean} isDraggable flag to indicate that the row is draggable
 * @param {number} index the index of the list
 * @param {IconListState} iconListState the state from the IconList component used to create the row and its interactions
 * @param {(value: React.SetStateAction<IconListState>) => void} setIconListState the action to update the state from the IconList component
 * @param {IconItem[]} expandedIcons the icons to be displayed if the row is expandable. Is undefined if the row should not be expandable
 * @return {*}  {React.ReactNode} A list row component created from the input parameters
 */
export const createListRow = (
    isDraggable: boolean,
    index: number,
    iconListState: IconListState,
    setIconListState: (value: React.SetStateAction<IconListState>) => void,
    expandedIcons?: IconItem[]
): React.ReactNode => {
    return (
        <ListRow
            isDraggable={isDraggable}
            item={iconListState.orderedItems[index]}
            expandable={
                expandedIcons
                    ? {
                          expanded: iconListState.expandedIndex == index,
                          iconItems: expandedIcons,
                          setExpanded: (status: boolean): void => {
                              if (status) {
                                  setIconListState({ orderedItems: iconListState.orderedItems, expandedIndex: index });
                              } else {
                                  setIconListState({ orderedItems: iconListState.orderedItems, expandedIndex: -1 });
                              }
                          }
                      }
                    : undefined
            }
            rowIndex={index}
            key={index}
        />
    );
};
