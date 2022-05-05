const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  nickname: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  passwordHash: { type: String, required: true },
  age: { type: Number, required: true },
  playlists: [{ type: mongoose.Types.ObjectId, ref: "Playlist" }],
  favSongs: [{ type: mongoose.Types.ObjectId, ref: "Music" }],
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
