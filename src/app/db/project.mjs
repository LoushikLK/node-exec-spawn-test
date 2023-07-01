import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
    userEmail: String,
    password: String,
    appName: String,
    gitHubUrl: String,
    githubPassword: String,
    branchName: String,
    commands: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const projectModel = mongoose.model("Project", projectSchema);
