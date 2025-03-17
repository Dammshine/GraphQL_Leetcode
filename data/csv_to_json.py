import pandas as pd
import re


def extract_question_ids(similar_questions, title_to_id):
    """
    Converts question titles in `similar_questions` into their respective IDs.
    """
    if pd.isna(similar_questions):
        return []
    
    # Extract titles from the format "[Title, /problems/url/, Difficulty]"
    titles = re.findall(r"\[([^,]+),", similar_questions)

    # Map titles to their corresponding IDs
    question_ids = [title_to_id[title] for title in titles if title in title_to_id]

    return question_ids  # Returns a list of IDs

def csv_to_json(csv_file, json_file, selected_columns, rename_mapping):
    # Read CSV with selected columns
    df = pd.read_csv(csv_file, usecols=selected_columns)

    # Rename columns
    df = df.rename(columns=rename_mapping)

    # duplicate id column as questionNum
    df.insert(df.columns.get_loc("id") + 1, "questionNum", df["id"])
    
    title_to_id = df.set_index("title")["id"].to_dict()
    df["relatedQuestions"] = df["relatedQuestions"].apply(lambda x: extract_question_ids(x, title_to_id))

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
