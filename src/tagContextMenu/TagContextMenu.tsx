import { themeConst } from '@equinor/echo-framework';
import { Button, Typography } from '@equinor/eds-core-react';
import React from 'react';
import { Icon } from '../icon/Icon';
import { TagIconShadowWrapper } from '../tagIcon/TagIconShadow';
import styles from './tagContextMenu.module.css';

interface TagContextMenuProps {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    tagNo: string;
    description: string;
    openTagInformation: () => void;
    selected: boolean;
    selectedClassName?: string;
    children: React.ReactNode;
}
/**
 * Component that renders a tag context menu that can be expanded and closed upon click
 * The condensed variant will only display the the relevant tag icon
 * The expanded variant will display relevant tag icon, tag number and tag description
 *
 * @param {TagContextMenuProps} {
 *     expanded: flag that state if the context menu should be expanded or not
 *     setExpanded: method to update the expanded flag
 *     tagNo: the tag no to display
 *     description: the tag description
 *     openTagInformation: method called when expanded context menu is called
 *     selected: Flag to handle if there are multiple context menu's on a page, and a selected style should be applied
 *     selectedClassName: styling used to handle multiple tag visible on the page at the same time, class will be added to tagIcon when context menu is not expanded
 *     children: Meant to be used to pass TagIcon component to this component
 * }
 * @return {*}  {JSX.Element} a tag context menu for the provided properties
 */
export const TagContextMenu: React.FC<TagContextMenuProps> = ({
    expanded,
    setExpanded,
    tagNo,
    description,
    selected,
    selectedClassName,
    openTagInformation,
    children
}: TagContextMenuProps): JSX.Element => {
    if (expanded) {
        return (
            <div className={styles.contextWrapperExpanded} onClick={openTagInformation}>
                <div className={styles.tagInfoWrapper}>
                    {children}
                    <div className={styles.tagText}>
                        <Typography variant="h5" className={styles.tagHeader}>
                            {tagNo}
                        </Typography>
                        <Typography variant="body_short" className={styles.tagDescription}>
                            {description}
                        </Typography>
                    </div>
                    <div className={styles.tagInfoIcon}>
                        <Button variant="ghost_icon">
                            <Icon name="info_circle" title="tag information" color={themeConst.asBuilt}></Icon>
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                data-testid="open-tag-info"
                className={`${styles.contextWrapper} ${
                    selected ? (selectedClassName ? selectedClassName : styles.selected) : ''
                }`}
                onClick={(): void => {
                    setExpanded(true);
                }}
            >
                <TagIconShadowWrapper>{children}</TagIconShadowWrapper>
            </div>
        );
    }
};

export default TagContextMenu;
