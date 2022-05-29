const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


/**
 *  Router File Import
 */
const userRoutes = require('./routes/user')

const port = 3000;

/**
 * MAIN BASE ROUTER WITH IMPORTED ROUTES
 */
app.use('/api/user', userRoutes);

/**
 * NODEJS SERVER
 * PORT CONTROL
 * MongoDB Connection
 * IF PASSWORD contains @ then encode with https://meyerweb.com/eric/tools/dencoder/
 * Database Name roc-ecommerce
 * User Access authSource roc-ecommerce
 */
mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=${process.env.AUTH_SOURCE}`,
    // `mongodb://localhost:27017/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true,
        //  useFindAndModify: false,
        useUnifiedTopology: true,
        //  useCreateIndex: true
    }
)
    .then(() => {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server is running at port:${port}`));
        console.log('Connected to mongoDB');

    })
    .catch(err => {
        console.error('Oops! Could not connect to mongoDB Cluster0', err);
    })


// app.listen(port, () => console.log(`Server is running at port:${port}`));

