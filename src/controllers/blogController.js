// // const Joi           = require("joi")
// const blogRepo      = require("./../dbRepository/queryhelper/blogRepo");
// const channelRepo      = require("./../dbRepository/queryhelper/userchannelrepo");


// // // -------------------------------------------------------------------

//    const blogController = {

//   async getuser(req, res) {
//     const data = await channelRepo.getuserdata(req.body);
//       console.log(data,'45')
//       if (data.action=='update') {
//         res.status(200).json({message: "created Successfully", data: data.data, success: true });
//       } else if (data.action=='emailexist') {
//         res.status(400).json({ message: "this Email is already used", success: true });
      
//       } else {
//         res.status(404).json({ message: "No Data Found", success: false });
//       }
//   },


// };

//  module.exports = blogController;
