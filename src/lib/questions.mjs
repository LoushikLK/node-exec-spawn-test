import { askQuestion, prompt } from "./ask.mjs";

const whatIsYourEmail = async () => {
  const email = await askQuestion("What is your email:\n");
  return email;
};
const whatIsYourPassword = async () => {
  const password = await askQuestion("What is your password:\n");
  const confirmPassword = await askQuestion("Confirm your password:\n");
  if (password !== confirmPassword) {
    prompt.write("Password does not match");
    process.exit(1);
  }
  return password;
};

const whatIsYourAppName = async () => {
  const appName = await askQuestion("What is your appName:\n");
  return appName;
};
const whatIsYourGithubURL = async () => {
  const githubUrl = await askQuestion("What is your githubUrl:\n");
  return githubUrl;
};
const whatIsYourGithubPassword = async () => {
  const githubPass = await askQuestion("What is your githubPassKey:\n");
  return githubPass;
};
const whatIsYourGithubBranch = async () => {
  const githubBranch = await askQuestion("What is your githubBranch:\n");
  return githubBranch;
};
const whatIsYourRestartCommand = async () => {
  const restartCommand = await askQuestion(
    "What is your deploy command (use && to run multiple command) :\n"
  );
  return restartCommand;
};

export {
  whatIsYourAppName,
  whatIsYourEmail,
  whatIsYourGithubBranch,
  whatIsYourGithubPassword,
  whatIsYourGithubURL,
  whatIsYourPassword,
  whatIsYourRestartCommand,
};
