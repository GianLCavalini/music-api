const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db.config");
dbConnect();

const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./routers/users.routes");
app.use("/user", userRouter);

const playlistRouter = require("./routers/playlist.routes");
app.use("/playlist", playlistRouter);

app.listen(Number(process.env.PORT), () => {
  console.log("Server up! PORT:", process.env.PORT);
});
