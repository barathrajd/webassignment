const express = require('express');
const user = require('../modals/UserSchema');
const router = express.Router();

// GET - READ

router.get('/', async (req, res) => {
  try {
    const post = await user.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
  res.send('I am In the User page');
});

// POST - CREATE

router.post('/', async (req, res) => {
  const post = new user({
    name: req.body.name,
    detail: req.body.detail,
  });

  try {
    const savedUser = await post.save();
    res.json(savedUser);
  } catch (err) {
    console.error();
  }
});

// SPECIFIC POST

router.get('/:postId', async (req, res) => {
  try {
    const post = await user.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE POST

router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await user.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE

router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await user.updateOne(
      { _id: req.params.postId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
