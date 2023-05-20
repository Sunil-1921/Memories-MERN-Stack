import mongoose, { mongo } from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date().getTime()
    }
});

const postmessage = mongoose.model('postmessage', postSchema);

export default postmessage;