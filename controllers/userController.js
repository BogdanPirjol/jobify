import { BadRequest, Unauthenticated } from "../error/index.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const getUser = async (req, res) => {
  res.send("get user");
};

const updateUser = async (req, res) => {
  const { name, lastName, location, email } = req.body;
  const { userId } = req.user;
  if (!name || !lastName || !location || !email) {
    throw new BadRequest("Request body fields can not be empty!");
  }
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Unauthenticated("User does not exists!");
  }

   user.set({
    name,
    lastName,
    location,
    email,
  });
  const newUser = await user.save();
  newUser.password = null;
  
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: newUser,
    token,
  });
};

export { getUser, updateUser };
