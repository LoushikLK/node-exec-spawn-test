#!/usr/bin/env node
import { spawn } from "child_process";
import * as dotenv from "dotenv";
import connectToDb from "./app/db/connect.mjs";
import createUser from "./lib/createUser.mjs";
import {
  whatIsYourAppName,
  whatIsYourEmail,
  whatIsYourGithubBranch,
  whatIsYourGithubPassword,
  whatIsYourGithubURL,
  whatIsYourPassword,
  whatIsYourRestartCommand,
} from "./lib/questions.mjs";

dotenv.config();

const userEmail = await whatIsYourEmail();
const userPassword = await whatIsYourPassword();
const userAppName = await whatIsYourAppName();
const useGithub = await whatIsYourGithubURL();
const useGithubPass = await whatIsYourGithubPassword();
const useGithubBranch = await whatIsYourGithubBranch();
const userCommands = await whatIsYourRestartCommand();

const startScript = spawn("npm", ["run", "start-server"], {
  shell: true,
  detached: true,
});

startScript.stdout.on("data", (data) => {
  console.log(data?.toString("utf8"));
});

startScript.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

startScript.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

connectToDb();

await createUser({
  userEmail: userEmail,
  password: userPassword,
  appName: userAppName,
  gitHubUrl: useGithub,
  githubPassword: useGithubPass,
  branchName: useGithubBranch,
  commands: userCommands?.split("&&"),
});

process.exit(1);
