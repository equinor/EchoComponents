import React from 'react';
import styles from './tagIcon.module.css';

interface TagIconShadowWrapperProps {
    children: React.ReactNode;
}
/**
 * Component that will wrap the provided child element in a shadow.
 * Should be used to add shadow to the tagIcon component
 *
 * @param {TagIconShadowWrapperProps} { children } Child element to wrap
 * @return {*} {JSX.Element} wrapped child element in a shadow
 */
export const TagIconShadowWrapper: React.FC<TagIconShadowWrapperProps> = ({
    children
}: TagIconShadowWrapperProps): JSX.Element => {
    return <div className={`${styles.shadow}`}>{children}</div>;
};

export default TagIconShadowWrapper;
