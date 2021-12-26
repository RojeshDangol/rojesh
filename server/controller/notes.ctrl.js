var mongoose = require("mongoose");
var notesModel = require("../models/notes.model");
var auth = require("../config/auth.config");
var jwt = require("jsonwebtoken");
require("dotenv").config();


function createNote(req, res, next) {
  var input = req.body;
  var authorization = req.headers.authorization;
  var token = authorization.split(" ")[1];
  var decodeJWT = jwt.verify(token, process.env.SECRET);
  var id = decodeJWT.subject;

  var note = {
    // dateCreated: date,
    title: input.title,
    note: input.note,
  };

  //decodeJWT will give Subject { id };
  notesModel.exists({ userId: id }, (err, result) => {
    if (err) {
      return res.status(490).send("Not Authorized");
      done();
    } else if (!result) {
    //   var dateObj = new Date();
    //   var date = ("0" + dateObj.getDate()).slice(-2);
      var newNote = new notesModel({
        userId: id,
        username: input.username,
        notesArray: [
          {
            // dateCreated: date,
            title: input.title,
            note: input.note
          },
        ],
      });

      newNote.save((err, newNote) => {
        if (err) {
          console.log(err);
        } else {
          return;
        }
      });
    }else{
        // res.status(200).send("Already have a note");
        notesModel.findOneAndUpdate(
          {
            userId: id,
          },
          {
            $push: {
              notesArray: note,
            },
          },
          function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log(success);
            }
          }
        );
        res.status(200);
    }
  });
}

function addNote(req, res, next) {
  var input = req.body;
  var authorization = req.headers.authorization;
  var token = authorization.split(" ")[1];
  var decodeJWT = jwt.verify(token, process.env.SECRET);
  var id = decodeJWT.subject;

//   var dateObj = new Date();
//   var date = ("0" + dateObj.getDate()).slice(-2);

  var note = {
    // dateCreated: date,
    title: input.title,
    note: input.note,
  };

  notesModel.findOneAndUpdate(
    {
      userId: id,
    },
    {
      $push: {
        notesArray: note,
      },
    },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    }
  );
  res.status(200);
}

function getNote(req, res, next) {
  var input = req.body;
  var authorization = req.headers.authorization;
  var token = authorization.split(" ")[1];
  var decodeJWT = jwt.verify(token, process.env.SECRET);
  var id = decodeJWT.subject;

  console.log(id);
  //decodeJWT will give Subject { id };
  notesModel.findOne({ userId: id }, (err, result) => {
    if (err) {
      return res.status(490).send("Not Authorized");
      done();
    } else if (!result) {
      return res.status(404).send("You dont have any notes saved");
    }
    else res.status(200).send(result.notesArray);
  });
}

function deleteNote(req, res, next) {
  var input = req.body;
  var authorization = req.headers.authorization;
  var token = authorization.split(" ")[1];
  var decodeJWT = jwt.verify(token, process.env.SECRET);
  var id = decodeJWT.subject;

  notesModel.updateOne(
    { userId: id },
    { $pull: { notesArray: { _id: input._id } } },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.status(200).send("successfully deleted note");
      }
    }
  );
}

function updateNote(req, res, next) {
  var input = req.body;
  var authorization = req.headers.authorization;
  var token = authorization.split(" ")[1];
  var decodeJWT = jwt.verify(token, process.env.SECRET);
  var id = decodeJWT.subject;
  // decodeJWT will give Subject { id };

  // var dateObj = new Date();
  // var date = ("0" + dateObj.getDate()).slice(-2);

  var note = {
    _id : input.id,
    title: input.title,
    note: input.note,
  };

      notesModel.updateOne(
          { "notesArray._id": input._id },
          
        //   {$currentDate: { "notesArray.dateUpdated" : {$type : "timestamp"}}}, 
          { $set:  {"notesArray.$.title" : note.title,
                    "notesArray.$.note" : note.note},
                    // {"notesArray.$.title": input.title}
           },
          
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data)
            res.status(200);
          }
        }
      );
}

// function updateNote(req, res, next) {
//   var input = req.body;
//   var authorization = req.headers.authorization;
//   var token = authorization.split(" ")[1];
//   var decodeJWT = jwt.verify(token, process.env.SECRET);
//   var id = decodeJWT.subject;
  //decodeJWT will give Subject { id };

//   var dateObj = new Date();
//   var date = ("0" + dateObj.getDate()).slice(-2);

  // var note = {
    // dateUpdated: date,
//     note: input.note,
//   };

//       notesModel.updateOne(
//           { userId: id, "notesArray.title": input.title},
//         //   {$currentDate: { "notesArray.dateUpdated" : {$type : "timestamp"}}}, 
//           { $set:  {"notesArray.$.note" : input.note}},
//         function (err, data) {
//           if (err) {
//             console.log(err);
//           } else {
//               console.log(data)
//             res.status(200).send("Updated")
//           }
//         }
//       );
// }

// function updateTitle(req, res, next){
//     var input = req.body;
//   var authorization = req.headers.authorization;
//   var token = authorization.split(" ")[1];
//   var decodeJWT = jwt.verify(token, process.env.SECRET);
//   var id = decodeJWT.subject;
  //decodeJWT will give Subject { id };

      // notesModel.updateOne(
      //   { userId: id, "notesArray.title": input.title},
      //   { $set:  {"notesArray.$.title" : input.newTitle} },
      //   ,{ $set: { notesArray: {"dateUpdated" : date}} }
//       function (err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//             console.log(data)
//           res.status(200).send("Updated title")
//         }
//       }
//     );
// }



// function updateNote(req, res, next){
//     var input = req.body;
//     var authorization = req.headers.authorization;
//     var token =  authorization.split(' ')[1];
//     var decodeJWT = jwt.verify(token, process.env.SECRET);
//     var id = decodeJWT.subject;
//     //decodeJWT will give Subject { id };

//     notesModel.findOne({userId: id}, (err, result) => {
//                 if(err){
//                     return res.status(490).send('Not Authorized');
//                     done();
//                 }else if(!result){
//                     return res.status(404).send('You dont have any notes saved')
//                 }else {
//                     notesModel.aggregate([
//                         {$match:{"userId": result.userId}},
//                         {$unwind: "$notesArray"},
//                         {$match:{"notesArray.title": input.title}}],
//                         function(err,data){
//                             if(err){
//                                 console.log(err)
//                             }else{
//                                 console.log(data);
//                                 console.log()
//                             }
//                         })
//                     // console.log(result.notesArray);
//                     console.log(input.title);
//                     res.status(200).send("successfully updated");
//                     // notesModel.updateOne(result, newNote, (err)=>{
//                     //
//                     // })
//                 }

//             })
// }

module.exports = {
  createNote,
  addNote,
  getNote,
  deleteNote,
  updateNote,
  // updateTitle
};


