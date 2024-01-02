const express = require('express');
const {createMui, getAllMui} = require('../Controllers/MuiController');


const router = express.Router()

router.post('/create', createMui)
router.get('/getAll', getAllMui)

module.exports = router

