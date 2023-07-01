import { Router } from "express";
import { projectModel } from "../db/project.mjs";

const router = Router();

router.post("/:projectName", async (req, res, next) => {
  try {
    const requestBody = req?.body;

    await projectModel.findOneAndUpdate(
      {
        appName: req.params?.projectName,
      },
      {
        $push: {
          metadata: requestBody,
        },
      }
    );
    res.send("Success");
  } catch (error) {
    next(error);
  }
});

export default router;
