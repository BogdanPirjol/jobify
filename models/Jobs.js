import { DataTypes } from "sequelize";
import User from "./User.js";
import connectDB from "../DB/connectDB.js";

const sequelize = connectDB;

const Job = sequelize().define("Jobs", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide company name",
      },
      len: {
        args: [1, 50],
        msg: "Company name length must be between 1 and 50",
      },
      notEmpty: {
        msg: 'Don t let company field empty'
      }
    },
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide job position",
      },
      len: {
        args: [1, 100],
        msg: "Job position length must be between 1 and 100",
      },
      notEmpty: {
        msg: 'Don t let position field empty'
      }
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pending", "rejected", "accepted"],
    defaultValue: "pending",
  },
  jobType: {
    type: DataTypes.ENUM,
    values: ["part-time", "full-time", "remote", "internship"],
    defaultValue: "full-time",
  },
  jobLocation: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 50],
        msg: "Job location length must be between 1 and 50",
      },
      notNull: {
        msg: "Please provide job location",
      },
      notEmpty: {
        msg: 'Don t let location field empty'
      }
    },
  },
});

User.hasMany(Job, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});

Job.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});

export default Job;

/* , {
    foreignKey: {
      name: "userId",
      type: DataTypes.UUID
    },
    onDelete: 'NO ACTION'
  } */
