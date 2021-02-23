import React, { CSSProperties } from 'react';
import styles from './formGenerator.module.css';

export interface FormGeneratorProps {
    widthStyle: CSSProperties;
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({ widthStyle }: FormGeneratorProps): JSX.Element => {
    return <div className={styles.formGenerator} style={widthStyle}></div>;
};
