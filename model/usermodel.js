var mongoose = require('mongoose');

var studentschema = new mongoose.Schema({
    name:{
        type:String
    },
    status:{
        type:String
    }
})

module.exports = mongoose.model("todo",studentschema);