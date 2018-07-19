var User = require('../models/user');
var jwt = require('jsonwebtoken');
var secret = 'somesecret';

module.exports = function (router) {

    //USER REGISTRATION 
    router.post('/users', function (req, res) {

    });

    //USER AUTHENTICATE 
    //http://localhost:port/api/authenticate
    router.post('/authenticate', function (req, res) {
        
    });


    //USER DISPLAY
    router.use(function (req, res, next) {
        
    });

    router.post('/me', function (req, res) {
        res.send(req.decoded);
    });

    return router;
};