import { Table } from '@equinor/eds-core-react';
import React from 'react';
import InlineTagIconLink from '../../../../src/components/inlineTagIconLink/InlineTagIconLink';

export interface InlineTagIconLinkWrapperProps {
    onClickHandler?: () => void;
    tagNo: string;
    description: string;
    tagCategoryDescription?: string;
    legendColor: string;
    width?: number;
}

const { Row, Cell, Head, Body } = Table;

const InlineTagIconLinkWrapper: React.FC<InlineTagIconLinkWrapperProps> = ({
    onClickHandler,
    tagNo,
    description,
    tagCategoryDescription,
    legendColor,
    width
}: InlineTagIconLinkWrapperProps) => {
    return (
        <>
            <h2>Table</h2>
            <Table style={{ maxWidth: '600px' }}>
                <Head>
                    <Row>
                        <Cell>Text</Cell>
                        <Cell>Tag</Cell>
                        <Cell>More text</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>Lorem ipsum dolor sit amet consecteur dit lot.</Cell>
                        <Cell>
                            <InlineTagIconLink
                                onClickHandler={onClickHandler}
                                tagNo={tagNo}
                                description={description}
                                tagCategoryDescription={tagCategoryDescription}
                                legendColor={legendColor}
                            />
                        </Cell>
                        <Cell>Lorem ipsum dolor sit amet consecteur dit lot.</Cell>
                    </Row>
                    <Row>
                        <Cell>Lorem ipsum dolor sit amet consecteur dit lot.</Cell>
                        <Cell>
                            <InlineTagIconLink
                                onClickHandler={onClickHandler}
                                tagNo={'11-ELECTRICAL-FIELD-EQ'}
                                description={'TEST SEPARATOR WATER SUCTION'}
                                tagCategoryDescription={tagCategoryDescription}
                                legendColor={legendColor}
                            />
                        </Cell>
                        <Cell>Lorem ipsum dolor sit amet consecteur dit lot.</Cell>
                    </Row>
                </Body>
            </Table>
            <h2>Full width</h2>
            <p>
                <InlineTagIconLink
                    onClickHandler={onClickHandler}
                    tagNo={tagNo}
                    description={description}
                    tagCategoryDescription={tagCategoryDescription}
                    legendColor={legendColor}
                />
            </p>
        </>
    );
};

export default InlineTagIconLinkWrapper;
