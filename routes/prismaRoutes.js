const express = require('express');
const { createCommand, getRecord, updateRecord, removeRecord, removeAllRecord } = require('../controller/prismaController');
const router = express.Router();

// Create a record
router.post('/create',createCommand);

//Get All record
router.get('/get', getRecord);

// Get record by ID
router.get('/get?id', getRecord);

// Update a perticular record (PUT)
router.put('/update/:id', updateRecord);

// // Delete a perticular record
router.delete('/remove/:id', removeRecord );

// Bulk delete
router.delete('/removeall', removeAllRecord );

module.exports = router;