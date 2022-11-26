import React from 'react';
import { useState } from 'react';
import { ToolbarItem } from './type';
import { defaultToolbars } from './constant';
import './index.css';

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
    <div className="mint-editor-toolbar-container">
      {toolbars.map((item, index) => {
        const { name, active, disabled, className } = item;
        const statusClass = `${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`;
        return (
          <span
            key={name}
            onClick={() => {
              onClick(index);
            }}
            className={`mint-editor-toolbar-icon ${className} ${statusClass}`}
          />
        );
      })}
    </div>
  );
}
