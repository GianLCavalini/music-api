const router = require("express").Router();

const AlbumModel = require("../models/Album.model");
const ArtistaModel = require("../models/Artista.model")

router.post("/add-album/:artistaId", async (req, res) => {
    try {

        const createdAlbum = await AlbumModel.create ({
            ...req.body,
            musics: req.body.artistaId,
            main_artist: req.body.artistaId,
            collaborators: req.body.artistaId
        });

        const foundedArtist = await ArtistaModel.findOneAndUpdate(
            { _id: req.params.artistaId },
            { $push: { albuns: createdAlbum } },
            { runValidators: true, new: true }
          );
        return res.status(200).json(createdAlbum)

    } catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
})

router.get("/:albumId", async (req, res) => {
    try {
		const { albumId } = req.params;

		const foundedAlbum = await AlbumModel.findOne({ _id: albumId });

		return res.status(200).json(foundedAlbum);
	} catch (error) {
		console.log(error);
         
	}
})





module.exports = router;