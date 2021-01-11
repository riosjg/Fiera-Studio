import React from 'react';
import { CalcProvider } from './context/CalcContext.js';
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

function App() {
  return (
    <div className="position-relative">
      <div className="wrapper position-absolute top-50 start-50 translate-middle">
        <CalcProvider>
          <Display />
          <Button />
        </CalcProvider>
      </div>
    </div>
  );
}

export default App;
