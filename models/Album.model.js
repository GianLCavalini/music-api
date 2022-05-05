const { Schema, model, default: mongoose } = require("mongoose");

const albumSchema = new Schema({
  name: { type: String, required: true, trim: true },
  released_date: { type: String, required: true, trim: true },
  musics: [{ type: mongoose.Types.ObjectId, ref: "Music" }],
  img: { type: String, required: true, trim: true },
  main_artist: { type: mongoose.Types.ObjectId, ref: "Artista" },
  collaborators: [{ type: mongoose.Types.ObjectId, ref: "Artista" }],
});

const AlbumModel = model("Album", albumSchema);

module.exports = AlbumModel;
