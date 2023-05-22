const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    body: {
        type: 'string',
        required: true
    },
    author: {
        type: 'string',
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Post",postSchema);