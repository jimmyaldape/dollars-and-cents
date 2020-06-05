import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        };

        addTransaction(newTransaction);
    }

    return (
        <div className="mx-8 mt-6">
            <h4 className="text-sm border-b border-gray-500 mb-4 pb-1">Add new transaction</h4>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Transaction Name
                    </label>
                    <input className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a descriptive label ..." />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold">
                        Amount
                    </label>
                    <p className="text-xs text-gray-600 mb-2">(negative = expense, positive = income)</p>
                    <input className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount ..." />

                </div>

                <div className="mb-4 flex justify-center">
                    <button className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
