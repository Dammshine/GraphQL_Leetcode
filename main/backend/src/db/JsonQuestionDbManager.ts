import type { Question } from "../model/question.ts";
import type { Database } from "./DbManager.ts";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// build an absolute path to question.json in the same folder as this module
const FILE_PATH = join(__dirname, "question.json");

async function readFileAsync() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

export const JsonQuestionDbManager: Database<Question> = {
  async getAll(): Promise<Question[]> {
    const data = await readFileAsync();
    if (!data) {
      return Promise.resolve([]);
    }

    const questions: Question[] = JSON.parse(data);

    return Promise.resolve(questions);
  },
};
