const { Schema, model, default: mongoose } = require("mongoose");

const playlistSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  name: { type: String, required: true, trim: true },
  genero: [{ type: String, enum: ["rock", "pop", "proibidão"] }],
  descricao: { type: String, trim: true },
  musicas: [{ type: mongoose.Types.ObjectId, ref: "Music" }],
});

const PlaylistMoldel = model("Playlist", playlistSchema);

module.exports = PlaylistMoldel;
