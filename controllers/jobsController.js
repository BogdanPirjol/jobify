import Job from "../models/Jobs.js";
import { BadRequest } from "../error/index.js";
import { StatusCodes } from "http-status-codes";
import { UUID, Op } from "sequelize";
import connectDB from "../DB/connectDB.js";
import moment from "moment";

const sequelize = connectDB();

const deleteJob = async (req, res) => {
  const { id } = req.params;
  if (!id || !typeof UUID) {
    throw new BadRequest("Please provide job id");
  }
  const deleted = await Job.destroy(
    {
      where: {
        id,
      },
    },
    {
      returning: true,
    }
  );

  res.status(StatusCodes.OK).json({
    numOfAffectedRows: deleted,
    jobId: id,
  });
};

const updateJob = async (req, res) => {
  const { company, position, status, jobType, jobLocation } = req.body;
  const { userId } = req.user;
  const { id } = req.params;
  if (!company || !position || !status || !jobType || !jobLocation)
    throw new BadRequest("Please provide all values");
  const newJob = await Job.update(
    {
      company,
      position,
      status,
      jobType,
      jobLocation,
    },
    {
      where: {
        userId,
        id,
      },
      returning: true,
    }
  );

  res.status(StatusCodes.OK).json(newJob);
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.findAll({
    where: {
      userId: req.user.userId,
    },
  });
  res.status(StatusCodes.OK).json({ entries: jobs.length, data: jobs });
};

const createJob = async (req, res) => {
  const { company, position, status, type: jobType, jobLocation } = req.body;
  if (!company || !position || !jobLocation)
    throw new BadRequest("Please provide all required values");
  const { userId } = req.user;

  const job = await Job.create(
    {
      company,
      position,
      status,
      jobType,
      jobLocation,
      userId,
    },
    {
      returning: true,
    }
  );

  res.status(200).json(job);
};

const showStats = async (req, res) => {
  const { userId } = req.user;
  const statistics = await Job.findAll({
    where: {
      userId,
    },
    attributes: [sequelize.fn("count", sequelize.col("status")), "status"],
    group: ["status"],
    raw: true,
  });
  const initialValue = null;
  const reducedValues = statistics.reduce((acc, curentValue) => {
    const { count, status } = curentValue;
    return {
      ...acc,
      [status]: count,
    };
  }, initialValue);
  const defautlValues = {
    rejected: reducedValues?.rejected || 0,
    accepted: reducedValues?.accepted || 0,
    pending: reducedValues?.pending || 0,
  };

  const rawMonthlyApplications = await Job.findAll({
    where: {
      userId,
    },
    attributes: [
      [sequelize.fn("count", sequelize.col("createdAt")), "jobs_per_month"],
      [sequelize.fn("date_trunc", "month", sequelize.col("createdAt")), "date"],
    ],
    group: [sequelize.fn("date_trunc", "month", sequelize.col("createdAt"))],
    raw: true,
  });

  const monthlyApplications = rawMonthlyApplications.map((data) => {
    const { jobs_per_month, date } = data;
    return {
      date: moment.utc(date).format("MMMM YYYY"),
      count: new Number(jobs_per_month),
    };
  });

  res
    .status(StatusCodes.OK)
    .json({ stats: defautlValues, monthlyApplications });
};

const allJobs = async (req, res) => {
  const { status, type, order } = req.query;
  const search = req.query.search || "";
  const page = req.query.page || 1;
  const limit = 10;

  const queryObject = {
    userId: req.user.userId,
  };

  if (status && status !== "all") queryObject.status = status;
  if (type && type !== "all") queryObject.jobType = type;

  const orderMap = {
    newest: ["updatedAt", "DESC"],
    oldest: ["updatedAt", "ASC"],
    'a-z': ["company", "ASC"],
    'z-a': ["company", "DESC"],
  };

  const { count, rows } = await Job.findAndCountAll({
    where: {
      ...queryObject,
      [Op.or]: [
        {
          company: {
            [Op.iLike]: `%${search}%`,
          },
        },
        {
          jobLocation: {
            [Op.iLike]: `%${search}%`,
          },
        },
        {
          position: {
            [Op.iLike]: `%${search}%`,
          },
        },
      ],
    },
    order: [orderMap[order || "newest"]],
    limit,
    offset: (page - 1) * limit,
  });
  res.status(200).json({ count, rows });
};

export { deleteJob, updateJob, getAllJobs, createJob, showStats, allJobs };
