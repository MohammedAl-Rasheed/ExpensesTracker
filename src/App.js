import React from 'react';
import { Header } from './compenents/Header';
import { Balance } from './compenents/Balance';
import { IncomeExpenses } from './compenents/IncomeExpenses';
import { TransactionList } from './compenents/TransactionList';
import { AddTransaction } from './compenents/AddAction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;