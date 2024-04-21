/*const postModel = require('../models/post.model');
const { post } = require('../routes/post.routes');

module.exports.setPosts = async (req, res) => {
    //res.json({ message: "ca fonctionne !"});
    if (!req.body.message) {
        res.status(400).json({message : "merci d'ajouter un message"});
    }

    const post = await postModel.create({
        message: req.body.message,
        author: req.body.author
    })
    res.status(200).json(post);
};*/

const postModel = require('../models/post.model');

exports.setPosts = async (req, res) => {
    if (!req.body.message) {
        return res.status(400).json({ message: "Merci d'ajouter un message" });
    }

    try {
        const post = await postModel.create({
            message: req.body.message,
            author: req.body.author
        });
        res.status(200).json(post);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création de la publication :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la publication" });
    }
};
