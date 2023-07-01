import { projectModel } from "../app/db/project.mjs";

const createUser = async (data) => {
  await projectModel.create(data);
};

export default createUser;
