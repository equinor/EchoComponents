import { Button, Typography } from '@equinor/eds-core-react';
import React from 'react';
import { getIcon } from '../../helpers/getIcon';
import styles from './inlineTagIconLink.module.css';

export interface InlineTagIconLinkProps {
    onClickHandler?: () => void;
    tagNo: string;
    description: string;
    tagCategoryDescription?: string;
    legendColor: string;
    width?: number;
}

export const InlineTagIconLink: React.FC<InlineTagIconLinkProps> = ({
    onClickHandler,
    tagNo,
    description,
    tagCategoryDescription,
    legendColor,
    width
}: InlineTagIconLinkProps): JSX.Element => {
    const limitTextLength = (text: string, characterLimit?: number): string => {
        if (!characterLimit || text.length <= characterLimit) {
            return text;
        }
        return text.slice(0, characterLimit).concat('...');
    };

    return (
        <Button variant={'ghost'} onClick={onClickHandler} className={styles.tagButton}>
            <div style={{ background: legendColor }} className={styles.icon}>
                {getIcon(tagCategoryDescription ?? '')}
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
