const { Schema, model } = require("mongoose");

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
  playlist: [],
  favSongs: [],
});

const UserModel = model("User", userSchema);

module.exports = UserModel;

// Playlist
// Musicas
// Artistas
