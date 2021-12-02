import React from 'react';
import './Editor.css';

export default function Editor() {
  return (
    <>
      <div className="form-control">
        <label>Top</label>
        <select>
          <option value="top-1">One</option>
          <option value="top-2">Two</option>
          <option value="top-3">Three</option>
        </select>
      </div>
      <div className="form-control">
        <label>Middle</label>
        <select>
          <option value="middle-1">One</option>
          <option value="middle-2">Two</option>
          <option value="middle-3">Three</option>
        </select>
      </div>
      <div className="form-control">
        <label>Bottom</label>
        <select>
          <option value="bottom-1">One</option>
          <option value="bottom-2">Two</option>
          <option value="bottom-3">Three</option>
        </select>
      </div>
      <div className="form-control">
        <label>Add a Catchphrase!</label>
        <input type="text" />
        <button>Add</button>
      </div>
    </>
  );
}
