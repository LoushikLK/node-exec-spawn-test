import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    metadata: {
      type: Schema.Types.Mixed,
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

export const projectModel = model("Project", projectSchema);
