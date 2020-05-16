const express = require('express')
const app = express()

app.set('view engine', 'ejs');

var contactList = [
    {
        name: "SSS",
        phone: "1212121"
    },
    {
        name: "AAA",
        phone: "9999"  
    },
    {
        name: "BBB",
        phone: "8888" 
    }
]

app.get('/', function(req,res){
    return res.render('home',{
        title: "Contacts List",
        contact_list: contactList
    });
});

app.get('/practice', function(req,res){
    return res.render('practice',{welcomeMessage: "Welcome to my app."});
})

app.post('/create-contact', function(req,res){
    return res.redirect('/practice');
});


app.listen(port=3000, function(err){
    if (err) { console.log('Error in running server', err); }
    console.log('Node listening on port: ',port);
});

