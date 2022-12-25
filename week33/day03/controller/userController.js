const UserModel = require("../model/userModel");

const getUser = async (req, res) => {
  const users = req.query; //{language: 'hindi', name: ''}

  //   const conditions = {};

  try {
    const users = await UserModel.find();
    res.status(200).send({ status: "success", users });
  } catch (error) {
    console.log("Error fetching users from DB");
    res
      .status(500)
      .send({ status: "error", msg: "Error fetching users from DB" });
  }
};

const getUsersByID = async (req, res) => {
  const { userID } = req.params;

  try {
    const users = await UserModel.findById(userID);
    if (users) {
      res.status(200).send({ status: "success", users });
    } else {
      res.status(404).send({ status: "error", msg: "User Not found" });
    }
  } catch (error) {
    console.log("Error fetching user from DB");
    res
      .status(500)
      .send({ status: "error", msg: "Error fetching user from DB" });
  }
};

const postUser = async (req, res) => {
  const userData = req.body;

  //Validations
  try {
    const data = await UserModel.create(userData);
    console.log(data);
    res.status(201).send({
      status: "succes",
      msg: "User Inserted successfully",
      user: data,
    });
  } catch (error) {
    console.log("Error inserting user in DB");
    res
      .status(500)
      .send({ status: "error", msg: "  Error inserting user in DB", error });
  }
};

const updateUserById = async (req, res) => {
  const { userID } = req.params;
  const updatedUserData = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userID,
      updatedUserData
    );
    res.status(201).send({
      status: "succes",
      msg: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log("Error updating user in DB");
    res
      .status(500)
      .send({ status: "error", msg: "Error updating user in DB", error });
  }
};

const deleteUserByID = async (req, res) => {
  const { userID } = req.params;
  try {
    await UserModel.findByIdAndDelete(userID);
    res
      .status(201)
      .send({ status: "succes", msg: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user in DB");
    res.status(500).send({ status: "error", msg: "Error deleting user in D" });
  }
};

module.exports = {
  getUser,
  getUsersByID,
  postUser,
  updateUserById,
  deleteUserByID,
};