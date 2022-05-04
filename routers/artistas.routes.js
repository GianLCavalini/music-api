const router = require("express").Router();

const ArtistasModel = require("../models/Artista.model");

router.post("/add-artistas", async (req, res) => {
    try{

        const artistaObj = req.body;

        const createdObj = await ArtistasModel.create(artistaObj);


        return res.status(201).json(createdObj)
    }
    
    catch(error){
        console.error(error);
        return res.status(500).json(error);
    }
})  









module.exports = router;


