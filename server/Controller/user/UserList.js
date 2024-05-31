import { UserTable } from "../../Models/userTable.js";


const UserList = async (req, res) => {

    try {
        const users = await UserTable.find().sort({createdAt: -1})        
        console.log("users datqa :", users)
        res.send({status: "sucessfully" , data:users})
    } catch (err) {
        res.send({status: "failed", errors:err.errors})
    }

}

export default UserList