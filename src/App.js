import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div>
      <Route path="/" element={<Greeting />} />
      </div>
    </Router>
  );
}

export default App;
