export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  UNKNOWN = 'UNKNOWN'
};

export type QuestionInterface = {
  _id: string;
  questionNum: number;
  title: string,
  description: string,
  difficulty: Difficulty,
  tags: string[],
  link: string,
  relatedQuestions: number[],
}

export type QuestionRelationshipInterfaces = {
  _id: string,
  firstQuestionId: string,
  secondQuestionId: string,
  strength: number,
}

export type AdjacencyList = Record<string, { question: QuestionInterface; related: { id: string; strength: number }[] }>;

export type AdjacencyMatrix = Record<string, Record<string, number>>;

export type QuestionMap = {
  questions: QuestionInterface[];
  relationships: QuestionRelationshipInterfaces[];

  adjacencyList: AdjacencyList;     // Backend pass this null, frontend handle
  adjacencyMatrix: AdjacencyMatrix; // Backend pass this null, frontend handle
};