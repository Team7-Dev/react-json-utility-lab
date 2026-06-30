# React JSON Utility Lab

A small React + TypeScript lab for working with JSON. The app lets you paste JSON, format it, minify it, copy it, clear it, and see validation errors.

## Features

- Paste or type JSON into a textarea
- Format JSON with indentationk- Minify JSON into a compact string
- Copy JSON to clipboard
- Clear the editor
- Show an error message for invalid JSON

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## What I Practiced

- React components
- Props
- `useState`
- Controlled textareas
- Event handlers
- Conditional rendering
- `JSON.parse`
- `JSON.stringify`
- Basic CSS styling

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build:

```
npm run preview
Project Structure
src/├── App.tsx
├── App.css
├── main.tsx
└── components/
    └── JsonInput.tsx
```

## Future Ideas

- Add JSON file upload
- Add saved snippets with localStorage
- Add JSON compare
- Add syntax highlighting
- Add TypeScript type generation from JSON
- Deploy to Azure Static Web Apps
