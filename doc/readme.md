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
