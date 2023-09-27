import { BadRequest, Unauthenticated } from "../error/index.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest("Please provide required values (email `n password)");
  }

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user || !user.isPasswdCorrect(password)) {
    throw new Unauthenticated("Invalid credentials!");
  }

  user.password = null;
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest("Please provide all required values!");
  }

  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(201).json({ user, token });
};

const logout = async (req, res) => {
  res.send("logout");
};

const updateUser = async (req, res) => {
  res.send("update");
};

export { login, logout, register, updateUser };
