import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ISomeData } from '../api/common/interfaces/some-data-interface';

function App() {
  const [data, setData] = useState<ISomeData>();
  const [secretData, setSecretData] = useState<ISomeData>();
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch('/api/getSomeData')
      .then(res => res.json())
      .then((json: ISomeData) => setData(json));
  }, [setData]);

  useEffect(() => {
    fetch('/.auth/me')
    .then(res => res.json())
    .then(json => setUserData(json.clientPrincipal));
  }, [])

  const callAuthenticatedAPI = () => {
    fetch('/api/secret/getSecretData')
      .then(res => res.json())
      .then((json: ISomeData) => setSecretData(json));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`This data was fetched from some API: ${data?.data} and number: ${data?.number}`}
        </p>
        {secretData &&
          <p>
            {`This is some secret data: ${secretData?.data} and number: ${secretData?.number}`}
          </p>
        }
        {
          userData && 
          <p>
            {JSON.stringify(userData)}
          </p>
        }

        <button onClick={callAuthenticatedAPI}>Call Authenticated API</button>
        <a href="/.auth/logout">Log out</a>
      </header>
    </div>
  );
}

export default App;

