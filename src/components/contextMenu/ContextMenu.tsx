import React, { CSSProperties } from 'react';
import TagIcon from '../../elements/icons/tagIcon/TagIcon';
import TagContextMenu from '../tagContextMenu/TagContextMenu';
import style from './contextMenu.module.css';

interface ContextMenuProps {
    icon: JSX.Element;
    legendColor: string;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    tagNo: string;
    description: string;
    positionStyle: CSSProperties;
    openTagInformation: () => void;
    selectedClassName?: string;
    selected: boolean;
    children?: React.ReactNode;
}
/**
 * Component that renders full context menu functionality, meant for displaying tag context menu.
 * With the ability to provide more information button and related popover that should be wrapped with the context menu
 *
 * @param {ContextMenuProps} {
 *     icon: icon to be displayed
 *     expanded: flag to determine if context menu should be expanded or not
 *     legendColor: color used for the tag icon
 *     setExpanded: method to update expanded flag
 *     tagNo: The tag number to display
 *     description: The tag description to display
 *     positionStyle: The position styling element used to position the context menu
 *     openTagInformation: Method that will be called when expanded context menu is clicked
 *     selected: Flag to handle if there are multiple context menu's on a page, and a selected style should be applied
 *     selectedClassName: styling used to handle multiple tag visible on the page at the same time, class will be added to tagIcon when context menu is not expanded
 *     children: Related elements to display, e.g. more information button
 * }
 * @return {*} {JSX.Element} Context menu with relevant children wrapped
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({
    icon,
    expanded,
    legendColor,
    setExpanded,
    tagNo,
    description,
    positionStyle,
    selected,
    selectedClassName,
    openTagInformation,
    children
}: ContextMenuProps): JSX.Element => {
    return (
        <div style={positionStyle} className={style.wrapper}>
            <TagContextMenu
                setExpanded={setExpanded}
                openTagInformation={openTagInformation}
                tagNo={tagNo}
                description={description}
                expanded={expanded}
                selected={selected}
                selectedClassName={selectedClassName}
            >
                <TagIcon icon={icon} legendColor={legendColor}></TagIcon>
            </TagContextMenu>
            {expanded && children}
        </div>
    );
};

export default ContextMenu;
