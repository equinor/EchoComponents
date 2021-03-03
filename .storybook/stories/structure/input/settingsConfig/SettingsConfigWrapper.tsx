import React from 'react';
import { SettingsConfig, SettingsConfigProps } from '../../../../../src/structure/input/settingsConfig/SettingsConfig';

const SettingsConfigWrapper: React.FC<SettingsConfigProps> = ({ style, fields }: SettingsConfigProps) => {
    return (
        <div className={'SettingsConfig'}>
            <SettingsConfig style={style} fields={fields}></SettingsConfig>
        </div>
    );
};

export default SettingsConfigWrapper;
