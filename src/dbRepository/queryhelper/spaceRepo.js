// const db = require("./../../models/index");
// const path = require("path"); // Import path module to use path.extname

// const Channel = db.channel;
// const space = db.space;

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
// });

// const spaceRepo = {
//   async createspacedata(req,space_profile_Pic, res) {
//     console.log(space_profile_Pic, 'ff');
//     try {
    
//   const newSpace = await space.create({
//           space_name: req.space_name,
//           space_profile_Pic:space_profile_Pic,
//           space_type:req.space_type,
//         });

//         console.log(newSpace);

//         return {
//           action: "update",
//           data: newSpace,
//         };
    
//     } catch (error) {
//       return error;
//     }
//   },
// };

// module.exports = spaceRepo;
