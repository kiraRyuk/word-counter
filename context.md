# AI Context File

Project: Word Counter

---

# Project Name

**Word Counter**

A lightweight web application that analyzes text and displays statistics such as word count, character count, sentence count, and paragraph count.

---

# Project Vision

Provide students, writers, teachers, and professionals with a fast and simple way to analyze written content by typing, pasting, or uploading text files.

---

# Tech Stack

## Framework

* AstroJS
* TypeScript

## Styling

* Tailwind CSS

## Deployment

* Vercel
* Netlify

## State Management

* Local component state only
* No external state management libraries

## Package Manager

* npm

---

# Folder Structure

```text
word-counter/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── TextArea.astro
│   │   ├── FileUploader.astro
│   │   ├── StatsCard.astro
│   │   ├── StatsGrid.astro
│   │   ├── ActionButtons.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   ├── statistics.ts
│   │   ├── textParser.ts
│   │   └── fileReader.ts
│   │
│   └── types/
│       └── statistics.ts
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── AI_CONTEXT.md
```

---

# Business Rules

## Text Input

* Users can type directly into the textarea.
* Users can paste text into the textarea.
* Statistics update immediately after text changes.

---

## File Upload

* Only `.txt` files are supported.
* Uploaded file contents populate the textarea.
* Invalid files display an error message.
* File reading failures must be handled gracefully.

---

## Word Counting Rules

* Words are separated by whitespace.
* Multiple spaces count as one separator.
* Leading and trailing spaces are ignored.
* Empty input returns `0`.

Example:

```text
"Hello world" = 2 words
"  Hello    world  " = 2 words
"" = 0 words
```

---

## Character Counting Rules

### Characters Including Spaces

Count every character.

Example:

```text
"Hello World" = 11
```

### Characters Excluding Spaces

Ignore spaces.

Example:

```text
"Hello World" = 10
```

---

## Sentence Counting Rules

Sentences end with:

* `.`
* `!`
* `?`

Example:

```text
"Hello." = 1
"Hello! How are you?" = 2
```

Empty input:

```text
0 sentences
```

---

## Paragraph Counting Rules

Paragraphs are separated by one or more blank lines.

Example:

```text
Paragraph One

Paragraph Two
```

Result:

```text
2 paragraphs
```

Empty input:

```text
0 paragraphs
```

---

## Clear Action

The Clear button must:

* Empty the textarea
* Reset all statistics to `0`
* Remove error messages

---

# UI Requirements

## Layout

* Single-page application
* Responsive design
* Mobile-first approach

---

## Statistics Section

Display:

* Words
* Characters
* Characters (No Spaces)
* Sentences
* Paragraphs

Each metric should be displayed inside a reusable statistics card.

---

## Responsive Behavior

### Mobile

* Single-column layout
* Full-width controls

### Tablet

* Two-column statistics grid

### Desktop

* Centered container
* Multi-column statistics grid

---

# Accessibility Requirements

* Use semantic HTML.
* All form controls must have labels.
* Keyboard navigation must work.
* Interactive elements require visible focus states.
* Color contrast should meet accessibility standards.

---

# Coding Standards

## General Rules

* Use TypeScript everywhere possible.
* Prefer functional and reusable components.
* Keep components small and focused.
* Avoid duplicate code.
* Write self-documenting code.
* Use descriptive names.

---

## Naming Conventions

### Components

PascalCase

```text
Header.astro
StatsCard.astro
FileUploader.astro
```

### Utilities

camelCase

```text
statistics.ts
fileReader.ts
textParser.ts
```

### Functions

camelCase

```ts
getWordCount()
getSentenceCount()
readTextFile()
getTextStatistics()
```

### Variables

camelCase

```ts
textContent
wordCount
statistics
fileContent
```

### Constants

UPPER_SNAKE_CASE

```ts
MAX_FILE_SIZE
SUPPORTED_FILE_TYPES
```

---

# Component Principles

## Components should:

* Have one responsibility.
* Receive data via props.
* Be reusable.
* Avoid business logic when possible.

## Business logic should live inside:

* `src/utils`
* `src/types`

---

# Utility Principles

Utility functions must:

* Be pure functions whenever possible.
* Avoid DOM manipulation.
* Be independently testable.
* Return predictable values.

Example:

```ts
getWordCount(text: string): number
getSentenceCount(text: string): number
getTextStatistics(text: string): TextStatistics
```

---

# Error Handling

Never allow application crashes.

Return safe defaults:

```ts
0
''
[]
{}
```

Display friendly messages:

```text
Only .txt files are supported.
Unable to read the selected file.
```

---

# Performance Guidelines

* Recalculate statistics only when text changes.
* Avoid unnecessary re-renders.
* Avoid large dependencies.
* Keep bundle size small.
* Prefer native browser APIs.

---

# Definition of Done

A feature is complete when:

✓ TypeScript has no errors

✓ Responsive on mobile, tablet, and desktop

✓ Accessibility requirements are met

✓ Error states are handled

✓ Components are reusable

✓ Business rules are respected

✓ No duplicated logic exists

✓ Production build succeeds

✓ Code is readable and maintainable
