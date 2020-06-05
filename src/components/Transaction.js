import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className="relative group flex items-center">
            <button onClick={() => deleteTransaction(transaction.id)} className="ml-auto  h-8 w-8 invisible group-hover:visible bg-red-500 rounded text-sm text-white shadow">X</button>
            <div className={`flex-grow mr-auto bg-white rounded-md shadow mb-1 text-xs px-4 py-4 leading-tight flex justify-between border-r-8 ${transaction.amount < 0 ? "border-red-500" : "border-green-500"}`}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            </div>
        </li>
    )
}
