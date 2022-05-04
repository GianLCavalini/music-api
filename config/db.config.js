const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado ao db:", dbConnection.connections[0].name);
  } catch (error) {
    console.log("Não conectado com o banco", error);
  }
}

module.exports = connect;
