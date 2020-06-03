import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter( item => item > 0)
                            .reduce((acc, item) => (acc += item), 0)
                            .toFixed(2);
    const expense = (amounts.filter( item => item < 0)
                            .reduce((acc, item) => (acc += item), 0) * -1)
                            .toFixed(2);

    return (
        <div className="flex flex-row border border-gray-500 border-black mt-4 bg-white rounded-lg shadow text-center">
            <div className="w-1/2 p-4 border-r border-gray-300">
                <h4 className="text-xs uppercase">Income</h4>
                <p className="text-lg text-green-400">${income}</p>
            </div>
            <div className="w-1/2 p-4">
                <h4 className="text-xs uppercase">Expense</h4>
                <p className="text-lg text-red-400">${expense}</p>
            </div>
        </div>
    )
}
