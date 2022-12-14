import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from './components/App.jsx';
import './styles/global.scss';

// ReactDOM.render(<App />, document.getElementById('app'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);