import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ISomeData } from '../api/common/interfaces/some-data-interface';

function App() {
  const [data, setData] = useState<ISomeData>();
  useEffect(() => {
    fetch('/getSomeData')
    .then(res => res.json())
    .then((json: ISomeData) => setData(json));
  },[setData]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`This data was fetched from an API: ${data?.data} and number: ${data?.number}`}
        </p>
      </header>
    </div>
  );
}

export default App;

