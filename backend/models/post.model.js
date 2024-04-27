/*const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('post', postSchema);*/


const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    message: String,
    author: String,
    titre: String,
    description: String,
});

module.exports = mongoose.model('Post', postSchema);