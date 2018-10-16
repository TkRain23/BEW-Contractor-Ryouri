// comments.js
const Comment = require('../models/comment')
module.exports = function(app) {

  // NEW Comment
  app.post('/reviews/comments', (req, res) => {
  Comment.create(req.body).then(comment => {
    res.redirect(`/reviews/${comment.reviewId}`)
  }).catch((err) => {
    console.log(err.message)
  })
})

}
