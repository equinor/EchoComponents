import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './linkCard.module.css';

export interface LinkCardProps {
    image: string;
    title: string;
    subTitle: string;
    links: LinkCardItem[];
    style: CSSProperties;
}

export interface LinkCardItem {
    title: string;
    url: string;
    target?: '_blank' | '_self';
}

export const LinkCard: React.FC<LinkCardProps> = ({
    style,
    image,
    title,
    subTitle,
    links
}: LinkCardProps): JSX.Element => {
    return (
        <div className={styles.linkCard} style={style}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${image})`
                }}
            ></div>
            <div className={styles.header}>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="h3">{subTitle}</Typography>
            </div>
            <div className={styles.links}>
                {links.map((link, index) => {
                    return (
                        <a href={link.url} key={index} target={link.target ? link.target : '_self'}>
                            <Typography variant="body_short">{link.title}</Typography>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
