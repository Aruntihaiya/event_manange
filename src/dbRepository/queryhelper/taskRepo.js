const db = require("./../../models/index");
const path = require("path"); // Import path module to use path.extname
// const task_item = require("../../models/task_item");


const task = db.task;
const task_item = db.task_item;

const taskRepo = {
  async createtaskdata(req, res) {
    console.log(req)

    try {
     const newSpace = await task.create({
          assigne_id:req.assigne_id,
          assigner_id:req.assigner_id,
            custum_field:req.custum_field
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

module.exports = taskRepo;
