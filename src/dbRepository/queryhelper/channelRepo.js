const db = require("./../../models/index");
const Channel = db.channel;
const user = db.user;

const channelRepo = {
  // adding a channel
  async add(bodyData) {
    try {
      const { name, desc, userId } = bodyData;
      const document = Channel.build({
        name: name,
        desc: desc,
        userId: userId,
      });

      return (saveDoc = await document.save());
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  // fetching all existing channels
  async index() {
    try {
      return (allData = await Channel.findAll({}));
    } catch (error) {
      return error;
    }
  },

  async edit(id) {
    try {
      const data = await Channel.findOne({
        where: {
          id: id,
        },
      });

      return data;
    } catch (error) {
      return error;
    }
  },

  async update(bodyData) {
    try {
      const updateData = await Channel.update(
        {
          name: bodyData.name,
          desc: bodyData.desc,
          userId: bodyData.userId,
          status: bodyData.status,
        },
        {
          where: {
            id: bodyData.id,
          },
        }
      );

      return updateData;
    } catch (error) {
      return error;
    }
  },
};

module.exports = channelRepo;
