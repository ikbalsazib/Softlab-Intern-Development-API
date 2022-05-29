const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('User', userSchema);
