const db = require("./../../models/index");
const path = require("path"); // Import path module to use path.extname
// const task_item = require("../../models/task_item");



const task_item = db.task_item;

const task_itemRepo = {
  async createtaskitemdata(req, res) {
    console.log(req)

    try {
     const newSpace = await task_item.create({
        priority:req.priority,
        status:req.status,
        discription:req.discription
        });

        return {
          action: "update",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
  async listtaskitemdata(req, res) {
    console.log(req)

    try {
     const newSpace = await task_item.findAll();

        return {
          action: "update",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
  async updatetaskitemdata(req, res) {
    console.log(req)

    try {
      // await User.update({ lastName: "Doe" }, {
      //   where: {
      //     lastName: null,
      //   },
      // });



     const newSpace = await task_item.update({
      discription:req.discription,
      status:req.status
     },{
      where: {
            id: req.id,
        
          },
     });

        return {
          action: "update",
          data: newSpace, 
      
        };
    
    } catch (error) {
      return error;
    }
  },
  async deletetaskitemdata(req, res) {
    console.log(req)

    try {
      const newSpace = await task_item.destroy({
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

module.exports = task_itemRepo;
