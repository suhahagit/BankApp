import React, { Component } from 'react'

class Transaction extends Component {

    deleteTransaction = (id) => {
        this.props.deleteTransaction(id)
    }

    render() {
        const { transaction } = this.props
        const { amount, vendor, category } = transaction
        return (
            <div className='transaction-data'>
                <div className = {amount < 0 ? 'red' : 'green'}>amount: {amount} vendor: {vendor} category: {category}
                    <button className='delete-transaction' onClick={() => this.deleteTransaction(transaction._id)}>-</button>
                </div>
            </div>
        );
    }
}

export default Transaction