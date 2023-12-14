const db       = require("./../../models/index");
const Blog     = db.blog;

const blogRepo = {
    // adding a channel
  async add(bodyData) {
    try {

      const { name,desc,channelId } = bodyData;
      const document = Blog.build({
      name  : name,
      desc  : desc,
      channelId: channelId

      });

      return (saveDoc = await document.save());
    } catch (error) {

      console.log (error);
      return error

    }
  },
// fetching all existing channels 
  async index() {
    try {
    return allData = await Blog.findAll({ });
    
    }
    catch (error) {
    return error; 
    }

  },

//   fetch channel by id 
 async edit(id) {
  try {
    // console.log(id)
    const data = await Blog.findOne({
    where: {
      id: id,
    },
    });
    
    return data;
  } catch (error) {
    return error
  }
      // console.log(data)

  },

//   updating the channel data on the behalf of id 
 async update(bodyData) {
    try {
   const updateData = await Blog.update(
    {
        name       : bodyData.name,
        desc       : bodyData.desc,
        channelId  : bodyData.channelId,
        status     : bodyData.status
    }, {
    where:{
       id: bodyData.id,
    },});
    
    return updateData;

    }catch (error) {
     return error;
    }
  },

//   delete channel data 
  async delete(id) {
    try {
   const data = await Blog.destroy({
    where: {
      id: id,
     }, 
    });

    return data;
        
    } catch (error) {
        // console.log(error)
     return error;   

    }
  },
};

module.exports = blogRepo;
