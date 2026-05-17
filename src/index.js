import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './app'; // <--- points to your main.js
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<Portfolio />);