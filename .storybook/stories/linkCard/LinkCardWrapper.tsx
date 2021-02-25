import React from 'react';
import { LinkCard, LinkCardProps } from '../../../src/structure/linkCard/LinkCard';

const LinkCardWrapper: React.FC<LinkCardProps> = ({ image, title, subTitle, links }: LinkCardProps) => {
    return (
        <div className={'LinkCard'}>
            <LinkCard image={image} title={title} subTitle={subTitle} links={links}></LinkCard>
        </div>
    );
};

export default LinkCardWrapper;
