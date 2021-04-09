import React, { CSSProperties, useState } from 'react';
import { ListRow } from '../../../../src/components/listRow/ListRow';

export interface ListRowWrapperProps {
    style: CSSProperties;
    isDraggable: boolean;
    title: string;
    subTitle: string;
    icons: string[];
    expandedIcons: string[];
    expandable: boolean;
}

const ListRowWrapper: React.FC<ListRowWrapperProps> = ({
    isDraggable,
    title,
    subTitle,
    icons,
    expandedIcons,
    expandable,
    style
}: ListRowWrapperProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={'ListRow'}>
            <ListRow
                isDraggable={isDraggable}
                item={{
                    title,
                    subTitle,
                    icons: icons.map((i) => {
                        return {
                            icon: i,
                            onClick: () => {
                                console.log('clicked');
                            }
                        };
                    })
                }}
                expandable={
                    expandable
                        ? {
                              iconItems: expandedIcons.map((i) => {
                                  return {
                                      icon: i,
                                      onClick: () => {
                                          console.log('clicked');
                                      }
                                  };
                              }),
                              expanded: open,
                              setExpanded: (status: boolean) => {
                                  setOpen(status);
                              }
                          }
                        : undefined
                }
                rowIndex={0}
                style={style}
            ></ListRow>
        </div>
    );
};

export default ListRowWrapper;
