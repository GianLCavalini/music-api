const router = require("express").Router();
const UserModel = require("../models/User.model");

router.post("/signup", async (req, res) => {
  try {
    const userObj = req.body;

    const createdObj = await UserModel.create(userObj);

    return res.status(201).json(createdObj);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(req);

    const foundedUser = await UserModel.findOne({ _id: userId });

    return res.status(200).json(foundedUser);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const updatedObj = await UserModel.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { runValidators: true, new: true }
    );

    return res.status(200).json(updatedObj);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete("/delete-account/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedObj = await UserModel.deleteOne({ _id: userId });

    return res.status(200).json(deletedObj);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
