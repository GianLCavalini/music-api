const { Schema, model, default: mongoose } = require("mongoose");

const artistaSchema = new Schema({
  artista: { type: String, required: true, trim: true },
  all_musics: [{ type: mongoose.Types.ObjectId, ref: "Music" }],
  albuns: [{ type: mongoose.Types.ObjectId, ref: "Album" }],
  genero: [{ type: String, enum: ["rock", "pop", "proibidão"] }],
  sobre: { type: String, required: true, trim: true },
  img: { type: String, required: true, trim: true },
});

const ArtistaModel = model("Artista", artistaSchema);

module.exports = ArtistaModel;
