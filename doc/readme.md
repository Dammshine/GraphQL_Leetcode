## Step 1: Acquire Leetcode Data

### 1.1 What We Need to Store

1. **Question Data**
   * **ID** (unique identifier, leetcode question numnber)
   * **Title** (e.g., “Two Sum”)
   * **Description**
   * **Difficulty** (e.g., “Easy,” “Medium,” “Hard”)
   * **Tags** (concepts and categories, e.g., “Arrays,” “DP,” “Graphs,” etc.)
   * **LinkURL** (direct URL to the LeetCode question)
   * **Related Questions** (other questions that share concepts, or are logically connected. By Leetcode website)
2. **User Data**
   * **ID** (unique user identifier)
   * **Username**
   * **Performance** : a list of concepts or “tags” with an associated score (reflecting the user’s skill level in that concept).
3. **Relationships**
   * Each question can relate to multiple other questions (N:N relationship).

### 1.2 Data Storage Approach

* **Core Database**
  * Could be a **Relational DB** (e.g., PostgreSQL) or a **Graph DB** (e.g., Neo4j).
  * For a proof-of-concept, a relational model with bridging tables is sufficient. For more advanced queries on question-to-question relationships, a graph database offers more flexibility.
* **GraphQL Layer**
  * We use a **GraphQL** API to surface the stored data to the frontend.
  * This allows the frontend to fetch only the exact fields needed (e.g., if we only need `title` and `link`, we can just query those fields).
* **Data Ingestion / Python Scripts**
  * Python scripts (or microservices) can collect data from LeetCode, compute embeddings for AI-driven relationships, and update the database.
  * This is typically run offline or on a schedule to keep the question set and relationships current.

## 2. Sample JSON Structures

This provide a sample JSON structure for what we like to acquire from Python parser, and used to convert to our GraphQL representation.

```python
{
  "_id": 1,
  "questionNum": 1,
  "title": "Two Sum",
  "description": "This is a very simple example",
  "difficulty": "EASY",
  "tags": ["Arrays", "Hash Table"],
  "link": "https://leetcode.com/problems/two-sum",
  "relatedQuestions": [112,2,13]
}
```

```user
{
  "_id": "u1234",
  "username": "john_doe",
  "completeQuestionIds": [
    1,2,3
  ],
  "attemptedQuestionIds": [
    4
  ],
  "performance": [
    { "tag": "Arrays", "score": 65 },
    { "tag": "Hash Table", "score": 45 },
    { "tag": "Dynamic Programming", "score": 30 }
  ]
}
```

```Relationship
{
  "_id": "<some-generated-id>",
  "questionA": 1,
  "questionB": 5,
  "relationStrength": 0.85
}
```


## 1. Spider Chart of Skills

**User Goal:**
“As a user, I want to easily understand my strengths and weaknesses across various coding concepts, so I can decide which areas I need to practice the most.”

**Key Features:**

* **Radar/Spider Chart**
  * On login, the app fetches the user’s performance data (e.g., skill scores for `Arrays`, `Dynamic Programming`, etc.) from GraphQL.
  * Displays a radar chart where each axis represents a concept/tag.
  * The user can visually compare their strongest and weakest areas at a glance.
* **Seamless Data Fetch**
  * Pull the user’s `performance` array from the backend (`User.performance`).
  * Render it in a user-friendly chart library (e.g., Chart.js, Recharts, etc.).

---

## 2. Recommendation Flow

**User Goal:**
“As a user, I want to receive personalized question recommendations that target my weaker skills, so I can improve efficiently.”

**Key Features:**

1. **Identifying Weaker Skills**
   * The system interprets the radar chart (or `performance` data) to highlight low scores.
   * Allows the user to select a concept (e.g., `DYNAMIC_PROGRAMMING`) that they wish to improve.
2. **Fetching Recommended Questions**
   * On selection of a weak area, the frontend calls a GraphQL query (e.g., `recommendedQuestions(userId, tag)`).
   * Returns a list of question suggestions that target that concept, factoring in difficulty level or user preference.
3. **Question Display**
   * For each recommended question, show:
     * **Title**
     * **Difficulty**
     * **Link** to LeetCode
     * **Tags**
   * Optionally show a short description or the user’s historical attempt data (e.g., if previously attempted).

---

## 3. Graph Visualization (“Like Canva”)

**User Goal:**
“As a user, I want to see how questions are related and navigate between them in an intuitive, visual map, so I can explore relevant or prerequisite questions without guesswork.”

**Key Features:**

1. **Interactive Graph Layout**
   * **Nodes** represent individual LeetCode questions.
   * **Edges** indicate conceptual relationships (shared tags, similar difficulty, or AI-driven similarity).
2. **Pan, Zoom, and Drag**
   * Users can **drag** the canvas,  **zoom in/out** , and **reposition** question nodes, making it feel like a design tool (similar to Canva).
   * This allows for flexible exploration without being locked into a rigid UI.
3. **Clickable Nodes**
   * Clicking on a node (a question) opens a **side panel** or **modal** with:
     * Title, difficulty, tags
     * Direct link to solve it on LeetCode
     * Possibly the user’s performance in related tags (e.g., “DP Score: 30/100”)
   * Helps the user decide quickly if they want to attempt that question.
4. **Discovering Related Content**
   * Because each question node visually connects to its neighbors, the user sees a bigger picture of how questions cluster by concept.
   * Encourages exploring adjacent or prerequisite problems.

---

## 4. Typical User Flow

1. **Login**
   * The user signs in, and the frontend pulls the user’s data (`User` type from GraphQL).
2. **Spider Chart**
   * Immediately, the user sees a radar chart of their performance scores for different tags (e.g., `Arrays`, `Hash Table`, `Dynamic Programming`).
3. **Focus on a Weak Area**
   * The user picks the concept with the lowest score (e.g., `Dynamic Programming`) or simply clicks a “Recommend me questions” button for that concept.
4. **Receive List**
   * A list of recommended questions appears. Each question can be clicked to open a “map view” or can be navigated directly.
5. **Graph Exploration**
   * The user opens the interactive graph:
     * Pans/zooms around.
     * Sees how each recommended question links to other related questions.
     * Clicks a question node to open details in a side panel.
6. **Solve and Update**
   * The user clicks a **link** to LeetCode and solves the question.
   * After finishing, the user returns to the app, which **updates their performance data** via a GraphQL mutation (e.g., `updateUserPerformance`).
   * The spider chart and recommendations are refreshed accordingly.
