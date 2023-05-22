const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string'
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("User",userSchema);