const router = require("express").Router();

const ArtistasModel = require("../models/Artista.model");

router.post("/add-artistas", async (req, res) => {
	try {
		const artistaObj = req.body;

		const createdObj = await ArtistasModel.create(artistaObj);

		return res.status(201).json(createdObj);
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});




router.get("/:artistaId", async (req, res) => {
	try {
		const { artistaId } = req.params;

		const foundedAstist = await ArtistasModel.findOne({ _id: artistaId });

		return res.status(200).json(foundedAstist);
	} catch (error) {
		console.log(error);
	}
});

router.patch("/update-artista/:artistaId", async (req, res) => {
	try {
		const { artistaId } = req.params;
        
		const updatedObj = await ArtistasModel.findOneAndUpdate(
			{ _id: artistaId },  
			{ ...req.body },
			{ runValidators: true, new: true },

		);
        return res.status(200).json(updatedObj);
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

router.delete("/delete-artist/:artistaId", async (req, res) => {
    try{

        const {artistaId} = req.params;

        const deletedArtista = await ArtistasModel.deleteOne(
            {_id: artistaId}
        );

            return res.status(200).json(deletedArtista);

    } catch(error){
        console.error(error);
		return res.status(500).json(error);
    }
})



module.exports = router;
