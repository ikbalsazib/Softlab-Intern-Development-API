const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors())

const port = 3000;

const users = [
    {_id: '1', name: 'Sazib', phoneNo: '01773253900'},
    {_id: '2', name: 'Sojol', phoneNo: '01731079193'},
    {_id: '3', name: 'Sobur', phoneNo: '01773853656'},
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

app.get('/get-user/:id', (req, res) => {
    // Data
    const id = req.params.id;
    console.log('users', users);
    const userss = [...users]
    const data = userss.find(f => f._id === id);
    console.log('data', data)

    // Result
    const result = {
        success: true,
        message: 'Success',
        data: data
    }

    res.status(200)
        .json(result)
})


app.post('/add-user', (req, res, next) => {

    const data = req.body;
    const finalData = {...data, ...{_id: (users.length + 1).toString()}}
    console.log('finalData', finalData)
    users.push(finalData);

    res.status(200).json({
        success: true,
        message: 'Success',
        data: data
    })
})

app.put('/edit-user/:id', (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    const index = users.findIndex(f => f._id === id);
    users[index] = {...data, ...{_id: id}}

    res.status(200).json({
        success: true,
        message: 'Success',
        data: data
    })
})


app.listen(port, () => console.log(`Server is running at port:${port}`));

