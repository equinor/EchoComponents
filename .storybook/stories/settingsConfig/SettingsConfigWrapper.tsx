import React from 'react';
import { SettingsConfig, SettingsConfigProps } from '../../../src/structure/settingsConfig/SettingsConfig';

const SettingsConfigWrapper: React.FC<SettingsConfigProps> = ({ test }: SettingsConfigProps) => {
    return (
        <div className={'SettingsConfig'}>
            <SettingsConfig test={test}></SettingsConfig>
        </div>
    );
};

export default SettingsConfigWrapper;
