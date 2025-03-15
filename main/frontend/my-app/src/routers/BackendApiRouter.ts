import axios from 'axios';
import {
  QuestionInterface,
  QuestionRelationshipInterfaces,
  QuestionMap,
  AdjacencyList,
  AdjacencyMatrix
} from '../../../../common/types/type.ts';
import {MOCK_MAPS, MOCK_QUESTIONS, MOCK_RELATIONSHIPS} from '../../../../common/mock/MOCK_DATA.ts';
import { cloneSimple } from '../../../../common/util/util.ts';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'; // Use env variable

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface BackendApiRouter {
  getQuestion: (id: string) => Promise<QuestionInterface>;
  getRelationship: (id: string) => Promise<QuestionRelationshipInterfaces>;
  getMap: () => Promise<QuestionMap>;
}

// Helper function to construct adjacency list and matrix
const buildGraphStructures = (questions: QuestionInterface[], relationships: QuestionRelationshipInterfaces[]) => {
  const adjacencyList: AdjacencyList = {};
  const adjacencyMatrix: AdjacencyMatrix = {};

  // Initialize adjacency structures
  questions.forEach((question) => {
    adjacencyList[question._id] = { question, related: [] };
    adjacencyMatrix[question._id] = {};
  });

  // Fill adjacency structures using relationships
  relationships.forEach(({ firstQuestionId, secondQuestionId, strength }) => {
    adjacencyList[firstQuestionId].related.push({ id: secondQuestionId, strength });
    adjacencyList[secondQuestionId].related.push({ id: firstQuestionId, strength });

    adjacencyMatrix[firstQuestionId][secondQuestionId] = strength;
    adjacencyMatrix[secondQuestionId][firstQuestionId] = strength;
  });

  return { adjacencyList, adjacencyMatrix };
};

// API Wrapper to handle requests
export const apiRouter: BackendApiRouter = {
  getQuestion: (id: string): Promise<QuestionInterface> =>
    api.get(`/questions/${id}`).then((_res) => {
      // return res.data as QuestionInterface
      const ret = cloneSimple(MOCK_QUESTIONS).find((q) => q._id == id);
      if (ret == undefined) {
        throw new Error('something went wrong');
      }

      return ret;
    }),

  getRelationship: (id: string): Promise<QuestionRelationshipInterfaces> =>
    api.get(`/relationships/${id}`).then((res) => {
      // return res.data as QuestionInterface
      const ret = cloneSimple(MOCK_RELATIONSHIPS).find((q) => q._id == id);
      if (ret == undefined) {
        throw new Error('something went wrong');
      }

      return ret;
    }),

  getMap: async (): Promise<QuestionMap> => {
    const res = await api.get(`/map`);
    res.data = 'some'; // Remove fix red line
    const questionMapRaw: QuestionMap = cloneSimple(MOCK_MAPS); //res.data;

    // If adjacency structures are null (from backend), generate them
    const { adjacencyList, adjacencyMatrix } = questionMapRaw.adjacencyList && questionMapRaw.adjacencyMatrix
      ? { adjacencyList: questionMapRaw.adjacencyList, adjacencyMatrix: questionMapRaw.adjacencyMatrix }
      : buildGraphStructures(questionMapRaw.questions, questionMapRaw.relationships);

    return {
      ...questionMapRaw,
      adjacencyList,
      adjacencyMatrix,
    };
  }
};
