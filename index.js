const dotenv = require("dotenv");
dotenv.config();

const dbConnect = require("./config/db.config");
dbConnect();
const express = require("express");
const app = express();
app.use(express.json());

app.listen(Number(process.env.PORT), () => {
  console.log("Server up! PORT:", process.env.PORT);
});
