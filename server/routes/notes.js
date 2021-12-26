var express = require('express');
var router = express.Router();
var controller = require('../controller/notes.ctrl');
var authVerify = require('../middleware/verifyToken.mw');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', controller.createNote);
router.put('/add', controller.addNote);
router.get('/get', controller.getNote);
router.put('/delete', controller.deleteNote);    
router.put('/update', controller.updateNote);
// router.put('/updateTitle', controller.updateTitle);  






module.exports = router;