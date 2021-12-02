import React from 'react';
import './Main.css';
import Preview from '../preview/Preview';
import Editor from '../editor/Editor';
import Counter from '../counter/Counter';

export default function Main() {
  return (
    <main className="Main">
      <Preview />
      <Editor />
      <Counter />
    </main>
  );
}
