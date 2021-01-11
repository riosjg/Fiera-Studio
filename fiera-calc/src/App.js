import React from 'react';
import { CalcProvider } from './context/CalcContext.js';

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
