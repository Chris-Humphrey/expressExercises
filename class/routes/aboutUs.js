let express = require('express');
let router = express.Router();

router.get('/aboutus', (req, res)=>{
    res.send('about us')
});

module.exports = router;