#!/bin/bash

echo "
Select the issue type:
1. fix: 🐛 A bug fix
2. feat: ✨ A new feature
3. chorse: 💀 Routine tasks and maintenance
4. docs: 📚 Documentation updates
5. style: 🎨 Code style changes (formatting, etc.)
6. refactor: 🔧 Code changes without fixing a bug or adding a feature
7. perf: 🚀 Performance improvements
8. test: ✅ Adding or improving tests
9. ci: ♻️ CI/CD related changes
"

read -p "Enter the issue type number (1-9): " type_choice

case $type_choice in
  1) type="fix: 🐛";;
  2) type="feat: ✨";;
  3) type="chorse: 💀";;
  4) type="docs: 📚";;
  5) type="style: 🎨";;
  6) type="refactor: 🔧";;
  7) type="perf: 🚀";;
  8) type="test: ✅";;
  9) type="ci: ♻️";;
  *) echo "Invalid choice, defaulting to fix: 🐛"; type="fix: 🐛";;
esac

# Set default values
title="Describe the issue briefly"
body="Steps to reproduce the issue:\n1. Step one\n2. Step two\nExpected behavior: Describe what you expected to happen.\nAdditional context: Add any other relevant information."
labels="${type}"
assignees=""
project_title="DWB_Quiz" # UPDATE 

read -p "Enter the issue title (or press enter to use default): " input_title
title=${input_title:-$title}

read -p "Enter the issue description (or press enter to use default template): " input_body
body=${input_body:-$body}

read -p "Enter the assignee (if applicable): " input_assignee
assignees=${input_assignee:-$assignees}

gh issue create \
  --title "$type $title" \
  --body "$body" \
  --assignee "$assignees" \
  --project "$project_title"

echo "Issue created with type '$type' and added to the project '$project_title'."

