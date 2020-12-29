const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction.js');

router.get('/sanity', function (req, res) {
    res.sendStatus(200);
});

router.get('/transactions', async function (req, res) {
    try {
        const transactions = await Transaction.find({});
        res.send(transactions);
    } catch (error) {
        console.log(error);
        res.send(null);
    }
});

router.post('/transaction', async function (req, res) {
    try {
        const transaction = new Transaction({ ...req.body });
        await transaction.save();
        res.send(transaction);
    } catch (error) {
        console.log(error);
        res.send(null);
    }
});

router.delete('/transaction/:transactionID', async function (req, res) {
    try {
        const transaction = await Transaction.findByIdAndRemove({ _id: req.params.transactionID });
        res.send(transaction);
    } catch (error) {
        console.log(error);
        res.send(null);
    }
});



module.exports = router;
