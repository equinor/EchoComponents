import { Radio, Slider, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
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
}

export interface ConfigChoiceItem {
    title: string;
    value: boolean;
    onSelected: (index: number) => void;
}

export const SettingsConfig: React.FC<SettingsConfigProps> = ({ style, fields }: SettingsConfigProps): JSX.Element => {
    return (
        <div className={styles.settingsConfig} style={style}>
            <div className={styles.fields}>
                {fields.map((field, index) => {
                    if (field.type === ConfigTypes.slider) {
                        const sliderField: ConfigSlider = field as ConfigSlider;
                        return (
                            <div className={styles.slider} key={index}>
                                <Typography variant="body_short">{sliderField.title}</Typography>
                                <div className={styles.sliderWrapper}>
                                    <Slider
                                        value={sliderField.value}
                                        min={sliderField.min}
                                        max={sliderField.max}
                                        ariaLabelledby={sliderField.title}
                                        onChange={(
                                            e: React.FormEvent<HTMLDivElement>,
                                            newValue: number | number[]
                                        ): void => {
                                            sliderField.onChange(newValue as number);
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    } else if (field.type === ConfigTypes.choice) {
                        const choiceField: ConfigChoice = field as ConfigChoice;
                        return (
                            <div className={styles.choice} key={index}>
                                <Typography variant="body_short">{choiceField.title}</Typography>
                                <div className={styles.options}>
                                    {choiceField.choices.map((choice, index2) => {
                                        return (
                                            <div className={styles.choice} key={index2}>
                                                <Radio
                                                    label={choice.title}
                                                    checked={choice.value}
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                                        if (event.target.value) choice.onSelected(index);
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
