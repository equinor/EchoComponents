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
                        <a href={link.url} key={index}>
                            <div className={styles.link}>
                                <Typography variant="body_short">{link.title}</Typography>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
