---
title: Github CLI templates
---


## Issues

Create an issue: 
`gh issue create --template bug_report`
Get the number: 
```gh issue list --limit 1 --state open```
Assign the issue to project: 
```gh project item-add --project <project_id> --url <issue_url>```

### Via script

Use e.g. `create_issue.sh`, then ensure is executable with `chmod +x create_issue.sh`, then run with `./create_issue.sh`

If working on windows you can create a batch file `.bat`.

## Metadata
