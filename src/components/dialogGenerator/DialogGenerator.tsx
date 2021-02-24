import { Button, Dialog } from '@equinor/eds-core-react';
import React from 'react';
import styles from './dialogGenerator.module.css';

export interface DialogGeneratorProps {
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
    title,
    content,
    actionButton,
    cancelButton
}: DialogGeneratorProps): JSX.Element => {
    return (
        <Dialog>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.CustomContent>{content}</Dialog.CustomContent>
            {(actionButton || cancelButton) && (
                <Dialog.Actions>
                    <div className={styles.footer}>
                        {actionButton && <Button onClick={actionButton.onClick}>{actionButton.title}</Button>}
                        {cancelButton && (
                            <Button onClick={cancelButton.onClick} variant="outlined">
                                {cancelButton.title}
                            </Button>
                        )}
                    </div>
                </Dialog.Actions>
            )}
        </Dialog>
    );
};
