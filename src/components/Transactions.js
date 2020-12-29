import React from 'react'
import Transaction from './Transaction'

const Transactions = ({ transactions, deleteTransaction }) => {
    return (
        <div className='transactions'>
            {transactions.map(t => <Transaction transaction={t} key={t._id} deleteTransaction={deleteTransaction} />)}
        </div>
    );
}

export default Transactions