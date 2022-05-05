const router = require("express").Router();
const MusicHandler = require("../handlers/MusicHandler");
const MusicModel = require("../models/Music.model");
const UserModel = require("../models/User.model");

// ROUTES
router.route("/").post(MusicHandler.addMusic).get(MusicHandler.getAllMusic);
router
  .route("/:id")
  .get(MusicHandler.getMusicById)
  .patch(MusicHandler.patchMusicById)
  .delete(MusicHandler.deleteMusicById);

router.post("/:userId/:musicId", async (req, res) => {
  try {
    const { userId, musicId } = req.params;

    const foundedMusic = await MusicModel.findOne({ _id: musicId });

    if (foundedMusic.usersLikeThisSong.includes(userId)) {
      return res.status(400).json({ msg: "This user already like this song" });
    }

    const updMusic = await MusicModel.findOneAndUpdate(
      { _id: musicId },
      { $push: { usersLikeThisSong: userId } },
      { runValidators: true, new: true }
    );

    return res.status(200).json(updMusic);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// EXPORT
module.exports = router;
