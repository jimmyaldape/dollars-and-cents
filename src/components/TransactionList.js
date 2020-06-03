import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);


    return (
        <div className="mt-6">
            <h4 className="text-sm uppercase border-b border-gray-500 mb-4 pb-1">History</h4>
                <ul>
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
    
                </ul>
        </div>
    )
}
