import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const {Schema} = mongoose;

const postSchema = new Schema({
        title:{
            type:String,
            required: true,
        },
        desc:{
            type:String,
            required: true,
        },
        img:{
            type:String,
            required: true,
        },
        domain:{
            type:String,
            required: true,
        },
        content:{
            type:String,
            required: true,
        },
        owner:{
            type:String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

let model;
if (!global.postModel ) {
   model = mongoose.model("Post", postSchema,"Did");
   global.postModel = model;
} else {
    model = global.postModel;
}


export default model;
