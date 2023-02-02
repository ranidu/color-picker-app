import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Picker from './components/picker'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Picker colorPickerOptions={['blue','green','orange','red','pink']} initialSelectedColor={'red'}/>
  </React.StrictMode>
);
