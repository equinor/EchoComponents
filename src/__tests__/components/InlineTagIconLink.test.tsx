import { render } from '@testing-library/react';
import React from 'react';
import InlineTagIconLink from '../../components/inlineTagIconLink/InlineTagIconLink';

test('should show correct color and info', () => {
    render(
        <InlineTagIconLink
            tagNo={'test'}
            description={'221312'}
            tagCategoryDescription={'testset32323'}
            legendColor={'#FF0000'}
            onClickHandler={() => {
                console.log('ff');
            }}
        />
    );
});
