import pandas as pd


def csv_to_json(csv_file, json_file, selected_columns, rename_mapping):
    # Read CSV with selected columns
    df = pd.read_csv(csv_file, usecols=selected_columns)

    # Rename columns
    df = df.rename(columns=rename_mapping)

    # duplicate id column as questionNum
    df.insert(df.columns.get_loc("id") + 1, "questionNum", df["id"])

    # Convert to JSON
    df.to_json(json_file, orient="records", indent=4)


csv_file = "leetcode_dataset.csv"
json_file = "leetcode_dataset.json"


selected_columns = [
    "id",
    "title",
    "description",
    "difficulty",
    "related_topics",
    "url",
    "similar_questions",
]

rename_mapping = {
    "related_topics": "tags",
    "url": "link",
    "similar_questions": "relatedQuestions",
}

csv_to_json(csv_file, json_file, selected_columns, rename_mapping)
