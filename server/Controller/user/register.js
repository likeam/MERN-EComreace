import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {UserTable} from "../../Models/userTable.js"



const register = async (req, res) => {

    try {
        const {first_name, last_name, dob, mobile, password} = req.body;
       // const salt = await bcrypt.genSalt(10)
       // const bcrypt_password = await bcrypt.hash(password, salt)
        

    } catch (error) {
        res.send({status: "Faild", error: error})
        consle.log("user register error :" , error)
    }
}

export default register