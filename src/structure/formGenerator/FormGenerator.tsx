import { Button, TextField } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { Icon } from '../../elements/icons/icon/Icon';
import styles from './formGenerator.module.css';

export interface FormGeneratorProps {
    style: CSSProperties;
    fields: FormTextField[];
    submit: FormSubmit;
}

export enum FieldTypes {
    text = 'text',
    number = 'number',
    note = 'note'
}

export interface FormTextField {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (index: number, value: string | number) => void;
    type: FieldTypes;
    wrapperStyle?: CSSProperties;
    fieldStyle?: CSSProperties;
    meta?: string;
}
export interface FormSubmit {
    icon: string;
    title: string;
    onSubmit: () => void;
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({
    style,
    fields,
    submit
}: FormGeneratorProps): JSX.Element => {
    return (
        <div className={styles.formGenerator} style={style}>
            <div className={styles.fields}>
                {fields.map((field, index) => {
                    if (
                        field.type === FieldTypes.text ||
                        field.type === FieldTypes.number ||
                        field.type === FieldTypes.note
                    ) {
                        const textField: FormTextField = field as FormTextField;
                        return (
                            <div className={styles.field} key={index} style={textField.wrapperStyle}>
                                <TextField
                                    id={textField.id}
                                    placeholder={textField.placeholder}
                                    label={textField.label}
                                    autoComplete="off"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
                                        if (field.type === FieldTypes.text || field.type === FieldTypes.note) {
                                            textField.onChange(index, e.target.value);
                                        } else {
                                            textField.onChange(index, parseFloat(e.target.value));
                                        }
                                    }}
                                    type={textField.type === FieldTypes.number ? 'number' : 'text'}
                                    meta={textField.meta}
                                    multiline={textField.type === FieldTypes.note ? true : false}
                                    style={textField.fieldStyle}
                                />
                            </div>
                        );
                    }
                })}
            </div>
            <div className={styles.submit}>
                <Button onClick={submit.onSubmit}>
                    <Icon name={submit.icon} title={submit.title} color="white"></Icon>
                    {submit.title}
                </Button>
            </div>
        </div>
    );
};
