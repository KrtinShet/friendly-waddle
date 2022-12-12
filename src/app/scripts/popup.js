import React from 'react';

import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Popup</h1>
    </div>
  );
};

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);
