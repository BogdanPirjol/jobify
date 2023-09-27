import { NotFound } from "../error/index.js";

const notFoundHand = (req, res) => {
  throw new NotFound("Ups! Resource requested not found.");
};

export default notFoundHand;
