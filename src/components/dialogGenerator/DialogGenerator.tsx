import { Button, Dialog } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { ActionButton } from '../../types/actionButton';
import styles from './dialogGenerator.module.css';

export interface DialogGeneratorProps {
    dialogStyle?: CSSProperties;
    children: React.ReactNode;
    title: string;
    actionButtons: ActionButton[];
}
/**
 * Component that renders a dialog box based on input properties
 *
 * @param {DialogGeneratorProps} {
 *     dialogStyle: style property to override existing styling on the dialog wrapper
 *     title: the title of the dialog
 *     children: The main content of the dialog
 *     actionButtons: the buttons to show in the dialog
 * }
 * @return {*}  {JSX.Element} Dialog component
 */
export const DialogGenerator: React.FC<DialogGeneratorProps> = ({
    dialogStyle,
    title,
    children,
    actionButtons
}: DialogGeneratorProps): JSX.Element => {
    return (
        <Dialog style={dialogStyle}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.CustomContent>{children}</Dialog.CustomContent>
            {actionButtons.length > 0 && (
                <Dialog.Actions className={styles.footer}>
                    {actionButtons.map((actionButton, index) => {
                        return (
                            <Button
                                key={index}
                                onClick={actionButton.onClick}
                                variant={actionButton.variant}
                                color={actionButton.color}
                            >
                                {actionButton.title}
                            </Button>
                        );
                    })}
                </Dialog.Actions>
            )}
        </Dialog>
    );
};
