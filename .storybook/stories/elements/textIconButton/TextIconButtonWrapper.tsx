import React from 'react';
import { TextIconButton, TextIconButtonProps } from '../../../../src/elements/textIconButton/TextIconButton';

const TextIconButtonWrapper: React.FC<TextIconButtonProps> = ({
    icon,
    title,
    onClick,
    active,
    style
}: TextIconButtonProps) => {
    return (
        <div className={'TextIcon'}>
            <TextIconButton icon={icon} title={title} onClick={onClick} active={active} style={style} />
        </div>
    );
};

export default TextIconButtonWrapper;
