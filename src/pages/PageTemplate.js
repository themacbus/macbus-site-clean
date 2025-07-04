import React from 'react';

export default function PageTemplate({ title, children }) {
  return (
    <div className="page-template">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}
