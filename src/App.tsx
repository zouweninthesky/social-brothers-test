import React from 'react';

import GetService from './api/GetService';

function App() {

  const test = GetService.getPosts(1, 10);
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
