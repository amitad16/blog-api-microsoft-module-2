let store = require('../postsData');

module.exports = {
  getPosts(req, res) {
    res.status(200).send(store.posts);
  },

  addPost(req, res) {
  	let newPost = req.body;
    let id = store.posts.length;

    store.posts.push(newPost);
  	res.status(201).send({id: id});
  },

  updatePost(req, res) {
  	let id = req.params.postId;
  	let editedPost = req.body;

    store.posts[id] = editedPost;
  	res.status(200).send(store.posts[id]);
  },

  removePost(req, res) {
  	let id = req.params.postId;

  	store.posts.splice(id, 1);
  	res.status(204).send();
  }
};
