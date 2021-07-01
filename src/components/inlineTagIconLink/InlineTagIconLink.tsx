import { Button, Typography } from '@equinor/eds-core-react';
import React from 'react';
import { Icon } from '../..';
import { getIcon } from '../../helpers/getIcon';
import styles from './inlineTagIconLink.module.css';

export interface InlineTagIconLinkProps {
    onClickHandler?: () => void;
    tagNo: string;
    description: string;
    tagCategoryDescription?: string;
    icon?: string | SVGSVGElement | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
    legendColor: string;
    width?: string;
    disableHover?: boolean;
}

export const InlineTagIconLink: React.FC<InlineTagIconLinkProps> = ({
    onClickHandler,
    tagNo,
    description,
    tagCategoryDescription,
    icon,
    legendColor,
    width,
    disableHover
}: InlineTagIconLinkProps): JSX.Element => {
    const limitTextLength = (text: string, characterLimit?: number): string => {
        if (!characterLimit || text.length <= characterLimit) {
            return text;
        }
        return text.slice(0, characterLimit).concat('...');
    };

    const showEDSOrCustomIcon = (
        iconToShow: string | SVGSVGElement | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    ): SVGSVGElement | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> => {
        if (typeof iconToShow === 'string') {
            return <Icon name={iconToShow} color={'white'} title={iconToShow} />;
        } else {
            return iconToShow;
        }
    };

    const buttonStyle = disableHover ? styles.tagButtonNoHover : styles.tagButton;

    return (
        <Button variant={'ghost'} onClick={onClickHandler} className={buttonStyle} style={width ? width : ''}>
            <div style={{ background: legendColor }} className={styles.icon}>
                {tagCategoryDescription && getIcon(tagCategoryDescription ?? '')}
                {!tagCategoryDescription && icon && showEDSOrCustomIcon(icon)}
            </div>
            <div className={styles.textContainer}>
                <Typography variant="body_short_link" className={styles.tag}>
                    {limitTextLength(tagNo, 16)}
                </Typography>
                <Typography className={styles.description} variant="body_short">
                    {limitTextLength(description, 24)}
                </Typography>
            </div>
        </Button>
    );
};

export default InlineTagIconLink;
