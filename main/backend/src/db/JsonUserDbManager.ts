import { User } from "../model/user";
import { Database } from "./DbManager";

const FILE_PATH = "./user.json";
export const JsonUserDbManager: Database<User> = {
  getAll(): Promise<User[]> {
    // TODO: Read from file path
    return Promise.resolve([]);
  },
};

// Follow this, implement JsonQuestionDbManager
// 1. Define Question's type according to readme
// 2. Implement JSONQuestionDbManager
// 3. Use it in api endpoint /questions
