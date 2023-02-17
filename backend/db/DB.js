const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const ConnectedDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.Mongo_URL);
    console.log(connected.connection.host);
  } catch (err) {
    console.log(err);
  }
};

module.exports = ConnectedDB;
