import { Typography } from '@equinor/eds-core-react';
import React from 'react';
import { getIcon } from '../../helpers/getIcon';
import styles from './inlineTagIconLink.module.css';

export interface InlineTagIconLinkProps {
    onClickHandler?: () => void;
    tagNo: string;
    description: string;
    tagCategoryDescription?: string;
    legendColor: string;
}

export const InlineTagIconLink: React.FC<InlineTagIconLinkProps> = ({
    onClickHandler,
    tagNo,
    description,
    tagCategoryDescription,
    legendColor
}: InlineTagIconLinkProps): JSX.Element => {
    return (
        <div onClick={onClickHandler} className={styles.tagWrapper}>
            <div style={{ background: legendColor }} className={styles.icon}>
                {getIcon(tagCategoryDescription ?? '')}
            </div>
            <div>
                <Typography variant="body_short_link" className={styles.tag}>
                    {tagNo}
                </Typography>
                <Typography className={styles.description} variant="body_short">
                    {description}
                </Typography>
            </div>
        </div>
    );
};

export default InlineTagIconLink;
