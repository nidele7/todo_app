const express = require('express');
const { setPosts } = require('../controllers/post.controller');
const router= express.Router();

router.get("/", (req, res) => {
       res.json({message: "voici les données" });
    });

    /*router.post("/", (req, res) => {
        console.log(req.body);
        res.json({message: req.body.message });
     });*/
     router.post("/", setPosts);
router.put('/:id', (req, res) => {
    res.json({ messageId: req.params.id})
});

router.delete("/:id", (req, res) => {
    res.json({ message: "post supprimé id : " + req.params.id});
});

router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "post liké : id : " + req.params.id});
});
module.exports = router;
