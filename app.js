var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


/* var client = require('twilio')(accountSid, authToken);
 
client.messages.create({
    body: "Testing Heroku",
    to: "+16303120721",
    from: "+12243658561";
}, function(err, message) {
    process.stdout.write(message.sid);
});
*/
var 