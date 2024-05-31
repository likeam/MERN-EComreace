import express from "express";
import { userRouter } from "./routes/userRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
import connectiondb from "./db/connection.js";
import { UserTable } from "./Models/userTable.js";

const database = "mongodb+srv://likeam99:ql2EEQpLuWYLnICu@a1.ig1ckn5.mongodb.net/?retryWrites=true&w=majority&appName=a1";


const app = express();
const PORT= 8000

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
connectiondb(database)
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port:  ${PORT}`);
});