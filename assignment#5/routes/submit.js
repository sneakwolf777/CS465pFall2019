var express = require('express');
var router = express.Router();

// get and post the contact form info
router.get('/', function (req,res) {
    res.sendFile("/index.html");
});

router.post('/submit',function (req,res) {
    var name = req.body.name;
    var email = req.body.email;
    var comment = req.body.comment;
    console.log("name: "+ name,
        "email: " + email,
        "comment: " + comment);
    res.write(req.body.name);
    res.write(req.body.email);
    res.write(req.body.comment);
    res.end();
});

module.exports = router;
