const user = require("../model/users");


exports.userCreate = async (req, res) => {
    try {

        const { username, password } = req.body

        const userData = new user({
            username,
            password
        })
        await userData.save()
        res.status(200).json({
            Message: "success",
            Result: userData

        })


    } catch (error) {
        res.send(error)

    }
}



