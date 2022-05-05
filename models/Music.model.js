const { Schema, model, default: mongoose } = require("mongoose");

const musicSchema = new Schema({
  title: {
    type: String,
    required: true,
    // validate: { validator: (s) => s.length >= 1 },
    minlength: 1,
  },
  duration: { type: Number, min: 1, max: 1200, required: true },
  main_artist: { type: mongoose.Types.ObjectId, ref: "Artista" },
  collaborators: [{ type: mongoose.Types.ObjectId, ref: "Artista" }],
  // Antes de criar a musica, ele precisa criar o album
  // Isso não é required, então, pode ser tipo um single
  albuns: [{ type: mongoose.Types.ObjectId, ref: "Album" }],
  // likes: { type: Number, default: 0 },
  usersLikeThisSong: [
    { type: mongoose.Types.ObjectId, ref: "User", unique: true },
  ],
  playlistsParticipations: [{ type: mongoose.Types.ObjectId, ref: "Playlist" }],
});

const MusicModel = model("Music", musicSchema);

module.exports = MusicModel;
