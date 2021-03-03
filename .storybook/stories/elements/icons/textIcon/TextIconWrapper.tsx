import React from 'react';
import { TextIcon, TextIconProps } from '../../../../../src/elements/icons/textIcon/TextIcon';

const TextIconWrapper: React.FC<TextIconProps> = ({ icon, title, onClick, active, style }: TextIconProps) => {
    return (
        <div className={'TextIcon'}>
            <TextIcon icon={icon} title={title} onClick={onClick} active={active} style={style}></TextIcon>
        </div>
    );
};

export default TextIconWrapper;
