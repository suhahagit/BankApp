import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Operations extends Component {
    constructor() {
        super()
        this.state = { amount: '', vendor: '', category: '' }
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value.toLowerCase()
        })
    }

    addTransaction = (method) => {
        let { amount, vendor, category } = this.state
        amount = Math.abs(parseInt(amount))
        if (method === 'withdraw') {
            amount = -amount
        }
        this.props.addTransaction(amount, vendor, category)
    }

    render() {
        const { amount, vendor, category } = this.state
        return (
            <div>
                <input placeholder='amount' type="number" name="amount" value={amount} onChange={this.handleInput} />
                <input placeholder='vendor' type="text" name="vendor" value={vendor} onChange={this.handleInput} />
                <input placeholder='category' type="text" name="category" value={category} onChange={this.handleInput} />
                <Link to="/">
                <button className='deposit-btn' onClick={() => this.addTransaction('deposit')}>Deposit</button>
                <button className='withdraw-btn' onClick={() => this.addTransaction('withdraw')}>Withdraw</button>
                </Link>
            </div>
        );
    }
}

export default Operations