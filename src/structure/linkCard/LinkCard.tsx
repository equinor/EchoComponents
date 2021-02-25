import React from 'react';

export interface LinkCardProps {
    image: string;
    title: string;
    subTitle: string;
    links: LinkCardItem[];
}

export interface LinkCardItem {
    title: string;
    url: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ image, title, subTitle }: LinkCardProps): JSX.Element => {
    return <div>Link card</div>;
};
