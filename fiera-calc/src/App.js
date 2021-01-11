import React from 'react';
import { CalcProvider } from './context/CalcContext.js';
import Display from './components/Display';
import Button from './components/Button';

function App() {
  return (
    <div>
      <CalcProvider>
        <Display />
        <Button />
      </CalcProvider>
    </div>
  );
}

export default App;
