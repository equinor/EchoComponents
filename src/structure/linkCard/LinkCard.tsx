import { Tooltip, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties, useEffect, useState } from 'react';
import { LinkCardItem } from '../../types/linkCardItem';
import styles from './linkCard.module.css';

export interface LinkCardProps {
    image: string;
    title: string;
    subTitle: string;
    links: LinkCardItem[];
    style?: CSSProperties;
}
/**
 * Component that renders a card with an image and a list of links
 *
 * @param {LinkCardProps} {
 *     style: style element to override wrapper style
 *     image: the image scr of the image to be displayed
 *     title: the title of the card
 *     subTitle: the subtitle of the cars
 *     links { A list of links to display
 *          title: the text of the link
 *          url: the url to the link
 *          target: how the link should be opened. Possible values are '_blank' | '_self', default is '_self'
 *     }
 * }
 * @return {*}  {JSX.Element} a card element with an image and some provided links
 */
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
                    <Tooltip placement="bottom-start" title={title}>
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
                    <Tooltip placement="bottom-start" title={subTitle}>
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
