import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={`bg-white rounded-md shadow mb-1 text-xs px-4 py-4 leading-tight flex justify-between border-r-8 ${transaction.amount < 0 ? "border-red-500" : "border-green-500"}`}>
            {transaction.text} <span className="">{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )
}
