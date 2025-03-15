import { QuestionInterface, QuestionRelationshipInterfaces } from "../types/type"

export const MOCK_QUESTIONS: QuestionInterface = [
  {
    "_id": 1,
    "questionNum": 1,
    "title": "Two Sum Problem",
    "description": "Given an array of integers and a target, find two numbers that add up to the target value.",
    "difficulty": "EASY",
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
    "_id": 2,
    "questionNum": 2,
    "title": "Coin Change",
    "description": "Given a target amount and coin denominations, determine the minimum number of coins needed to make the target amount.",
    "difficulty": "MEDIUM",
    "tags": [
      "Dynamic Programming",
      "Depth-First Search",
      "Memoization"
    ],
    "link": "https://mocksite.com/problems/2",
    "relatedQuestions": []
  },
  {
    "_id": 3,
    "questionNum": 3,
    "title": "N-Queens Puzzle",
    "description": "Place N queens on an N×N chessboard so that no two queens attack each other.",
    "difficulty": "HARD",
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
    "_id": 4,
    "questionNum": 4,
    "title": "Sudoku Solver",
    "description": "Fill a 9x9 grid so that each row, column, and 3x3 subgrid contains all digits from 1 to 9.",
    "difficulty": "EASY",
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
    "_id": 5,
    "questionNum": 5,
    "title": "Knight's Tour",
    "description": "Find a sequence of moves for a knight on a chessboard such that the knight visits every square exactly once.",
    "difficulty": "MEDIUM",
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
    "_id": 6,
    "questionNum": 6,
    "title": "Prime Number Check",
    "description": "Determine whether a given number is prime.",
    "difficulty": "HARD",
    "tags": [
      "Hash Table",
      "Arrays",
      "Math"
    ],
    "link": "https://mocksite.com/problems/6",
    "relatedQuestions": []
  },
  {
    "_id": 7,
    "questionNum": 7,
    "title": "Palindrome Partitioning",
    "description": "Split a string into as few substrings as possible such that each substring is a palindrome.",
    "difficulty": "EASY",
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
    "_id": 8,
    "questionNum": 8,
    "title": "Graph Cycle Detection",
    "description": "Determine if a given graph contains a cycle.",
    "difficulty": "MEDIUM",
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
    "_id": 9,
    "questionNum": 9,
    "title": "Task Scheduling",
    "description": "Determine a valid order to execute a set of tasks given their dependencies.",
    "difficulty": "HARD",
    "tags": [
      "Graph",
      "Math"
    ],
    "link": "https://mocksite.com/problems/9",
    "relatedQuestions": []
  },
  {
    "_id": 10,
    "questionNum": 10,
    "title": "Valid Parentheses",
    "description": "Check if a given string of parentheses is well-formed and balanced.",
    "difficulty": "EASY",
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
    "_id": 11,
    "questionNum": 11,
    "title": "Merge Intervals",
    "description": "Merge all overlapping intervals in a given list of intervals.",
    "difficulty": "MEDIUM",
    "tags": [
      "Sorting",
      "Linked List",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/11",
    "relatedQuestions": []
  },
  {
    "_id": 12,
    "questionNum": 12,
    "title": "Word Ladder",
    "description": "Find the shortest transformation sequence from a start word to a target word given a dictionary of valid words.",
    "difficulty": "HARD",
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
    "_id": 13,
    "questionNum": 13,
    "title": "Trapping Rain Water",
    "description": "Compute how much water can be trapped between the bars given an elevation map.",
    "difficulty": "EASY",
    "tags": [
      "Breadth-First Search",
      "Backtracking",
      "Two Pointers"
    ],
    "link": "https://mocksite.com/problems/13",
    "relatedQuestions": []
  },
  {
    "_id": 14,
    "questionNum": 14,
    "title": "LRU Cache Implementation",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "difficulty": "MEDIUM",
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
    "_id": 15,
    "questionNum": 15,
    "title": "Median of Two Sorted Arrays",
    "description": "Find the median value given two sorted arrays of numbers.",
    "difficulty": "HARD",
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
    "_id": 16,
    "questionNum": 16,
    "title": "Rotate Matrix",
    "description": "Rotate a given N x N matrix by 90 degrees (clockwise).",
    "difficulty": "EASY",
    "tags": [
      "Greedy",
      "Breadth-First Search",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/16",
    "relatedQuestions": []
  },
  {
    "_id": 17,
    "questionNum": 17,
    "title": "Jump Game",
    "description": "Determine if you can reach the last index of an array given the maximum jump length from each position.",
    "difficulty": "MEDIUM",
    "tags": [
      "Hash Table",
      "Dynamic Programming",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/17",
    "relatedQuestions": []
  },
  {
    "_id": 18,
    "questionNum": 18,
    "title": "Sliding Window Maximum",
    "description": "For an array and window size k, find the maximum value in each contiguous subarray of length k.",
    "difficulty": "HARD",
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
    "_id": 19,
    "questionNum": 19,
    "title": "Longest Palindromic Substring",
    "description": "Find the longest substring of a given string that is a palindrome.",
    "difficulty": "EASY",
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
    "_id": 20,
    "questionNum": 20,
    "title": "Climbing Stairs",
    "description": "Count the number of distinct ways you can climb to the top of a staircase with n steps, taking 1 or 2 steps at a time.",
    "difficulty": "MEDIUM",
    "tags": [
      "Queue",
      "Dynamic Programming",
      "Hash Table"
    ],
    "link": "https://mocksite.com/problems/20",
    "relatedQuestions": []
  },
  {
    "_id": 21,
    "questionNum": 21,
    "title": "Spiral Matrix",
    "description": "Traverse and collect all elements of a matrix in spiral order.",
    "difficulty": "HARD",
    "tags": [
      "Sorting",
      "Greedy",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/21",
    "relatedQuestions": []
  },
  {
    "_id": 22,
    "questionNum": 22,
    "title": "Maximum Subarray Sum",
    "description": "Given an array of integers, the task is to find the maximum subarray sum.",
    "difficulty": "EASY",
    "tags": [
      "Recursion",
      "Divide and Conquer",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/22",
    "relatedQuestions": []
  },
  {
    "_id": 23,
    "questionNum": 23,
    "title": "Shortest Path in a Graph",
    "description": "Given a graph, find the shortest path in the graph.",
    "difficulty": "MEDIUM",
    "tags": [
      "Searching",
      "Dynamic Programming",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/23",
    "relatedQuestions": []
  },
  {
    "_id": 24,
    "questionNum": 24,
    "title": "Balanced Binary Tree Depth",
    "description": "Given a binary tree, find the balanced binary tree depth.",
    "difficulty": "HARD",
    "tags": [
      "Hash Table",
      "Graph",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/24",
    "relatedQuestions": []
  },
  {
    "_id": 25,
    "questionNum": 25,
    "title": "Optimal Schedule",
    "description": "Given the given input, solve the optimal schedule problem.",
    "difficulty": "EASY",
    "tags": [
      "Hash Table",
      "Tree",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/25",
    "relatedQuestions": []
  },
  {
    "_id": 26,
    "questionNum": 26,
    "title": "Unique Subsequence",
    "description": "Given the given input, solve the unique subsequence problem.",
    "difficulty": "MEDIUM",
    "tags": [
      "Greedy",
      "Sorting",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/26",
    "relatedQuestions": []
  },
  {
    "_id": 27,
    "questionNum": 27,
    "title": "Fastest Path",
    "description": "Given the given input, solve the fastest path problem.",
    "difficulty": "HARD",
    "tags": [
      "Linked List",
      "Greedy",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/27",
    "relatedQuestions": []
  },
  {
    "_id": 28,
    "questionNum": 28,
    "title": "Deepest Distance",
    "description": "Given the given input, find the deepest distance.",
    "difficulty": "EASY",
    "tags": [
      "Hash Table",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/28",
    "relatedQuestions": []
  },
  {
    "_id": 29,
    "questionNum": 29,
    "title": "Balanced Matching",
    "description": "Given the given input, solve the balanced matching problem.",
    "difficulty": "MEDIUM",
    "tags": [
      "Greedy",
      "Recursion",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/29",
    "relatedQuestions": []
  },
  {
    "_id": 30,
    "questionNum": 30,
    "title": "Circular Subarray Sum",
    "description": "Given an array of integers, find the circular subarray sum.",
    "difficulty": "HARD",
    "tags": [
      "Recursion",
      "Tree",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/30",
    "relatedQuestions": []
  },
  {
    "_id": 31,
    "questionNum": 31,
    "title": "Kth Largest Combination",
    "description": "Given the given input, find the kth largest combination.",
    "difficulty": "EASY",
    "tags": [
      "Linked List",
      "Recursion",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/31",
    "relatedQuestions": []
  },
  {
    "_id": 32,
    "questionNum": 32,
    "title": "Highest Order",
    "description": "Given the given input, solve the highest order problem.",
    "difficulty": "MEDIUM",
    "tags": [
      "Breadth-First Search",
      "Sorting",
      "Greedy"
    ],
    "link": "https://mocksite.com/problems/32",
    "relatedQuestions": []
  },
  {
    "_id": 33,
    "questionNum": 33,
    "title": "Optimal Path Sum",
    "description": "Given the given input, find the optimal path sum.",
    "difficulty": "HARD",
    "tags": [
      "Bit Manipulation",
      "Hash Table",
      "Dynamic Programming"
    ],
    "link": "https://mocksite.com/problems/33",
    "relatedQuestions": []
  },
  {
    "_id": 34,
    "questionNum": 34,
    "title": "Deepest Tree Diameter",
    "description": "Given a binary tree, find the deepest tree diameter.",
    "difficulty": "EASY",
    "tags": [
      "Divide and Conquer",
      "Greedy",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/34",
    "relatedQuestions": []
  },
  {
    "_id": 35,
    "questionNum": 35,
    "title": "Unique Combination",
    "description": "Given the given input, solve the unique combination problem.",
    "difficulty": "MEDIUM",
    "tags": [
      "Breadth-First Search",
      "Greedy",
      "Sorting"
    ],
    "link": "https://mocksite.com/problems/35",
    "relatedQuestions": []
  },
  {
    "_id": 36,
    "questionNum": 36,
    "title": "Fastest Route",
    "description": "Given the given input, solve the fastest route problem.",
    "difficulty": "HARD",
    "tags": [
      "Divide and Conquer",
      "Searching",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/36",
    "relatedQuestions": []
  },
  {
    "_id": 37,
    "questionNum": 37,
    "title": "Unique Path",
    "description": "Given the given input, solve the unique path problem.",
    "difficulty": "EASY",
    "tags": [
      "Searching",
      "Divide and Conquer",
      "Hash Table"
    ],
    "link": "https://mocksite.com/problems/37",
    "relatedQuestions": []
  },
  {
    "_id": 38,
    "questionNum": 38,
    "title": "Common Subsequence",
    "description": "Given the given input, find the common subsequence.",
    "difficulty": "MEDIUM",
    "tags": [
      "Math",
      "Dynamic Programming",
      "String"
    ],
    "link": "https://mocksite.com/problems/38",
    "relatedQuestions": []
  },
  {
    "_id": 39,
    "questionNum": 39,
    "title": "Path",
    "description": "Given the given input, solve the path problem.",
    "difficulty": "HARD",
    "tags": [
      "Queue",
      "Greedy",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/39",
    "relatedQuestions": []
  },
  {
    "_id": 40,
    "questionNum": 40,
    "title": "Distance",
    "description": "Given the given input, solve the distance problem.",
    "difficulty": "EASY",
    "tags": [
      "Stack",
      "Searching",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/40",
    "relatedQuestions": []
  },
  {
    "_id": 41,
    "questionNum": 41,
    "title": "Permutation",
    "description": "Given the given input, solve the permutation problem.",
    "difficulty": "MEDIUM",
    "tags": [
      "Stack",
      "Searching",
      "Backtracking"
    ],
    "link": "https://mocksite.com/problems/41",
    "relatedQuestions": []
  },
  {
    "_id": 42,
    "questionNum": 42,
    "title": "Common Subsequence in a Matrix",
    "description": "Given a matrix, find the common subsequence in the matrix.",
    "difficulty": "HARD",
    "tags": [
      "Breadth-First Search",
      "Recursion",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/42",
    "relatedQuestions": []
  },
  {
    "_id": 43,
    "questionNum": 43,
    "title": "Triplet Sum",
    "description": "Given an array of integers, the task is to solve the triplet sum problem.",
    "difficulty": "EASY",
    "tags": [
      "Hash Table",
      "Greedy",
      "Arrays"
    ],
    "link": "https://mocksite.com/problems/43",
    "relatedQuestions": []
  },
  {
    "_id": 44,
    "questionNum": 44,
    "title": "Path Sum",
    "description": "Given the given input, find the path sum.",
    "difficulty": "MEDIUM",
    "tags": [
      "Hash Table",
      "Searching",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/44",
    "relatedQuestions": []
  },
  {
    "_id": 45,
    "questionNum": 45,
    "title": "Distance Traversal",
    "description": "Given the given input, solve the distance traversal problem.",
    "difficulty": "HARD",
    "tags": [
      "Greedy",
      "Hash Table",
      "Searching"
    ],
    "link": "https://mocksite.com/problems/45",
    "relatedQuestions": []
  },
  {
    "_id": 46,
    "questionNum": 46,
    "title": "Binary Tree Depth",
    "description": "Given a binary tree, find the binary tree depth.",
    "difficulty": "EASY",
    "tags": [
      "Dynamic Programming",
      "Hash Table",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/46",
    "relatedQuestions": []
  },
  {
    "_id": 47,
    "questionNum": 47,
    "title": "Tree Diameter",
    "description": "Given a binary tree, find the tree diameter.",
    "difficulty": "MEDIUM",
    "tags": [
      "Divide and Conquer",
      "Recursion",
      "Tree"
    ],
    "link": "https://mocksite.com/problems/47",
    "relatedQuestions": []
  },
  {
    "_id": 48,
    "questionNum": 48,
    "title": "Connected Components",
    "description": "Given a graph, find the number of connected components in the graph.",
    "difficulty": "HARD",
    "tags": [
      "Math",
      "Graph"
    ],
    "link": "https://mocksite.com/problems/48",
    "relatedQuestions": []
  },
  {
    "_id": 49,
    "questionNum": 49,
    "title": "Parenthesis Matching",
    "description": "Given a string, solve the parenthesis matching problem.",
    "difficulty": "EASY",
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
    "_id": 50,
    "questionNum": 50,
    "title": "Island Count",
    "description": "Given a matrix, determine the number of islands (connected regions) in the matrix.",
    "difficulty": "MEDIUM",
    "tags": [
      "Divide and Conquer",
      "Graph",
      "Matrix"
    ],
    "link": "https://mocksite.com/problems/50",
    "relatedQuestions": []
  }
]

export const MOCK_RELATIONSHIPS: QuestionRelationshipInterfaces = [
  {
    "_id": 1,
    "questionA": 1,
    "questionB": 5,
    "relationStrength": 0.96
  },
  {
    "_id": 2,
    "questionA": 1,
    "questionB": 30,
    "relationStrength": 0.54
  },
  {
    "_id": 3,
    "questionA": 1,
    "questionB": 44,
    "relationStrength": 0.54
  },
  {
    "_id": 4,
    "questionA": 2,
    "questionB": 19,
    "relationStrength": 0.97
  },
  {
    "_id": 5,
    "questionA": 2,
    "questionB": 26,
    "relationStrength": 0.65
  },
  {
    "_id": 6,
    "questionA": 2,
    "questionB": 40,
    "relationStrength": 0.96
  },
  {
    "_id": 7,
    "questionA": 3,
    "questionB": 31,
    "relationStrength": 0.93
  },
  {
    "_id": 8,
    "questionA": 3,
    "questionB": 41,
    "relationStrength": 0.73
  },
  {
    "_id": 9,
    "questionA": 3,
    "questionB": 48,
    "relationStrength": 0.78
  },
  {
    "_id": 10,
    "questionA": 4,
    "questionB": 14,
    "relationStrength": 0.59
  },
  {
    "_id": 11,
    "questionA": 4,
    "questionB": 27,
    "relationStrength": 0.66
  },
  {
    "_id": 12,
    "questionA": 4,
    "questionB": 47,
    "relationStrength": 0.61
  },
  {
    "_id": 13,
    "questionA": 5,
    "questionB": 6,
    "relationStrength": 0.66
  },
  {
    "_id": 14,
    "questionA": 5,
    "questionB": 33,
    "relationStrength": 0.96
  },
  {
    "_id": 15,
    "questionA": 5,
    "questionB": 48,
    "relationStrength": 0.95
  },
  {
    "_id": 16,
    "questionA": 6,
    "questionB": 12,
    "relationStrength": 0.96
  },
  {
    "_id": 17,
    "questionA": 6,
    "questionB": 39,
    "relationStrength": 0.69
  },
  {
    "_id": 18,
    "questionA": 6,
    "questionB": 46,
    "relationStrength": 0.88
  },
  {
    "_id": 19,
    "questionA": 7,
    "questionB": 16,
    "relationStrength": 0.89
  },
  {
    "_id": 20,
    "questionA": 7,
    "questionB": 30,
    "relationStrength": 0.58
  },
  {
    "_id": 21,
    "questionA": 7,
    "questionB": 45,
    "relationStrength": 0.79
  },
  {
    "_id": 22,
    "questionA": 8,
    "questionB": 21,
    "relationStrength": 0.95
  },
  {
    "_id": 23,
    "questionA": 8,
    "questionB": 39,
    "relationStrength": 0.92
  },
  {
    "_id": 24,
    "questionA": 8,
    "questionB": 43,
    "relationStrength": 0.71
  },
  {
    "_id": 25,
    "questionA": 9,
    "questionB": 18,
    "relationStrength": 0.93
  },
  {
    "_id": 26,
    "questionA": 9,
    "questionB": 27,
    "relationStrength": 0.52
  },
  {
    "_id": 27,
    "questionA": 9,
    "questionB": 29,
    "relationStrength": 0.68
  },
  {
    "_id": 28,
    "questionA": 10,
    "questionB": 26,
    "relationStrength": 0.84
  },
  {
    "_id": 29,
    "questionA": 10,
    "questionB": 37,
    "relationStrength": 0.91
  },
  {
    "_id": 30,
    "questionA": 10,
    "questionB": 45,
    "relationStrength": 0.88
  },
  {
    "_id": 31,
    "questionA": 11,
    "questionB": 27,
    "relationStrength": 0.71
  },
  {
    "_id": 32,
    "questionA": 11,
    "questionB": 46,
    "relationStrength": 0.57
  },
  {
    "_id": 33,
    "questionA": 11,
    "questionB": 49,
    "relationStrength": 0.89
  },
  {
    "_id": 34,
    "questionA": 12,
    "questionB": 13,
    "relationStrength": 0.62
  },
  {
    "_id": 35,
    "questionA": 12,
    "questionB": 43,
    "relationStrength": 0.62
  },
  {
    "_id": 36,
    "questionA": 12,
    "questionB": 48,
    "relationStrength": 0.8
  },
  {
    "_id": 37,
    "questionA": 13,
    "questionB": 24,
    "relationStrength": 0.83
  },
  {
    "_id": 38,
    "questionA": 13,
    "questionB": 38,
    "relationStrength": 0.7
  },
  {
    "_id": 39,
    "questionA": 13,
    "questionB": 44,
    "relationStrength": 0.5
  },
  {
    "_id": 40,
    "questionA": 14,
    "questionB": 28,
    "relationStrength": 0.98
  },
  {
    "_id": 41,
    "questionA": 14,
    "questionB": 31,
    "relationStrength": 0.91
  },
  {
    "_id": 42,
    "questionA": 14,
    "questionB": 49,
    "relationStrength": 0.72
  },
  {
    "_id": 43,
    "questionA": 15,
    "questionB": 28,
    "relationStrength": 0.75
  },
  {
    "_id": 44,
    "questionA": 15,
    "questionB": 34,
    "relationStrength": 0.72
  },
  {
    "_id": 45,
    "questionA": 15,
    "questionB": 38,
    "relationStrength": 0.91
  },
  {
    "_id": 46,
    "questionA": 16,
    "questionB": 23,
    "relationStrength": 0.53
  },
  {
    "_id": 47,
    "questionA": 16,
    "questionB": 26,
    "relationStrength": 0.65
  },
  {
    "_id": 48,
    "questionA": 16,
    "questionB": 36,
    "relationStrength": 0.9
  },
  {
    "_id": 49,
    "questionA": 17,
    "questionB": 34,
    "relationStrength": 0.85
  },
  {
    "_id": 50,
    "questionA": 17,
    "questionB": 48,
    "relationStrength": 0.74
  },
  {
    "_id": 51,
    "questionA": 18,
    "questionB": 35,
    "relationStrength": 0.59
  },
  {
    "_id": 52,
    "questionA": 18,
    "questionB": 43,
    "relationStrength": 0.61
  },
  {
    "_id": 53,
    "questionA": 18,
    "questionB": 46,
    "relationStrength": 0.79
  },
  {
    "_id": 54,
    "questionA": 19,
    "questionB": 20,
    "relationStrength": 0.7
  },
  {
    "_id": 55,
    "questionA": 19,
    "questionB": 25,
    "relationStrength": 0.89
  },
  {
    "_id": 56,
    "questionA": 19,
    "questionB": 32,
    "relationStrength": 0.8
  },
  {
    "_id": 57,
    "questionA": 20,
    "questionB": 22,
    "relationStrength": 0.58
  },
  {
    "_id": 58,
    "questionA": 20,
    "questionB": 36,
    "relationStrength": 0.82
  },
  {
    "_id": 59,
    "questionA": 20,
    "questionB": 43,
    "relationStrength": 0.89
  },
  {
    "_id": 60,
    "questionA": 21,
    "questionB": 33,
    "relationStrength": 0.67
  },
  {
    "_id": 61,
    "questionA": 21,
    "questionB": 45,
    "relationStrength": 0.78
  },
  {
    "_id": 62,
    "questionA": 21,
    "questionB": 47,
    "relationStrength": 0.69
  },
  {
    "_id": 63,
    "questionA": 22,
    "questionB": 24,
    "relationStrength": 0.57
  },
  {
    "_id": 64,
    "questionA": 22,
    "questionB": 25,
    "relationStrength": 0.71
  },
  {
    "_id": 65,
    "questionA": 22,
    "questionB": 41,
    "relationStrength": 0.63
  },
  {
    "_id": 66,
    "questionA": 23,
    "questionB": 35,
    "relationStrength": 0.93
  },
  {
    "_id": 67,
    "questionA": 23,
    "questionB": 40,
    "relationStrength": 0.68
  },
  {
    "_id": 68,
    "questionA": 23,
    "questionB": 44,
    "relationStrength": 0.7
  },
  {
    "_id": 69,
    "questionA": 24,
    "questionB": 34,
    "relationStrength": 0.84
  },
  {
    "_id": 70,
    "questionA": 24,
    "questionB": 50,
    "relationStrength": 0.66
  },
  {
    "_id": 71,
    "questionA": 25,
    "questionB": 42,
    "relationStrength": 0.71
  },
  {
    "_id": 72,
    "questionA": 25,
    "questionB": 46,
    "relationStrength": 0.84
  },
  {
    "_id": 73,
    "questionA": 26,
    "questionB": 42,
    "relationStrength": 0.65
  },
  {
    "_id": 74,
    "questionA": 26,
    "questionB": 45,
    "relationStrength": 0.83
  },
  {
    "_id": 75,
    "questionA": 27,
    "questionB": 32,
    "relationStrength": 0.92
  },
  {
    "_id": 76,
    "questionA": 27,
    "questionB": 44,
    "relationStrength": 0.63
  },
  {
    "_id": 77,
    "questionA": 28,
    "questionB": 32,
    "relationStrength": 0.53
  },
  {
    "_id": 78,
    "questionA": 28,
    "questionB": 41,
    "relationStrength": 0.96
  },
  {
    "_id": 79,
    "questionA": 29,
    "questionB": 30,
    "relationStrength": 0.74
  },
  {
    "_id": 80,
    "questionA": 29,
    "questionB": 47,
    "relationStrength": 0.83
  },
  {
    "_id": 81,
    "questionA": 30,
    "questionB": 37,
    "relationStrength": 0.69
  },
  {
    "_id": 82,
    "questionA": 31,
    "questionB": 50,
    "relationStrength": 0.92
  },
  {
    "_id": 83,
    "questionA": 32,
    "questionB": 36,
    "relationStrength": 0.95
  },
  {
    "_id": 84,
    "questionA": 33,
    "questionB": 38,
    "relationStrength": 0.79
  },
  {
    "_id": 85,
    "questionA": 33,
    "questionB": 50,
    "relationStrength": 0.61
  },
  {
    "_id": 86,
    "questionA": 34,
    "questionB": 49,
    "relationStrength": 0.97
  },
  {
    "_id": 87,
    "questionA": 35,
    "questionB": 39,
    "relationStrength": 0.87
  },
  {
    "_id": 88,
    "questionA": 36,
    "questionB": 38,
    "relationStrength": 0.82
  },
  {
    "_id": 89,
    "questionA": 37,
    "questionB": 50,
    "relationStrength": 0.82
  },
  {
    "_id": 90,
    "questionA": 38,
    "questionB": 42,
    "relationStrength": 0.64
  },
  {
    "_id": 91,
    "questionA": 39,
    "questionB": 40,
    "relationStrength": 0.9
  },
  {
    "_id": 92,
    "questionA": 41,
    "questionB": 42,
    "relationStrength": 0.78
  },
  {
    "_id": 93,
    "questionA": 43,
    "questionB": 44,
    "relationStrength": 0.85
  },
  {
    "_id": 94,
    "questionA": 44,
    "questionB": 50,
    "relationStrength": 0.53
  },
  {
    "_id": 95,
    "questionA": 45,
    "questionB": 47,
    "relationStrength": 0.85
  },
  {
    "_id": 96,
    "questionA": 46,
    "questionB": 48,
    "relationStrength": 0.76
  },
  {
    "_id": 97,
    "questionA": 47,
    "questionB": 48,
    "relationStrength": 0.78
  },
  {
    "_id": 98,
    "questionA": 48,
    "questionB": 50,
    "relationStrength": 0.61
  },
  {
    "_id": 99,
    "questionA": 49,
    "questionB": 50,
    "relationStrength": 0.68
  },
  {
    "_id": 100,
    "questionA": 1,
    "questionB": 9,
    "relationStrength": 0.85
  }
]

