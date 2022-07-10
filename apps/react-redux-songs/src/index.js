import ReactDOM from 'react-dom/client';
import React from 'react';
import Redux from 'react-redux';
import App from './components/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Redux.Provider> 
    <App /> 
<Redux.Provider /> );
