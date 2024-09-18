import React from 'react';
import { Amplify } from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react/dist/types/components/Authenticator/withAuthenticator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
