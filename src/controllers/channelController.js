
// const Joi           = require("joi")
// const channelRepo   = require("../dbRepository/channelRepo");

// // -------------------------------------------------------------------

//   const channelController = {
//   async add(req, res) {
//     // console.log(req.body)
//     channelSchema = Joi.object({
//         name: Joi.string().min(3).max(30).required(),
//         desc: Joi.string().required(),
//         userId: Joi.number().required(),
//       });

//       const { error } = channelSchema.validate(req.body);

//       if (error) {
//         return res.status(400).json({ error: error.details[0].message });
//       }
//       const data = await channelRepo.add(req.body);

//    if (data) {
//     res.status(200).json({message: "Inserted Successfully", data: data, success: true });
//   } else {
//     res.status(404).json({ message: "Insert Failed", success: false });
//   }


//   },

//   async index(req, res) {
//     const allData = await channelRepo.index();

//     if (allData) {
//       res.status(200).json({ data: allData, success: true });
//     } else {
//       res.status(404).json({ message: "No Data Found", success: false });
//     }
//   },

//   async edit(req, res) {
//     const id = req.params.id;

//     const data =  await channelRepo.edit(id);
//     if (data) {
//       res.status(200).json({ data: data, success: true });
//     } else {
//       res.status(404).json({ message: "No Data Found", success: false });
//     }
//   },

//   async update(req, res) {

//        channelSchema = Joi.object({
//         id     : Joi.number().required(),
//         name   : Joi.string().min(3).max(30).required(),
//         userId : Joi.number().required(),
//         desc   : Joi.string().required(),
//         status : Joi.boolean(),
//       });

//       const { error } = channelSchema.validate(req.body);

//       if (error) {
//         return res.status(400).json({ error: error.details[0].message });
//       }

      
//       const updateData = await  channelRepo.update(req.body)
//       if (updateData) {
//         res.status(200).json({ message: "Updated Successfully",  success: true });
//       } else {
//         res.status(404).json({ message: "No Data Found", success: false });
//       }
//   },


//   async delete(req, res) {
//     const id   = req.params.id;
//     const data = await channelRepo.delete(id);
//     // console.log(data)
//     if (data) {
//       res.status(200).json({message: "Deleted Successfully", data: data, success: true });
//     } else {
//       res.status(404).json({ message: "No Data Found", success: false });
//     }
//   },

// };

// module.exports = channelController;
