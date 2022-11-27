import React, { useState, useLayoutEffect } from 'react';
import { MEditor } from '@mint-editor/core';
import './index.scss';

export const MintEditor: React.FC = () => {
  const [editor, setEditor] = useState<MEditor>();

  useLayoutEffect(() => {
    const owo = new MEditor({
      container: document.querySelector('.mint-editor-edit-box-container')!,
    });
    setEditor(owo);
  }, []);

  console.log(editor);

  return (
    <div className="mint-editor-edit-box-container">
      这是编辑器
    </div>
  );
};
