import mongoose from "mongoose";

// export a function that connect to db
const db = ()=>{
    // connect mongoose and mongodb atlas
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
            console.log("Connected to mongoDB");
        })
        .catch((error)=>{
            console.log("Error to connect mongoDB");
        })
}

export default db;
