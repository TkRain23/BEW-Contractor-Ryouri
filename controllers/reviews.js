//reviews.js

module.exports = function(app, Review) {

    app.get('/', (req, res) => {
        Review.find()
            .then(reviews => {
                res.render('reviews-index', {
                    reviews: reviews
                });
            })
            .catch(err => {
                console.log(err);
            });
    });

    // DELETE
    app.delete('/reviews/:id', function(req, res) {
        console.log("DELETE review")
        Review.findByIdAndRemove(req.params.id).then((review) => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        })
    })
}
