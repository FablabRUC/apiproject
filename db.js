// db.js
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://testuser:test@fablabructest-onrwv.mongodb.net/test?retryWrites=true&w=majority',  
{   useNewUrlParser: true,
    useUnifiedTopology: true
});