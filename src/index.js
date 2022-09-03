import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//create roots
const root = ReactDOM.createRoot(document.getElementById('root'));

//render root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)