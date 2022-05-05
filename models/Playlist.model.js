const { Schema, model } = require("mongoose");

const playlistSchema = new Schema({
    user: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    genero: {type: String, required: true, trim: true},
    descricao: {type: String, trim: true},
    musicas: []
});

const PlaylistMoldel = model("Playlist", playlistSchema);

module.exports =  PlaylistMoldel;