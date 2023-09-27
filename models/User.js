import { DataTypes } from "sequelize";
import sequelize from "../DB/connectDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { JWT_SECRET: jwtSecret, JWT_LIFETIME: jwtLifeTime } = process.env;

const User = sequelize().define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 20],
          msg: "wrong name length",
        },
        notNull: {
          msg: "Please provide name",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please provide email",
        },
        isEmail: {
          msg: "Please provide a valid email",
        },
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please provide password",
        },
        len: {
          min: 6,
          msg: "Password must be longer than 6 characters",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 20],
          msg: "wrong last name length",
        },
      },
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: 'Bucharest, Ro', 
      validate: {
        len: {
          max: 20,
          msg: "Location length must be shorter than 20 characters",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(12);
        user.password = bcrypt.hashSync(user.password, salt);
      },
      afterCreate: (user, opt) => {
        delete user.dataValues.password;
      },
    },
  }
);

User.prototype.createJWT = function () {
  const jtoken = jwt.sign({ userId: this.id }, jwtSecret, {
    expiresIn: jwtLifeTime,
  });
  return jtoken;
};

User.prototype.isPasswdCorrect = function (recievedPasswd) {
  return bcrypt.compareSync(recievedPasswd, this.dataValues.password);
} 

export default User;
