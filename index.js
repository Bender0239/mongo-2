const express = require("express")
const server = express()
const mongoose = require("mongoose")
const postRouter = require("./routes/post-router")

require("dotenv").config()

server.use(express.json())

server.use("/posts", postRouter)

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("This shit 100")
})

server.listen(3000, () => {
    console.log("server running bruh!")
})