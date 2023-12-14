import express from 'express';
import validate from 'express-validation';
// import blogController from '../controllers/blogController';
import userController from '../controllers/userController';
import merchantcontroller from '../controllers/merchantcontroller'
import EventController from '../controllers/EventController';
import apiAuth from '../middleware/apiAuth';
// import taskController from '../controllers/taskController';
// import task_itemController from '../controllers/task_item.Controller';
// import statusController from '../controllers/statusController';
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.png')
    }
  });
  
  var upload = multer({ dest: "assets/images" });
  
const handleFileUpload = (req, res, next) => {
    upload.any()(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed' });
      }else{
        console.log(req.files)
      }
      next(); 
    });
  };


const router = express.Router();

//= ===============================
// Public routes
//= ===============================

 router.post('/registration', userController.getuser);
router.post('/login',userController.loginuser)
router.post('/forgetpassword',userController.forgetpassuser)
router.post('/resetpassword',userController.resetpassword) 
router.post('/userprofile',apiAuth,userController.userprofile) 
router.post('/updateprofile',apiAuth,upload.any(),userController.updateprofile) 
router.post('/changepassword',userController.changepassword) 
router.post('/merchant/registration',merchantcontroller.merchntregister) 
router.post('/merchant/login',merchantcontroller.merchntloginuser) 
router.post('/merchant/forgetpassword',merchantcontroller.merchntforgetpass) 
router.post('/merchant/resetpassword',merchantcontroller.merchntresetpassword) 
router.post('/eventcreate',EventController.eventcreate) 
router.post('/eventlist',EventController.eventlist) 
router.post('/updateevent',EventController.updateevent) 
// router.post('/merchant/userprofile/:id',userController.merchntuserprofile) 


module.exports = router;
