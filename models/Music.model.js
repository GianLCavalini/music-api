const { Schema, model, default: mongoose } = require("mongoose");

const musicSchema = new Schema({
  title: {
    type: String,
    required: true,
    validate: { validator: (s) => s.length >= 1 },
  },
  duration: { type: Number, min: 1, max: 1200, required: true },
  artist: { type: mongoose.SchemaTypes.ObjectId },
  collaborators: [mongoose.SchemaTypes.ObjectId],
  album: String,
});

const MusicModel = model("Music", musicSchema);

module.exports = MusicModel;
