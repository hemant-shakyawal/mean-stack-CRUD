const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/curdDB',(err)=> {
    if (!err)
    console.log("MongoDB connection successfully...");
    else
    console.log('Error in DB connection:' + JSON.stringify(err,undefined,2));

});// for error 
module.exports =mongoose; //for export mongo DB
