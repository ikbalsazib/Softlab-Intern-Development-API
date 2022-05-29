const User = require('../model/user');


exports.addUser = async (req, res) => {
    try{
        const data = req.body;
        const user = new User(data);
        const result = await user.save();

        res.status(200).json({
            success: true,
            data: result,
            message: 'Success'
        })
    } catch (err) {
        console.log(err)
    }
}


exports.getAllUsers = async (req, res) => {

    try {

        const data = await User.find({});
        // Result
        const result = {
            success: true,
            message: 'Success',
            data: data
        }

        res.status(200)
            .json(result)
    } catch (e) {

    }

}

exports.getSingleUser = async (req, res) => {

    const id = req.params.id;
    const data = await User.findOne({_id: id});
    // Result
    const result = {
        success: true,
        message: 'Success',
        data: data
    }

    res.status(200)
        .json(result)
}
