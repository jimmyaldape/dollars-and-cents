import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="mx-8">
           <h4 className="text-sm uppercase">Your Balance</h4> 
           <h1 className="text-3xl">${total}</h1>
        </div>
    )
}
