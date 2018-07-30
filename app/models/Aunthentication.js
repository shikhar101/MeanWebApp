var mogoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var AuthenticationSchema = new  Schema({
    Email: {
        type: string,
        required: true,
        unique: true
    },
    id: {
        type : Number,
        Required: true
    },
    username: {
        type: String,
        Required: true,
        unique: true
    },

    hash: String,
    salt: String
});

AuthenticationSchema.method.setPassword = function(password){
    this.salt=crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf1Syc(password, this.salt, 1000,64, 'sha256').toString('hex');
} ;

AuthenticationSchema.method.validPassword = function(password){
    var hash = crypto.pbkdf1Syn(password, this.salt,1000,64, 'sha256').tostring('hex');
    return this.hash===hash;
};

AuthenticationSchama.method.generateJwt = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 9);

    return this.generateJwt.sign({
        id: this.id,
        email: this.email,
        name: this.name,
        username: this.username,
        exp: parseInt(expiry.getTime()/1000)
    });
};

    mongoose.model('Authentication',AuthenticationSchema);
