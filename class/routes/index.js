let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {
    // res.send('hello world');

    let imgURL = ["https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg",
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_2276,w_4043,x_0,y_23/f_auto,q_auto,w_1100/v1553128862/shape/mentalfloss/536413-istock-459987119.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg"]

    res.render('index', {
        title: "Working with EJS",
        pageID: "Home Page",
        images: imgURL[0]
    });
});

router.get('/puppies', (req, res) => {
    // res.send('hello world');

    let users = {
        fname : "Chris",
        lname : "Humphrey"
    }

    let id = req.params.id;
    let imgURL = ["https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg",
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_2276,w_4043,x_0,y_23/f_auto,q_auto,w_1100/v1553128862/shape/mentalfloss/536413-istock-459987119.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg"]

    res.render('allPuppies', {
        title: "Working with EJS",
        pageID: "Home Page",
        images: imgURL,
        user: users
    });
});

module.exports = router;