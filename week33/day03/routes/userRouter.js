const { Router } = require("express");
const {
  deleteUserByID,
  getUser,
  getUsersByID,
  postUser,
  updateUserById,
} = require("../controller/userController");

const userRouter = Router();

//Moview routes
userRouter.get("/", getUser);
userRouter.get("/:userID", getUsersByID);

//Route level Middleware
userRouter.post("/", postUser);
userRouter.put("/:userID", updateUserById);
userRouter.delete("/:userID", deleteUserByID);

module.exports = userRouter;