const router = require("express").Router();
const PlaylistModel = require("../models/Playlist.model");


router.post("/add-playlist", async (req, res) => {
    try {
        const playlistObj = req.body;

        const createPlaylist = await PlaylistModel.create(playlistObj);

        return res.status(201).json(createPlaylist)


    } catch (error) {
      console.log(error);
    }
});

router.get("/:playlistId", async (req, res) => {
    try{
        const { playlistId } = req.params;

        const foundPlaylist = await PlaylistModel.findOne({_id: playlistId })

        return res.status(200).json(foundPlaylist)
    }  catch (error) {
       console.log(error);
    }
});

router.patch("/update/:playlistId", async (req, res) => {
    try {
        const { playlistId } = req.params;

        const updatePlaylist = await PlaylistModel.findOneAndUpdate(
            {_id: playlistId },
            {...req.body },
            { runValidators: true, new: true},

        );

        return res.status(200).json(updatePlaylist)

    } catch (error) {
      return res.status(500).json(error)
    }
})

router.delete("/delete-playlist/:playlistId", async (req, res) => {
    try {
        const { playlistId } = req.params;

        const deletePlaylist = await PlaylistModel.deleteOne({_id: playlistId});
        return res.status(200).json(deletePlaylist)

    }catch (error) {
        return res.status(500).json(error)
    }

});

module.exports = router