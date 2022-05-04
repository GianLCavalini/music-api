const router = require("express").Router();
const MusicModel = require("../models/Music.model");

// METODOS
const addMusic = async (req, res) => {
  try {
    const musicObj = req.body;
    const response = await MusicModel.create(musicObj);
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getMusicById = async (req, res) => {
  try {
    const response = await UserModel.findById(req.body.id);
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const patchMusicById = async (req, res) => {
  try {
    const { id } = req.params;
    const reponse = await UserModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { runValidators: true, new: true }
    );

    return res.status(200).json(reponse);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const deleteMusicById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await UserModel.deleteOne({ _id: id });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getAllMusic = async (req, res) => {
  try {
  } catch (err) {}
};

// ROUTES
router.route("/").post(addMusic).get(getAllMusic);
router
  .route("/:id")
  .get(getMusicById)
  .patch(patchMusicById)
  .delete(deleteMusicById);

// EXPORT
module.exports = router;
