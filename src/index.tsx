import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import '../../styles/base.scss';
// Amplify(awsExports);//


createRoot(document.getElementById('app')!).render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
