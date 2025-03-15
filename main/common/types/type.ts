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

export type QuestionRelationship = {
  _id: string,
  firstQuestionId: string,
  secondQuestionId: string,
  strength: number,
}
