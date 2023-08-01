 import mongoose from "mongoose"

 const connect = async () => {
    try {
        console.log("url", process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI);
      } catch (error) {
        console.log(error);
        throw new Error("Connection failed")
      }
 }

 export default connect;