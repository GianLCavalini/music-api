const router = require("express").Router();
const MusicHandler = require("../handlers/MusicHandler");

// ROUTES
router.route("/").post(MusicHandler.addMusic).get(MusicHandler.getAllMusic);
router
  .route("/:id")
  .get(MusicHandler.getMusicById)
  .patch(MusicHandler.patchMusicById)
  .delete(MusicHandler.deleteMusicById);

// EXPORT
module.exports = router;
