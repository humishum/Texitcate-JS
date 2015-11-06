var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var prompt  = require('prompt');
var uname;


/* var client = require('twilio')(accountSid, authToken);
 
client.messages.create({
    body: "Testing Heroku",
    to: "+16303120721",
    from: "+12243658561";
}, function(err, message) {
    process.stdout.write(message.sid);
});
*/
//This is where the magic happens
app.get('/scrape',function(req,res){
    //profile we're scraping
    url = uname;
    
    request(url, function(error,response, html){
        // error check
        if(!error){
            var $ = cheerio.load(html);    
            //define vars to scrape
        var name, Cstreak;
        var json = { name : "", Cstreak : ""}   
// span class for fullname
$('.vcard-fullname').filter(function(){
    //store filtered data into a var
    var data = $(this);
            
    name = data.text();
            
    json.name = name;
            
})
// span class for contr.number                

$( document ).ready('.contrib-number').filter(function(){
                    
    var data = $(this);
    //fix this to get actual first one.                
    
    Cstreak = data.first().text();
    
    json.Cstreak = Cstreak;
                })

        }
        
fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
            console.log('Success!');
        })
        res.send('Check the console m8')
        console.log('Name:'+name);
        console.log('Contribution Streak:' + Cstreak);
    }) ;  
})