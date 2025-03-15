import { QuestionInterface, QuestionMap, QuestionRelationshipInterfaces, Difficulty } from "../types/type"
import {cloneSimple} from "../util/util.ts"


export const MOCK_QUESTIONS: QuestionInterface[] = [
  {
    "_id": "1",
    "questionNum": 1,
    "title": "Two Sum Problem",
    "description": "Given an array of integers and a target, find two numbers that add up to the target value.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Depth-First Search",
      "Queue",
      "Graph",
      "Searching",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/1",
    "relatedQuestions": []
  },
  {
    "_id": "2",
    "questionNum": 2,
    "title": "Coin Change",
    "description": "Given a target amount and coin denominations, determine the minimum number of coins needed to make the target amount.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Dynamic Programming",
      "Depth-First Search",
      "Memoization"
    ],
    "link": "https://mocksite.com/problems/2",
    "relatedQuestions": []
  },
  {
    "_id": "3",
    "questionNum": 3,
    "title": "N-Queens Puzzle",
    "description": "Place N queens on an N×N chessboard so that no two queens attack each other.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Breadth-First Search",
      "Searching",
      "Math",
      "Binary Search",
      "Backtracking"
    ],
    "link": "https://mocksite.com/problems/3",
    "relatedQuestions": []
  },
  {
    "_id": "4",
    "questionNum": 4,
    "title": "Sudoku Solver",
    "description": "Fill a 9x9 grid so that each row, column, and 3x3 subgrid contains all digits from 1 to 9.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Greedy",
      "String",
      "Linked List",
      "Binary Search",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/4",
    "relatedQuestions": []
  },
  {
    "_id": "5",
    "questionNum": 5,
    "title": "Knight's Tour",
    "description": "Find a sequence of moves for a knight on a chessboard such that the knight visits every square exactly once.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Bit Manipulation",
      "Matrix",
      "Dynamic Programming",
      "Backtracking"
    ],
    "link": "https://mocksite.com/problems/5",
    "relatedQuestions": []
  },
  {
    "_id": "6",
    "questionNum": 6,
    "title": "Prime Number Check",
    "description": "Determine whether a given number is prime.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Hash Table",
      "Arrays",
      "Math"
    ],
    "link": "https://mocksite.com/problems/6",
    "relatedQuestions": []
  },
  {
    "_id": "7",
    "questionNum": 7,
    "title": "Palindrome Partitioning",
    "description": "Split a string into as few substrings as possible such that each substring is a palindrome.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Divide and Conquer",
      "Searching",
      "String",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/7",
    "relatedQuestions": []
  },
  {
    "_id": "8",
    "questionNum": 8,
    "title": "Graph Cycle Detection",
    "description": "Determine if a given graph contains a cycle.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Recursion",
      "Divide and Conquer",
      "Depth-First Search",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/8",
    "relatedQuestions": []
  },
  {
    "_id": "9",
    "questionNum": 9,
    "title": "Task Scheduling",
    "description": "Determine a valid order to execute a set of tasks given their dependencies.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Graph",
      "Math"
    ],
    "link": "https://mocksite.com/problems/9",
    "relatedQuestions": []
  },
  {
    "_id": "10",
    "questionNum": 10,
    "title": "Valid Parentheses",
    "description": "Check if a given string of parentheses is well-formed and balanced.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Recursion",
      "Queue",
      "Breadth-First Search",
      "Dynamic Programming",
      "Stack"
    ],
    "link": "https://mocksite.com/problems/10",
    "relatedQuestions": []
  },
  {
    "_id": "11",
    "questionNum": 11,
    "title": "Merge Intervals",
    "description": "Merge all overlapping intervals in a given list of intervals.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Sorting",
      "Linked List",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/11",
    "relatedQuestions": []
  },
  {
    "_id": "12",
    "questionNum": 12,
    "title": "Word Ladder",
    "description": "Find the shortest transformation sequence from a start word to a target word given a dictionary of valid words.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Queue",
      "Greedy",
      "Breadth-First Search",
      "String"
    ],
    "link": "https://mocksite.com/problems/12",
    "relatedQuestions": []
  },
  {
    "_id": "13",
    "questionNum": 13,
    "title": "Trapping Rain Water",
    "description": "Compute how much water can be trapped between the bars given an elevation map.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Breadth-First Search",
      "Backtracking",
      "Two Pointers"
    ],
    "link": "https://mocksite.com/problems/13",
    "relatedQuestions": []
  },
  {
    "_id": "14",
    "questionNum": 14,
    "title": "LRU Cache Implementation",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Breadth-First Search",
      "Bit Manipulation",
      "Arrays",
      "Linked List",
      "Hash Table"
    ],
    "link": "https://mocksite.com/problems/14",
    "relatedQuestions": []
  },
  {
    "_id": "15",
    "questionNum": 15,
    "title": "Median of Two Sorted Arrays",
    "description": "Find the median value given two sorted arrays of numbers.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Greedy",
      "Binary Search",
      "Graph",
      "Memoization",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/15",
    "relatedQuestions": []
  },
  {
    "_id": "16",
    "questionNum": 16,
    "title": "Rotate Matrix",
    "description": "Rotate a given N x N matrix by 90 degrees (clockwise).",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Greedy",
      "Breadth-First Search",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/16",
    "relatedQuestions": []
  },
  {
    "_id": "17",
    "questionNum": 17,
    "title": "Jump Game",
    "description": "Determine if you can reach the last index of an array given the maximum jump length from each position.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Hash Table",
      "Dynamic Programming",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/17",
    "relatedQuestions": []
  },
  {
    "_id": "18",
    "questionNum": 18,
    "title": "Sliding Window Maximum",
    "description": "For an array and window size k, find the maximum value in each contiguous subarray of length k.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Memoization",
      "Sorting",
      "Greedy",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/18",
    "relatedQuestions": []
  },
  {
    "_id": "19",
    "questionNum": 19,
    "title": "Longest Palindromic Substring",
    "description": "Find the longest substring of a given string that is a palindrome.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Divide and Conquer",
      "Bit Manipulation",
      "Dynamic Programming",
      "String"
    ],
    "link": "https://mocksite.com/problems/19",
    "relatedQuestions": []
  },
  {
    "_id": "20",
    "questionNum": 20,
    "title": "Climbing Stairs",
    "description": "Count the number of distinct ways you can climb to the top of a staircase with n steps, taking 1 or 2 steps at a time.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Queue",
      "Dynamic Programming",
      "Hash Table"
    ],
    "link": "https://mocksite.com/problems/20",
    "relatedQuestions": []
  },
  {
    "_id": "21",
    "questionNum": 21,
    "title": "Spiral Matrix",
    "description": "Traverse and collect all elements of a matrix in spiral order.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Sorting",
      "Greedy",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/21",
    "relatedQuestions": []
  },
  {
    "_id": "22",
    "questionNum": 22,
    "title": "Maximum Subarray Sum",
    "description": "Given an array of integers, the task is to find the maximum subarray sum.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Recursion",
      "Divide and Conquer",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/22",
    "relatedQuestions": []
  },
  {
    "_id": "23",
    "questionNum": 23,
    "title": "Shortest Path in a Graph",
    "description": "Given a graph, find the shortest path in the graph.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Searching",
      "Dynamic Programming",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/23",
    "relatedQuestions": []
  },
  {
    "_id": "24",
    "questionNum": 24,
    "title": "Balanced Binary Tree Depth",
    "description": "Given a binary tree, find the balanced binary tree depth.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Hash Table",
      "Graph",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/24",
    "relatedQuestions": []
  },
  {
    "_id": "25",
    "questionNum": 25,
    "title": "Optimal Schedule",
    "description": "Given the given input, solve the optimal schedule problem.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Hash Table",
      "Tree",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/25",
    "relatedQuestions": []
  },
  {
    "_id": "26",
    "questionNum": 26,
    "title": "Unique Subsequence",
    "description": "Given the given input, solve the unique subsequence problem.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Greedy",
      "Sorting",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/26",
    "relatedQuestions": []
  },
  {
    "_id": "27",
    "questionNum": 27,
    "title": "Fastest Path",
    "description": "Given the given input, solve the fastest path problem.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Linked List",
      "Greedy",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/27",
    "relatedQuestions": []
  },
  {
    "_id": "28",
    "questionNum": 28,
    "title": "Deepest Distance",
    "description": "Given the given input, find the deepest distance.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Hash Table",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/28",
    "relatedQuestions": []
  },
  {
    "_id": "29",
    "questionNum": 29,
    "title": "Balanced Matching",
    "description": "Given the given input, solve the balanced matching problem.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Greedy",
      "Recursion",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/29",
    "relatedQuestions": []
  },
  {
    "_id": "30",
    "questionNum": 30,
    "title": "Circular Subarray Sum",
    "description": "Given an array of integers, find the circular subarray sum.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Recursion",
      "Tree",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/30",
    "relatedQuestions": []
  },
  {
    "_id": "31",
    "questionNum": 31,
    "title": "Kth Largest Combination",
    "description": "Given the given input, find the kth largest combination.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Linked List",
      "Recursion",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/31",
    "relatedQuestions": []
  },
  {
    "_id": "32",
    "questionNum": 32,
    "title": "Highest Order",
    "description": "Given the given input, solve the highest order problem.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Breadth-First Search",
      "Sorting",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/32",
    "relatedQuestions": []
  },
  {
    "_id": "33",
    "questionNum": 33,
    "title": "Optimal Path Sum",
    "description": "Given the given input, find the optimal path sum.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Bit Manipulation",
      "Hash Table",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/33",
    "relatedQuestions": []
  },
  {
    "_id": "34",
    "questionNum": 34,
    "title": "Deepest Tree Diameter",
    "description": "Given a binary tree, find the deepest tree diameter.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Divide and Conquer",
      "Greedy",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/34",
    "relatedQuestions": []
  },
  {
    "_id": "35",
    "questionNum": 35,
    "title": "Unique Combination",
    "description": "Given the given input, solve the unique combination problem.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Breadth-First Search",
      "Greedy",
      "Sorting"
    ],
    "link": "https://mocksite.com/problems/35",
    "relatedQuestions": []
  },
  {
    "_id": "36",
    "questionNum": 36,
    "title": "Fastest Route",
    "description": "Given the given input, solve the fastest route problem.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Divide and Conquer",
      "Searching",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/36",
    "relatedQuestions": []
  },
  {
    "_id": "37",
    "questionNum": 37,
    "title": "Unique Path",
    "description": "Given the given input, solve the unique path problem.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Searching",
      "Divide and Conquer",
      "Hash Table"
    ],
    "link": "https://mocksite.com/problems/37",
    "relatedQuestions": []
  },
  {
    "_id": "38",
    "questionNum": 38,
    "title": "Common Subsequence",
    "description": "Given the given input, find the common subsequence.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Math",
      "Dynamic Programming",
      "String"
    ],
    "link": "https://mocksite.com/problems/38",
    "relatedQuestions": []
  },
  {
    "_id": "39",
    "questionNum": 39,
    "title": "Path",
    "description": "Given the given input, solve the path problem.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Queue",
      "Greedy",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/39",
    "relatedQuestions": []
  },
  {
    "_id": "40",
    "questionNum": 40,
    "title": "Distance",
    "description": "Given the given input, solve the distance problem.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Stack",
      "Searching",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/40",
    "relatedQuestions": []
  },
  {
    "_id": "41",
    "questionNum": 41,
    "title": "Permutation",
    "description": "Given the given input, solve the permutation problem.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Stack",
      "Searching",
      "Backtracking"
    ],
    "link": "https://mocksite.com/problems/41",
    "relatedQuestions": []
  },
  {
    "_id": "42",
    "questionNum": 42,
    "title": "Common Subsequence in a Matrix",
    "description": "Given a matrix, find the common subsequence in the matrix.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Breadth-First Search",
      "Recursion",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/42",
    "relatedQuestions": []
  },
  {
    "_id": "43",
    "questionNum": 43,
    "title": "Triplet Sum",
    "description": "Given an array of integers, the task is to solve the triplet sum problem.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Hash Table",
      "Greedy",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/43",
    "relatedQuestions": []
  },
  {
    "_id": "44",
    "questionNum": 44,
    "title": "Path Sum",
    "description": "Given the given input, find the path sum.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Hash Table",
      "Searching",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/44",
    "relatedQuestions": []
  },
  {
    "_id": "45",
    "questionNum": 45,
    "title": "Distance Traversal",
    "description": "Given the given input, solve the distance traversal problem.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Greedy",
      "Hash Table",
      "Searching"
    ],
    "link": "https://mocksite.com/problems/45",
    "relatedQuestions": []
  },
  {
    "_id": "46",
    "questionNum": 46,
    "title": "Binary Tree Depth",
    "description": "Given a binary tree, find the binary tree depth.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Dynamic Programming",
      "Hash Table",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/46",
    "relatedQuestions": []
  },
  {
    "_id": "47",
    "questionNum": 47,
    "title": "Tree Diameter",
    "description": "Given a binary tree, find the tree diameter.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Divide and Conquer",
      "Recursion",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/47",
    "relatedQuestions": []
  },
  {
    "_id": "48",
    "questionNum": 48,
    "title": "Connected Components",
    "description": "Given a graph, find the number of connected components in the graph.",
    "difficulty": Difficulty.HARD,
    "tags": [
      "Math",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/48",
    "relatedQuestions": []
  },
  {
    "_id": "49",
    "questionNum": 49,
    "title": "Parenthesis Matching",
    "description": "Given a string, solve the parenthesis matching problem.",
    "difficulty": Difficulty.EASY,
    "tags": [
      "Searching",
      "Breadth-First Search",
      "Depth-First Search",
      "Stack"
    ],
    "link": "https://mocksite.com/problems/49",
    "relatedQuestions": []
  },
  {
    "_id": "50",
    "questionNum": 50,
    "title": "Island Count",
    "description": "Given a matrix, determine the number of islands (connected regions) in the matrix.",
    "difficulty": Difficulty.MEDIUM,
    "tags": [
      "Divide and Conquer",
      "Graph",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/50",
    "relatedQuestions": []
  }
]

export const MOCK_RELATIONSHIPS: QuestionRelationshipInterfaces[] = [
  {
    "_id": "1",
    "firstQuestionId": "1",
    "secondQuestionId": "5",
    "strength": 0.96
  },
  {
    "_id": "2",
    "firstQuestionId": "1",
    "secondQuestionId": "30",
    "strength": 0.54
  },
  {
    "_id": "3",
    "firstQuestionId": "1",
    "secondQuestionId": "44",
    "strength": 0.54
  },
  {
    "_id": "4",
    "firstQuestionId": "2",
    "secondQuestionId": "19",
    "strength": 0.97
  },
  {
    "_id": "5",
    "firstQuestionId": "2",
    "secondQuestionId": "26",
    "strength": 0.65
  },
  {
    "_id": "6",
    "firstQuestionId": "2",
    "secondQuestionId": "40",
    "strength": 0.96
  },
  {
    "_id": "7",
    "firstQuestionId": "3",
    "secondQuestionId": "31",
    "strength": 0.93
  },
  {
    "_id": "8",
    "firstQuestionId": "3",
    "secondQuestionId": "41",
    "strength": 0.73
  },
  {
    "_id": "9",
    "firstQuestionId": "3",
    "secondQuestionId": "48",
    "strength": 0.78
  },
  {
    "_id": "10",
    "firstQuestionId": "4",
    "secondQuestionId": "14",
    "strength": 0.59
  },
  {
    "_id": "11",
    "firstQuestionId": "4",
    "secondQuestionId": "27",
    "strength": 0.66
  },
  {
    "_id": "12",
    "firstQuestionId": "4",
    "secondQuestionId": "47",
    "strength": 0.61
  },
  {
    "_id": "13",
    "firstQuestionId": "5",
    "secondQuestionId": "6",
    "strength": 0.66
  },
  {
    "_id": "14",
    "firstQuestionId": "5",
    "secondQuestionId": "33",
    "strength": 0.96
  },
  {
    "_id": "15",
    "firstQuestionId": "5",
    "secondQuestionId": "48",
    "strength": 0.95
  },
  {
    "_id": "16",
    "firstQuestionId": "6",
    "secondQuestionId": "12",
    "strength": 0.96
  },
  {
    "_id": "17",
    "firstQuestionId": "6",
    "secondQuestionId": "39",
    "strength": 0.69
  },
  {
    "_id": "18",
    "firstQuestionId": "6",
    "secondQuestionId": "46",
    "strength": 0.88
  },
  {
    "_id": "19",
    "firstQuestionId": "7",
    "secondQuestionId": "16",
    "strength": 0.89
  },
  {
    "_id": "20",
    "firstQuestionId": "7",
    "secondQuestionId": "30",
    "strength": 0.58
  },
  {
    "_id": "21",
    "firstQuestionId": "7",
    "secondQuestionId": "45",
    "strength": 0.79
  },
  {
    "_id": "22",
    "firstQuestionId": "8",
    "secondQuestionId": "21",
    "strength": 0.95
  },
  {
    "_id": "23",
    "firstQuestionId": "8",
    "secondQuestionId": "39",
    "strength": 0.92
  },
  {
    "_id": "24",
    "firstQuestionId": "8",
    "secondQuestionId": "43",
    "strength": 0.71
  },
  {
    "_id": "25",
    "firstQuestionId": "9",
    "secondQuestionId": "18",
    "strength": 0.93
  },
  {
    "_id": "26",
    "firstQuestionId": "9",
    "secondQuestionId": "27",
    "strength": 0.52
  },
  {
    "_id": "27",
    "firstQuestionId": "9",
    "secondQuestionId": "29",
    "strength": 0.68
  },
  {
    "_id": "28",
    "firstQuestionId": "10",
    "secondQuestionId": "26",
    "strength": 0.84
  },
  {
    "_id": "29",
    "firstQuestionId": "10",
    "secondQuestionId": "37",
    "strength": 0.91
  },
  {
    "_id": "30",
    "firstQuestionId": "10",
    "secondQuestionId": "45",
    "strength": 0.88
  },
  {
    "_id": "31",
    "firstQuestionId": "11",
    "secondQuestionId": "27",
    "strength": 0.71
  },
  {
    "_id": "32",
    "firstQuestionId": "11",
    "secondQuestionId": "46",
    "strength": 0.57
  },
  {
    "_id": "33",
    "firstQuestionId": "11",
    "secondQuestionId": "49",
    "strength": 0.89
  },
  {
    "_id": "34",
    "firstQuestionId": "12",
    "secondQuestionId": "13",
    "strength": 0.62
  },
  {
    "_id": "35",
    "firstQuestionId": "12",
    "secondQuestionId": "43",
    "strength": 0.62
  },
  {
    "_id": "36",
    "firstQuestionId": "12",
    "secondQuestionId": "48",
    "strength": 0.8
  },
  {
    "_id": "37",
    "firstQuestionId": "13",
    "secondQuestionId": "24",
    "strength": 0.83
  },
  {
    "_id": "38",
    "firstQuestionId": "13",
    "secondQuestionId": "38",
    "strength": 0.7
  },
  {
    "_id": "39",
    "firstQuestionId": "13",
    "secondQuestionId": "44",
    "strength": 0.5
  },
  {
    "_id": "40",
    "firstQuestionId": "14",
    "secondQuestionId": "28",
    "strength": 0.98
  },
  {
    "_id": "41",
    "firstQuestionId": "14",
    "secondQuestionId": "31",
    "strength": 0.91
  },
  {
    "_id": "42",
    "firstQuestionId": "14",
    "secondQuestionId": "49",
    "strength": 0.72
  },
  {
    "_id": "43",
    "firstQuestionId": "15",
    "secondQuestionId": "28",
    "strength": 0.75
  },
  {
    "_id": "44",
    "firstQuestionId": "15",
    "secondQuestionId": "34",
    "strength": 0.72
  },
  {
    "_id": "45",
    "firstQuestionId": "15",
    "secondQuestionId": "38",
    "strength": 0.91
  },
  {
    "_id": "46",
    "firstQuestionId": "16",
    "secondQuestionId": "23",
    "strength": 0.53
  },
  {
    "_id": "47",
    "firstQuestionId": "16",
    "secondQuestionId": "26",
    "strength": 0.65
  },
  {
    "_id": "48",
    "firstQuestionId": "16",
    "secondQuestionId": "36",
    "strength": 0.9
  },
  {
    "_id": "49",
    "firstQuestionId": "17",
    "secondQuestionId": "34",
    "strength": 0.85
  },
  {
    "_id": "50",
    "firstQuestionId": "17",
    "secondQuestionId": "48",
    "strength": 0.74
  },
  {
    "_id": "51",
    "firstQuestionId": "18",
    "secondQuestionId": "35",
    "strength": 0.59
  },
  {
    "_id": "52",
    "firstQuestionId": "18",
    "secondQuestionId": "43",
    "strength": 0.61
  },
  {
    "_id": "53",
    "firstQuestionId": "18",
    "secondQuestionId": "46",
    "strength": 0.79
  },
  {
    "_id": "54",
    "firstQuestionId": "19",
    "secondQuestionId": "20",
    "strength": 0.7
  },
  {
    "_id": "55",
    "firstQuestionId": "19",
    "secondQuestionId": "25",
    "strength": 0.89
  },
  {
    "_id": "56",
    "firstQuestionId": "19",
    "secondQuestionId": "32",
    "strength": 0.8
  },
  {
    "_id": "57",
    "firstQuestionId": "20",
    "secondQuestionId": "22",
    "strength": 0.58
  },
  {
    "_id": "58",
    "firstQuestionId": "20",
    "secondQuestionId": "36",
    "strength": 0.82
  },
  {
    "_id": "59",
    "firstQuestionId": "20",
    "secondQuestionId": "43",
    "strength": 0.89
  },
  {
    "_id": "60",
    "firstQuestionId": "21",
    "secondQuestionId": "33",
    "strength": 0.67
  },
  {
    "_id": "61",
    "firstQuestionId": "21",
    "secondQuestionId": "45",
    "strength": 0.78
  },
  {
    "_id": "62",
    "firstQuestionId": "21",
    "secondQuestionId": "47",
    "strength": 0.69
  },
  {
    "_id": "63",
    "firstQuestionId": "22",
    "secondQuestionId": "24",
    "strength": 0.57
  },
  {
    "_id": "64",
    "firstQuestionId": "22",
    "secondQuestionId": "25",
    "strength": 0.71
  },
  {
    "_id": "65",
    "firstQuestionId": "22",
    "secondQuestionId": "41",
    "strength": 0.63
  },
  {
    "_id": "66",
    "firstQuestionId": "23",
    "secondQuestionId": "35",
    "strength": 0.93
  },
  {
    "_id": "67",
    "firstQuestionId": "23",
    "secondQuestionId": "40",
    "strength": 0.68
  },
  {
    "_id": "68",
    "firstQuestionId": "23",
    "secondQuestionId": "44",
    "strength": 0.7
  },
  {
    "_id": "69",
    "firstQuestionId": "24",
    "secondQuestionId": "34",
    "strength": 0.84
  },
  {
    "_id": "70",
    "firstQuestionId": "24",
    "secondQuestionId": "50",
    "strength": 0.66
  },
  {
    "_id": "71",
    "firstQuestionId": "25",
    "secondQuestionId": "42",
    "strength": 0.71
  },
  {
    "_id": "72",
    "firstQuestionId": "25",
    "secondQuestionId": "46",
    "strength": 0.84
  },
  {
    "_id": "73",
    "firstQuestionId": "26",
    "secondQuestionId": "42",
    "strength": 0.65
  },
  {
    "_id": "74",
    "firstQuestionId": "26",
    "secondQuestionId": "45",
    "strength": 0.83
  },
  {
    "_id": "75",
    "firstQuestionId": "27",
    "secondQuestionId": "32",
    "strength": 0.92
  },
  {
    "_id": "76",
    "firstQuestionId": "27",
    "secondQuestionId": "44",
    "strength": 0.63
  },
  {
    "_id": "77",
    "firstQuestionId": "28",
    "secondQuestionId": "32",
    "strength": 0.53
  },
  {
    "_id": "78",
    "firstQuestionId": "28",
    "secondQuestionId": "41",
    "strength": 0.96
  },
  {
    "_id": "79",
    "firstQuestionId": "29",
    "secondQuestionId": "30",
    "strength": 0.74
  },
  {
    "_id": "80",
    "firstQuestionId": "29",
    "secondQuestionId": "47",
    "strength": 0.83
  },
  {
    "_id": "81",
    "firstQuestionId": "30",
    "secondQuestionId": "37",
    "strength": 0.69
  },
  {
    "_id": "82",
    "firstQuestionId": "31",
    "secondQuestionId": "50",
    "strength": 0.92
  },
  {
    "_id": "83",
    "firstQuestionId": "32",
    "secondQuestionId": "36",
    "strength": 0.95
  },
  {
    "_id": "84",
    "firstQuestionId": "33",
    "secondQuestionId": "38",
    "strength": 0.79
  },
  {
    "_id": "85",
    "firstQuestionId": "33",
    "secondQuestionId": "50",
    "strength": 0.61
  },
  {
    "_id": "86",
    "firstQuestionId": "34",
    "secondQuestionId": "49",
    "strength": 0.97
  },
  {
    "_id": "87",
    "firstQuestionId": "35",
    "secondQuestionId": "39",
    "strength": 0.87
  },
  {
    "_id": "88",
    "firstQuestionId": "36",
    "secondQuestionId": "38",
    "strength": 0.82
  },
  {
    "_id": "89",
    "firstQuestionId": "37",
    "secondQuestionId": "50",
    "strength": 0.82
  },
  {
    "_id": "90",
    "firstQuestionId": "38",
    "secondQuestionId": "42",
    "strength": 0.64
  },
  {
    "_id": "91",
    "firstQuestionId": "39",
    "secondQuestionId": "40",
    "strength": 0.9
  },
  {
    "_id": "92",
    "firstQuestionId": "41",
    "secondQuestionId": "42",
    "strength": 0.78
  },
  {
    "_id": "93",
    "firstQuestionId": "43",
    "secondQuestionId": "44",
    "strength": 0.85
  },
  {
    "_id": "94",
    "firstQuestionId": "44",
    "secondQuestionId": "50",
    "strength": 0.53
  },
  {
    "_id": "95",
    "firstQuestionId": "45",
    "secondQuestionId": "47",
    "strength": 0.85
  },
  {
    "_id": "96",
    "firstQuestionId": "46",
    "secondQuestionId": "48",
    "strength": 0.76
  },
  {
    "_id": "97",
    "firstQuestionId": "47",
    "secondQuestionId": "48",
    "strength": 0.78
  },
  {
    "_id": "98",
    "firstQuestionId": "48",
    "secondQuestionId": "50",
    "strength": 0.61
  },
  {
    "_id": "99",
    "firstQuestionId": "49",
    "secondQuestionId": "50",
    "strength": 0.68
  },
  {
    "_id": "100",
    "firstQuestionId": "1",
    "secondQuestionId": "9",
    "strength": 0.85
  }
]

export const MOCK_MAPS: QuestionMap = {
  questions: cloneSimple(MOCK_QUESTIONS),
  relationships: cloneSimple(MOCK_RELATIONSHIPS),

  adjacencyList: {},
  adjacencyMatrix: {},
}