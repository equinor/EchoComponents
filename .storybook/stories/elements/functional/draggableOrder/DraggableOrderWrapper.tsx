import React from 'react';
import {
    DraggableOrder,
    DraggableOrderProps
} from '../../../../../src/elements/functional/draggableOrder/DraggableOrder';

const DraggableOrderWrapper: React.FC<DraggableOrderProps> = ({ items, style }: DraggableOrderProps) => {
    items = [<span>1</span>, <span>2</span>, <span>3</span>];

    return (
        <div className={'SliderField'}>
            <DraggableOrder items={items} style={style}></DraggableOrder>
        </div>
    );
};

export default DraggableOrderWrapper;
