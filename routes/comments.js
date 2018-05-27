let store = require('../postsData');

module.exports = {
  getComments(req, res) {
  	let id = req.params.postId;

    res.status(200).send(store.posts[id].comments);
  },

  addComment(req, res) {
    let newComment = req.body;
    let id = store.posts.length;
    let commentId = store.posts[id].comments.length;

    store.posts[id].comments.push(newComment);
  	res.status(201).send({id: commentId});
  },

  updateComment(req, res) {
    let id = req.params.postId;
  	let editedComment = req.body;
    let commentId = req.params.commentId;

    store.posts[id].comments[commentId] = editedComment;
  	res.status(200).send(store.posts[id].comments[commentId]);
  },

  removeComment(req, res) {
    let id = req.params.postId;
    let commentId = req.params.commentId;

    store.posts[id].comments.splice(commentId, 1);
  	res.status(204).send();
  }
};
