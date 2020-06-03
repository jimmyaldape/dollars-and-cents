import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'

function App() {
  return (
    <div className="mx-12 my-auto w-full sm:m-auto sm:w-2/3 md:m-auto md:w-1/2 lg:w-1/3">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
