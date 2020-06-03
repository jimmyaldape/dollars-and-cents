import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="flex flex-row border border-gray-500 border-black mt-4 bg-white rounded-lg shadow text-center">
            <div className="w-1/2 p-4 border-r border-gray-300">
                <h4 className="text-xs uppercase">Income</h4>
                <p className="text-lg text-green-400">$0.00</p>
            </div>
            <div className="w-1/2 p-4">
                <h4 className="text-xs uppercase">Expense</h4>
                <p className="text-lg text-red-400">$0.00</p>
            </div>
        </div>
    )
}
