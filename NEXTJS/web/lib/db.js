import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URl

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("already connected")
        return
    }
    if (connectionState === 2) {
        console.log("Connecting ...")
        return
    }

    try {
        mongoose.connect(MONGODB_URL, {
            dbName: "Portfolio",
            bufferCommands: true,
        })
        console.log("Connected")
    }
    catch (err) {
        console.log("Error : ", err)
        throw new Error("Error: ", err)
    }
}

export default connect