import React, { CSSProperties } from 'react';
import { ChoiceField } from '../../../elements/fields/choiceField/ChoiceField';
import { SliderField } from '../../../elements/fields/sliderField/SliderField';
import styles from './settingsConfig.module.css';
export interface SettingsConfigProps {
    style: CSSProperties;
    fields: (ConfigSlider | ConfigChoice)[];
}

export enum ConfigTypes {
    slider = 'slider',
    choice = 'choice'
}

export interface ConfigSlider {
    type: ConfigTypes;
    value: number;
    min: number;
    max: number;
    title: string;
    onChange: (value: number) => void;
}

export interface ConfigChoice {
    type: ConfigTypes;
    title: string;
    choices: ConfigChoiceItem[];
    onSelected: (index: number) => void;
}

export interface ConfigChoiceItem {
    title: string;
    value: boolean;
}

export const SettingsConfig: React.FC<SettingsConfigProps> = ({ style, fields }: SettingsConfigProps): JSX.Element => {
    return (
        <div className={styles.settingsConfig} style={style}>
            <div className={styles.fields}>
                {fields.map((field, index) => {
                    if (field.type === ConfigTypes.slider) {
                        const sliderField: ConfigSlider = field as ConfigSlider;
                        return (
                            <SliderField
                                value={sliderField.value}
                                min={sliderField.min}
                                max={sliderField.max}
                                title={sliderField.title}
                                onChange={(value: number): void => {
                                    sliderField.onChange(value);
                                }}
                                style={{ margin: '0 0 30px 0' }}
                            ></SliderField>
                        );
                    } else if (field.type === ConfigTypes.choice) {
                        const choiceField: ConfigChoice = field as ConfigChoice;
                        return (
                            <ChoiceField
                                title={choiceField.title}
                                choices={choiceField.choices}
                                onSelected={(index: number): void => {
                                    choiceField.onSelected(index);
                                }}
                                style={{ margin: '0 0 25px 0' }}
                            ></ChoiceField>
                        );
                    }
                })}
            </div>
        </div>
    );
};
