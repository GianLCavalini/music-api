const MusicModel = require("../models/Music.model");

// METODOS
exports.addMusic = async (req, res) => {
  try {
    const musicObj = req.body;
    const response = await MusicModel.create(musicObj);
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.getMusicById = async (req, res) => {
  try {
    const response = await MusicModel.findOne({ _id: req.params.id });
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.patchMusicById = async (req, res) => {
  try {
    const { id } = req.params;
    const reponse = await MusicModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { runValidators: true, new: true }
    );

    return res.status(200).json(reponse);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.deleteMusicById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await MusicModel.deleteOne({ _id: id });

    return res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err);
  }
};
exports.getAllMusic = async (req, res) => {
  try {
    const response = await MusicModel.find({});
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
