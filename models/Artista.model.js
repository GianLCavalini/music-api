const {Schema, model} = require("mongoose");

const artistasSchema = new Schema({

    artista: {type: String, required: true, trim: true},
    musicas_populares: [],
    albuns: [{
        album_name: {type: String, required: true, trim: true},
        released_data: {type: String, required: true, trim: true},
        musics: [],
        img: {type: String, required: true, trim: true}

    }],
    categoria: {type: String, required: true, trim: true},
    sobre: {type: String, required: true, trim: true},
    img: {type: String, required: true, trim: true}


});

const ArtistasModel = model("Artistas", artistasSchema );

module.exports = ArtistasModel;

