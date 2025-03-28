import express from "express";
import { v4 as uuidv4 } from "uuid";
import { JsonQuestionDbManager } from "./db/JsonQuestionDbManager.ts";

const app = express();
const PORT = 4000;

// Sample data
const question = {
  _id: 1,
  questionNum: 1,
  title: "Two Sum",
  description: "This is a very simple example",
  difficulty: "EASY",
  tags: ["Arrays", "Hash Table"],
  link: "https://leetcode.com/problems/two-sum",
  relatedQuestions: [112, 2, 13],
};

const questionRelationship = {
  _id: uuidv4(),
  questionA: 1,
  questionB: 5,
  relationStrength: 0.85,
};

const questionMap = {
  questions: [question],
  relationships: [questionRelationship],
};

// Routes
app.get("/question", async (req, res) => {
  const questions = await JsonQuestionDbManager.getAll();
  res.json(questions);
});

app.get("/questionRelationship", (req, res) => {
  res.json(questionRelationship);
});

app.get("/questionMap", (req, res) => {
  res.json(questionMap);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
