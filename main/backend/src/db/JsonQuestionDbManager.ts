import { Question } from "../model/question";
import { Database } from "./DbManager";
import { promises as fs } from "fs";

const FILE_PATH = "./question.json";

async function readFileAsync() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    console.log("File content:", data);
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

export const JsonUserDbManager: Database<Question> = {
  getAll(): Promise<Question[]> {
    // TODO: Read from file path
    const data = readFileAsync();
    if (!data) {
      return Promise.resolve([]);
    }

    const questions: Question[] = JSON.parse(data);
    return Promise.resolve(questions);
  },
};

// Follow this, implement JsonQuestionDbManager
// 1. Define Question's type according to readme
// 2. Implement JSONQuestionDbManager
// 3. Use it in api endpoint /questions
