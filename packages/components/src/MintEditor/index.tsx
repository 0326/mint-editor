import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { CommandEnum, Editor } from '@mint-editor/core';
import { Toolbar, ToolbarItem, defaultToolbars } from '../Toolbar';
import './index.scss';

export interface MintEditorProps {
  onInit?: (editor: Editor) => void;
  placeholder?: string;
  toolbars?: ToolbarItem[];
}

const elToCommandMap: { [key: string]: CommandEnum } = {
  'B': CommandEnum.BOLD,
  'I': CommandEnum.ITALIC,
  'U': CommandEnum.UNDERLINE,
  'S': CommandEnum.STRIKETHROUGH,
  'OL': CommandEnum.OLIST,
  'UL': CommandEnum.ULIST,
};

export const MintEditor: React.FC<MintEditorProps> = (props: MintEditorProps) => {
  const { placeholder, onInit } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<Editor>();
  const [toolbars, setToolbars] = useState<ToolbarItem[]>(props.toolbars || defaultToolbars);

  const onRangeChange = useCallback((range: Range) => {
    console.log(range.startContainer);
    const newToolbars = [...toolbars];
    const activeToolMap: { [key: string]: boolean } = {};
    let currNode: Node | null = range.startContainer;
    while (currNode && currNode.parentElement !== containerRef.current) {
      const elName = currNode.parentElement?.nodeName.toUpperCase();
      if (elName && elToCommandMap[elName]) {
        activeToolMap[elToCommandMap[elName]] = true;
      }
      currNode = currNode.parentElement;
    }

    newToolbars.forEach((item) => {
      item.active = true === activeToolMap[item.cmd];
    });
    console.log('newToolbars', newToolbars, activeToolMap);
    setToolbars(newToolbars);
  }, [toolbars]);

  const onToolbarClick = (item: ToolbarItem) => {
    editor?.execCommand(item.cmd);
  }

  useLayoutEffect(() => {
    if (editor) {
      return;
    }

    const owo = new Editor({
      container: containerRef.current!,
      onRangeChange,
    });
    setEditor(owo);
    onInit?.(owo);
  }, [editor, onInit, onRangeChange]);

  return (
    <div>
      <Toolbar toolbars={toolbars} onClick={onToolbarClick} />
      <div className="mint-editor-edit-box-container" ref={containerRef}>
        {placeholder}
      </div>
    </div>
  );
};
