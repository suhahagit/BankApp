import React, { Component } from 'react';

class CategorySum extends Component {

    calculateSums = () => {
        const { transactions } = this.props
        const result = Object.values(transactions.reduce((r, o) => (r[o.category]
            ? (r[o.category].amount += o.amount)
            : (r[o.category] = { ...o }), r), {}))
        return result
    }

    render() {
        return (
            <div>
                <div>sum of transactions for each category:</div>
                {this.calculateSums()
                .map(c => <div key = {c._id}>{c.category}: {c.amount}</div>)}
            </div>
        );
    }
}

export default CategorySum;