import React from 'react';
import './App.css';
import BalanceStatus from './components/BalanceStatus/BalanceStatus';
import BalanceOperations from './components/BalanceOperations/BalanceOperations';
import ContextProvider from './Context/ContextProvider';

const App = ()=>{
  return(
    <ContextProvider>
      <div className='main-wrapper'>
        <div className='app-container'>
            <BalanceStatus/>
            <BalanceOperations/>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;