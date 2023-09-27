import { Router } from "express";
import {
  createJob,
  updateJob,
  deleteJob,
  showStats,
  getAllJobs,
  allJobs
} from "../controllers/jobsController.js";
import auth from '../middleware/authenticate.js';

const router = Router();

router.use(auth);
router.route('/test').get(allJobs);
router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
