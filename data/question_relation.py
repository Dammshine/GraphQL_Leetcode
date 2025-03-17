import json 
import uuid

# Step 1: Read the JSON file containing question data.
# Step 2: Create a mapping of {id: {tags, difficulty}} for quick lookup.
# Step 3: Iterate over relatedQuestions for each question to compute relationships.
# Step 4: Store relationships uniquely (avoid duplicates like (A, B) and (B, A)).
# Step 5: Save the relationships in a separate JSON file.


# Difficulty factor: A weight applied based on the difficulty difference:
# Same difficulty → 1.0
# One level apart (Easy → Medium, Medium → Hard) → 0.85
# Two levels apart (Easy → Hard) → 0.7
def difficulty_factor(diff1, diff2):
    difficulty_levels = {"Easy": 0, "Medium": 1, "Hard": 2}
    
    diff1_level = difficulty_levels[diff1]
    diff2_level = difficulty_levels[diff2]
    
    diff_gap = abs(diff1_level - diff2_level)
    
    if diff_gap == 0:
      return 1.0
    elif diff_gap == 1:
      return 0.85
    
    return 0.7


def compute_relation_strength(tags1, tags2, diff1, diff2):
  set1 = set(tags1.split(','))
  set2 = set(tags2.split(','))
  
  shared_tags = len(set1 & set2)
  total_tags = len(set1 | set2)
  
  if total_tags == 0:
    return 0
  
  tag_similarity = shared_tags / total_tags
  diff_factor = difficulty_factor(diff1, diff2)

  return round(tag_similarity * diff_factor, 3)
  

def generate_relationships(question_data, output_file):
  relationships = []
  seen_pairs = set()
  
  question_lookup = {q["id"]: q for q in question_data}
  
  for q in question_data:
    question_id = q["id"]
    tags = q["tags"]
    difficulty = q["difficulty"]
  
  return