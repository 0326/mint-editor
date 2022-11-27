import React from 'react';
import { ToolbarItem } from './type';
import { PREFIX } from '../_base';
import './index.scss';

export interface ToolbarProps {
  toolbars: ToolbarItem[];
  onClick: (item: ToolbarItem) => void;
}

export const Toolbar = (props: ToolbarProps) => {
  const { toolbars, onClick } = props;

  return (
    <div className={`${PREFIX}-toolbar-container`}>
      {toolbars.map((item, index) => {
        const { name, active, disabled, className } = item;
        const statusClass = `${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`;
        return (
          <span
            key={name}
            onMouseDown={(e) => {
              e.preventDefault(); // 阻止点击失焦默认行为，避免 execCommand 失败
            }}
            onClick={() => {
              onClick(item);
            }}
            className={`${PREFIX}-toolbar-icon ${className} ${statusClass}`}
          />
        );
      })}
    </div>
  );
}

export * from './type';
export * from './constant';
