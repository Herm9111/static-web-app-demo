import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = setState();
  useEffect(() => {
    fetch('/getSomeData')
    .then(res => res.json())
    .then(json => setData(json));
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`This data was fetched from an API: ${data}`}
        </p>
      </header>
    </div>
  );
}

export default App;
function setState(): [any, any] {
  throw new Error('Function not implemented.');
}

