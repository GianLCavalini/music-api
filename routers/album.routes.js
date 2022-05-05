const router = require("express").Router();

const AlbumModel = require("../models/Album.model");
const ArtistaModel = require("../models/Artista.model")

router.post("/add-album/:artistaId", async (req, res) => {
    try {

        const createdAlbum = await AlbumModel.create (
            {...req.body},
            
        );

        const foundedArtist = await ArtistaModel.findOneAndUpdate(
            { _id: req.params.artistaId },
            { $push: { albuns: createdAlbum._id } },
            { runValidators: true, new: true }
          );
        return res.status(200).json(createdAlbum)

    } catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
})

module.exports = router;