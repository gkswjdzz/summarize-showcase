import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.core.css';

import styles from '@/styles/Editor.module.scss';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor = ({ readOnly = false }) => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      className={styles.editor}
      value={value}
      theme={''}
      onChange={setValue}
      modules={{ toolbar: null }}
      readOnly={readOnly}
    />
  );
};

export default Editor;
