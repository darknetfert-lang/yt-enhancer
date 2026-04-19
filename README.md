# 📦 yt-enhancer

Simple CLI tool to apply text patches using JSON rules.

## 🚀 Quick start

```bash
node cli/patcher.js test.txt
node cli/patcher.js test.txt remove-ads
```

## 🚀 Features

- Apply multiple patches automatically
- Select a specific patch via CLI
- JSON-based rules (find & replace)

## 📦 Usage

Apply all patches:

node cli/patcher.js test.txt

Apply a specific patch:

node cli/patcher.js test.txt remove-ads

## 🧩 Patch format

Single rule:

{ "name": "Remove ads", "find": "ads", "replace": "" }

Multiple rules:

{
  "name": "Multi patch",
  "rules": [
    { "find": "ads", "replace": "" },
    { "find": "video", "replace": "clip" }
  ]
}

## 📁 Structure

cli/patcher.js
patches/*.json

## 💡 Example

Input:

This video has ads

Output:

This clip has

## 📜 License

MIT
