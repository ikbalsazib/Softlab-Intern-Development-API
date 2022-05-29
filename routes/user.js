const express = require('express');
const controller = require('../controller/user')

const router = express.Router();

router.get('/get-all-users', controller.getAllUsers);
router.post('/add-user', controller.addUser);
router.get('/single-user/:id', controller.getSingleUser);


// Export All router..
module.exports = router;
