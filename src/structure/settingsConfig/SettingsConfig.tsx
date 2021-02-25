import React from 'react';

export interface SettingsConfigProps {
    test: string;
}

export const SettingsConfig: React.FC<SettingsConfigProps> = ({ test }: SettingsConfigProps): JSX.Element => {
    return <div>Settings</div>;
};
