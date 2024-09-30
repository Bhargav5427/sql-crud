const { userServices } = require("../services");

// ADD USER
let handlePostUser = async (req, res) => {
  try {
    let body = req.body;

    let result = await userServices.postUser(body);
    if (!result) {
      throw new Error("Something Went Wrong");
    }
    res.status(201).json({
      message: "SuccessFully User Created..!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER
let handleGetUser = async (req, res) => {
  try {
    let result = await userServices.getUser();
    if (!result) {
      throw new Error("Something Went Wrong");
    }
    res.status(201).json({
      message: "User Get SuccessFully..!",
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE USER
let handleDeleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await userServices.deleteUser(id);
    if (!result) {
      throw new Error("Something Went Wrong");
    }
    res.status(201).json({
      message: "User Delete SuccessFully..!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE USER

let handleUpdateUser = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await userServices.updateUser(id, req.body);
    console.log("🚀 ~ handleUpdateUser ~ result:", result)
  } catch (error) {}
};

module.exports = {
  handlePostUser,
  handleGetUser,
  handleDeleteUser,
  handleUpdateUser,
};
