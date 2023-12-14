const db = require("./../../models/index");
const path = require("path"); // Import path module to use path.extname
// const task_item = require("../../models/task_item");



const status_item = db.status;

const statusRepo = {
  async statuslist(req, res) {
    console.log(req,'gggg')

    try {
     const newSpace = await status_item.findAll({
        
        });

        return {
          action: "update",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
  async createstatus(req, res) {
    console.log(req,'gggg')

    try {
     const newSpace = await status_item.create({
         title:req.title
        });

        return {
          action: "create",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
  async updatestatusdata(req, res) {
    console.log(req,'gggg')

    try {
     const newSpace = await status_item.update({
      title:req.title,
     },{
          where:{
            id:req.id
          }
        });

        return {
          action: "update",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
  async deletestatusdata(req, res) {
    console.log(req,'gggg')

    try {
      const newSpace = await status_item.destroy({
        where: {
          id: req.id,
        }
      });

        return {
          action: "update",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
};

module.exports = statusRepo;
