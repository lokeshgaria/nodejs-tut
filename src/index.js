import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 8000
connectDB().then(() => {

    app.on("error", (error) => {
        console.log('ERR', error);
        throw error
    })
    app.listen(PORT, () => console.log(`Server is running at port :${PORT}`))
}).catch((err) => {
    console.log("MONGO DB connection failed !!! ", err)
})