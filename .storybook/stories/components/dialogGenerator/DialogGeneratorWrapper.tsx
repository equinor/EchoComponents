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

const FormGeneratorWrapper: React.FC<DialogGeneratorWrapperProps> = ({
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
    if (cancelButton) {
        cancelButton.onClick = () => {
            setDialog(false);
        };
    } else {
        cancelButton = null;
    }

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
                <DialogGenerator
                    dialogStyle={dialogStyle}
                    content={<Typography variant="body_long">{sampleContentText}</Typography>}
                    title={title}
                    actionButton={actionButton}
                    cancelButton={cancelButton}
                ></DialogGenerator>
            )}
        </div>
    );
};

export default FormGeneratorWrapper;
