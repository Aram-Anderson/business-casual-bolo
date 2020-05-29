import React from 'react';
import './App.css';
const beAnAsshole = () => {
  window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}

function App() {
  return (
    <>
      <div
        onClick={beAnAsshole}
        className="lil-clicker"
      />
      <div className="App" />
    </>
  );
}

export default App;
