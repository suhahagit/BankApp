import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import CategorySum from './components/CategorySum'

const axios = require('axios');

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: 0
    }
  }

  async getTransactions() {
    return axios.get("http://localhost:4200/transactions")
  }

  async componentDidMount() {
    const transactions = await this.getTransactions()
    this.setState({ transactions: transactions.data }, () => { this.getBalance() })
  }

  getBalance = () => {
    let balance = 0
    this.state.transactions.forEach(d => balance += d.amount)
    this.setState({ balance })
  }

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:4200/transaction/${id}`)
    const transactions = await this.getTransactions()
    this.setState({ transactions: transactions.data }, () => { this.getBalance() })
  }

  addTransaction = async (amount, vendor, category) => {
    await axios.post("http://localhost:4200/transaction", { amount, vendor, category })
    const transactions = await this.getTransactions()
    await this.setState({ transactions: transactions.data }, () => { this.getBalance() })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <div className='menu'>
            <Link to="/"> Transactions </Link>
            <Link to="/operations"> Operations </Link>
            <Link to="/categorySum"> Breakdown </Link>
            <div>Balance: {this.state.balance}</div>
          </div>
          <div className='routes'>
            <Route path='/' exact render={() => <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />} />
            <Route path='/operations' exact render={() => <Operations addTransaction={this.addTransaction} />} />
            <Route path='/categorySum' exact render={() => <CategorySum transactions={this.state.transactions}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App