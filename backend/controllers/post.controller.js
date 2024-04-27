const postModel = require('../models/post.model');
const { post } = require('../routes/post.routes');

module.exports.setPosts = async (req, res) => {
    //res.json({ message: "ca fonctionne !"});
    if (!req.body.message) {
        res.status(400).json({message : "merci d'ajouter un message"});
    }

    const post = await postModel.create({
        message: req.body.message,
        author: req.body.author,
        titre: req.body.titre,
        description: req.body.description
    })
    res.status(200).json(post);
};
module.exports.getPosts = async (req, res) => {
    const posts = await postModel.find();
    res.status(200).json(posts);
  };

