import React, { useState } from 'react';
import { ListRow, ListRowProps } from '../../../../../src/components/ui/listRow/ListRow';

const FormGeneratorWrapper: React.FC<ListRowProps> = ({
    isMovable,
    item,
    expandedIcons,
    rowIndex,
    expanded,
    onExpand,
    style
}: ListRowProps) => {
    const [open, setOpen] = useState<boolean>(expanded);

    onExpand = (status: boolean) => {
        setOpen(status);
    };

    return (
        <div className={'ListRow'}>
            <ListRow
                isMovable={isMovable}
                item={item}
                expandedIcons={expandedIcons}
                rowIndex={rowIndex}
                expanded={open}
                onExpand={onExpand}
                style={style}
            ></ListRow>
        </div>
    );
};

export default FormGeneratorWrapper;
