import { Button, Dialog } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './dialogGenerator.module.css';

export interface DialogGeneratorProps {
    dialogStyle?: CSSProperties;
    content: JSX.Element[] | JSX.Element;
    title: string;
    actionButton?: DialogButton;
    cancelButton?: DialogButton;
}

export interface DialogButton {
    title: string;
    onClick: () => void;
}

export const DialogGenerator: React.FC<DialogGeneratorProps> = ({
    dialogStyle,
    title,
    content,
    actionButton,
    cancelButton
}: DialogGeneratorProps): JSX.Element => {
    return (
        <Dialog style={dialogStyle}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.CustomContent>{content}</Dialog.CustomContent>
            {(actionButton || cancelButton) && (
                <Dialog.Actions className={styles.footer}>
                    {actionButton && <Button onClick={actionButton.onClick}>{actionButton.title}</Button>}
                    {cancelButton && (
                        <Button onClick={cancelButton.onClick} variant="outlined">
                            {cancelButton.title}
                        </Button>
                    )}
                </Dialog.Actions>
            )}
        </Dialog>
    );
};
