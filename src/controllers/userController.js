import db from '../models'
import userService from '../services/userService'

let handlerLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameters'
        })
    }

    let userData = await userService.handlerUserLogin(email, password);
    //check email exist
    //compare password
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    });
}

let handlerGetAllUsers = async (req, res) => {
    let id = req.query.id;//all, single

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter',
            users: []
        })
    }
    let users = await userService.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}

module.exports = {
    handlerLogin: handlerLogin,
    handlerGetAllUsers: handlerGetAllUsers
}