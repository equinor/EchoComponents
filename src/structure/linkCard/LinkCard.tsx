import { Tooltip, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties, useEffect, useState } from 'react';
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
    const titleRef = React.createRef<HTMLElement>();
    const subTitleRef = React.createRef<HTMLElement>();
    const [showTitleToolTip, setShowTitleToolTip] = useState<boolean>(false);
    const [showSubTitleToolTip, setShowSubTitleToolTip] = useState<boolean>(false);

    useEffect(() => {
        if (titleRef.current && titleRef.current.scrollHeight > 46) {
            setShowTitleToolTip(true);
        }
    }, [titleRef]);

    useEffect(() => {
        if (subTitleRef.current && subTitleRef.current.scrollHeight > 46) {
            setShowSubTitleToolTip(true);
        }
    }, [subTitleRef]);

    return (
        <div className={styles.wrapper} style={style}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${image})`
                }}
            ></div>
            <div className={styles.header}>
                {showTitleToolTip ? (
                    <Tooltip placement="bottomLeft" title={title}>
                        <Typography variant="h3" className={styles.title} ref={titleRef}>
                            {title}
                        </Typography>
                    </Tooltip>
                ) : (
                    <Typography className={styles.title} variant="h3" ref={titleRef}>
                        {title}
                    </Typography>
                )}
                {showSubTitleToolTip ? (
                    <Tooltip placement="bottomLeft" title={subTitle}>
                        <Typography className={styles.subTitle} variant="h3" ref={subTitleRef}>
                            {subTitle}
                        </Typography>
                    </Tooltip>
                ) : (
                    <Typography className={styles.subTitle} variant="h3" ref={subTitleRef}>
                        {subTitle}
                    </Typography>
                )}
            </div>
            <div className={styles.links}>
                {links.map((link, index) => {
                    return (
                        <a href={link.url} key={index} target={link.target ?? '_self'}>
                            <Typography className={styles.link} variant="body_short">
                                {link.title}
                            </Typography>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
