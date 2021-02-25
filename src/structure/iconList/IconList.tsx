import React from 'react';

export interface IconListProps {
    test: string;
}

export const IconList: React.FC<IconListProps> = ({ test }: IconListProps): JSX.Element => {
    return <div>IconList</div>;
};
