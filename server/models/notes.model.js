var mongoose = require('mongoose');

var notesSchema = mongoose.Schema({
    userId: String,
    username: String,
    notesArray: [{
            dateCreated: Date,
            dateUpdated: Date,
            title: String,
            note: String
    }]
})

var notesModel = mongoose.model('note', notesSchema, 'notesCollection');

module.exports = notesModel;