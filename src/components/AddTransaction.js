import React from 'react'

export const AddTransaction = () => {
    return (
        <div className="mt-6">
            <h4 className="text-sm border-b border-gray-500 mb-4 pb-1">Add new transaction</h4>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Text
                    </label>
                    <input className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight" type="text" placeholder="Enter text ..." />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold">
                        Amount
                    </label>
                    <p className="text-xs text-gray-600 mb-2">(negative = expense, positive = income)</p>
                    <input className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight" type="text" placeholder="Enter amount ..." />

                </div>

                <div className="mb-4 flex justify-center">
                    <button className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
