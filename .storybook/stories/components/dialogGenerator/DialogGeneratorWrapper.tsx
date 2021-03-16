import { Typography } from '@equinor/eds-core-react';
import * as _ from 'lodash';
import React, { CSSProperties, useState } from 'react';
import { DialogGenerator } from '../../../../src/components/dialogGenerator/DialogGenerator';
import { ActionButton } from '../../../../src/types/actionButton';

export interface DialogGeneratorWrapperProps {
    dialogStyle?: CSSProperties;
    sampleContentText: string;
    title: string;
    actionButton?: ActionButton;
    cancelButton?: ActionButton;
}

const DialogGeneratorWrapper: React.FC<DialogGeneratorWrapperProps> = ({
    dialogStyle,
    sampleContentText,
    title,
    actionButton,
    cancelButton
}: DialogGeneratorWrapperProps) => {
    const [dialog, setDialog] = useState<boolean>(true);

    if (!_.isEmpty(actionButton)) {
        actionButton.onClick = () => {
            setDialog(false);
        };
    } else {
        actionButton = null;
    }
    if (!_.isEmpty(cancelButton)) {
        cancelButton.onClick = () => {
            setDialog(false);
        };
    } else {
        cancelButton = null;
    }

    const getButtons = () => {
        const buttons = [];
        if (cancelButton) buttons.push(cancelButton);
        if (actionButton) buttons.push(actionButton);
        return buttons;
    };

    return (
        <div className={'DialogGenerator'}>
            {!dialog && (
                <span
                    onClick={() => {
                        setDialog(true);
                    }}
                >
                    Show dialog
                </span>
            )}
            {dialog && (
                <DialogGenerator dialogStyle={dialogStyle} title={title} actionButtons={getButtons()}>
                    <Typography variant="body_long">{sampleContentText}</Typography>
                    <Typography>This one can not be edited</Typography>
                </DialogGenerator>
            )}
        </div>
    );
};

export default DialogGeneratorWrapper;
