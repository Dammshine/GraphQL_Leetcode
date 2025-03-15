type Difficulty = "EASY" | "MEDIUM" | "HARD";

export type Question = {
  _id: number;
  questionNum: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  tags: string;
  link: string;
  relatedQuestions: number[];
};
