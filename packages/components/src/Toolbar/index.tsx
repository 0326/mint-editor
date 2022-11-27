import React from 'react';
import { useState } from 'react';
import { ToolbarItem } from './type';
import { PREFIX } from '../_base';
import { defaultToolbars } from './constant';
import './index.scss';

export interface ToolbarProps {
  toolbars?: ToolbarItem[];
  onClick?: (item: ToolbarItem) => void;
}


export const Toolbar = (props: ToolbarProps) => {
  const [toolbars, setToolbars] = useState<ToolbarItem[]>(props.toolbars || defaultToolbars);

  const onClick = (index: number) => {
    const newbars = [...toolbars];
    newbars[index].active = !newbars[index].active;
    setToolbars(newbars);
    props.onClick?.(newbars[index]);
  };

  console.log('toolbars', toolbars);

  return (
    <div className={`${PREFIX}-toolbar-container`}>
      {toolbars.map((item, index) => {
        const { name, active, disabled, className } = item;
        const statusClass = `${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`;
        return (
          <span
            key={name}
            onClick={() => {
              onClick(index);
            }}
            className={`${PREFIX}-toolbar-icon ${className} ${statusClass}`}
          />
        );
      })}
    </div>
  );
}
