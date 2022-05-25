const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors())

const port = 3000;

const users = [
    {name: 'Sazib', phoneNo: '01773253900'},
    {name: 'Sojol', phoneNo: '01731079193'},
    {name: 'Sobur', phoneNo: '01773853656'},
];

/**
 * MAIN BASE GET PATH
 * () => {}
 */

app.get('/get-all-users', (req, res) => {
    // Data
    const allUsers = [...users];


    // Result
    const result = {
        success: true,
        message: 'Success',
        data: allUsers
    }

    res.status(200)
        .json(result)
})


app.post('/add-user', (req, res, next) => {

    const data = req.body;
    users.push(data);

    res.status(200).json({
        success: true,
        message: 'Success',
        data: data
    })
})


app.listen(port, () => console.log(`Server is running at port:${port}`));

