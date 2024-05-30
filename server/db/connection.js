import mongoose from "mongoose"

const connectiondb = (con) => {
    return mongoose.connect(con).then(()  =>{
        console.log("Connected to database")
    }).catch((err) =>{
        console.log("database connection Error: " + err.message)
    })
}

export default connectiondb