# Word Counter

## Implementation Plan & Task Breakdown

### Tech Stack

* Framework: AstroJS
* Styling: Tailwind CSS
* Language: TypeScript
* Deployment: Vercel or Netlify
* State Management: Local component state (no external library required)

---

# Project Structure

```
word-counter/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── TextArea.astro
│   │   ├── FileUploader.astro
│   │   ├── StatsCard.astro
│   │   ├── StatsGrid.astro
│   │   ├── ActionButtons.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── textParser.ts
│   │   ├── fileReader.ts
│   │   └── statistics.ts
│   └── types/
│       └── statistics.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

# Phase 1: Project Setup

## Task 1.1: Initialize Project

### Acceptance Criteria

* Astro project created
* Tailwind configured
* TypeScript enabled
* Development server runs successfully

### Commands

```bash
npm create astro@latest
cd word-counter
npx astro add tailwind
npm install
npm run dev
```

---

# Phase 2: Define Types

## Task 2.1: Create Statistics Type

### File

```
src/types/statistics.ts
```

### Interface

```ts
export interface TextStatistics {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
}
```

### Acceptance Criteria

* Interface exported
* Used across application

---

# Phase 3: Build Utility Functions

## Task 3.1: Word Counter

### File

```
src/utils/statistics.ts
```

### Responsibilities

* Count words
* Ignore extra spaces
* Handle empty input

### Acceptance Criteria

Input:

```
Hello world
```

Output:

```
2 words
```

---

## Task 3.2: Character Counter

### Responsibilities

Calculate:

* Characters including spaces
* Characters excluding spaces

### Example

Input:

```
Hello World
```

Output:

```
Characters: 11
Characters No Spaces: 10
```

---

## Task 3.3: Sentence Counter

### Responsibilities

Detect:

* .
* !
* ?

### Example

Input:

```
Hello. How are you?
```

Output:

```
2 sentences
```

---

## Task 3.4: Paragraph Counter

### Responsibilities

Detect paragraphs separated by:

* Empty lines
* Multiple line breaks

### Example

Input:

```
Paragraph One

Paragraph Two
```

Output:

```
2 paragraphs
```

---

## Task 3.5: Statistics Generator

Create:

```ts
getTextStatistics(text: string)
```

Returns:

```ts
{
  words,
  characters,
  charactersNoSpaces,
  sentences,
  paragraphs
}
```

### Acceptance Criteria

Single function generates all statistics.

---

# Phase 4: File Upload Support

## Task 4.1: Build File Reader Utility

### File

```
src/utils/fileReader.ts
```

### Responsibilities

* Accept .txt files
* Read file contents
* Return string content
* Handle read errors

### Acceptance Criteria

Valid file:

```
Content loaded successfully
```

Invalid file:

```
Error displayed
```

---

# Phase 5: Create Layout

## Task 5.1: Base Layout

### File

```
src/layouts/BaseLayout.astro
```

### Responsibilities

* HTML structure
* Meta tags
* Global styles
* Responsive container

### Acceptance Criteria

* Proper document title
* Mobile responsive layout

---

# Phase 6: Build UI Components

---

## Task 6.1: Header Component

### Displays

* App title
* Short description

Example:

```
Word Counter
Count words, characters, sentences, and paragraphs instantly.
```

---

## Task 6.2: Text Area Component

### Features

* Large textarea
* Paste text
* Type text
* Auto-resize (optional)

### Acceptance Criteria

* Text updates instantly
* Supports large text input

---

## Task 6.3: File Upload Component

### Features

* Upload button
* Drag and drop (optional)
* Accept only .txt

### Acceptance Criteria

* File content loaded into textarea
* Invalid file rejected

---

## Task 6.4: Statistics Card Component

### Displays

Single metric:

```
Words
125
```

Reusable for:

* Words
* Characters
* Characters (No Spaces)
* Sentences
* Paragraphs

---

## Task 6.5: Statistics Grid

### Layout

Desktop:

```
5 cards in grid
```

Mobile:

```
1-2 cards per row
```

---

## Task 6.6: Action Buttons

Buttons:

* Clear Text
* Copy Text (optional)

### Acceptance Criteria

Clear:

* Removes text
* Resets statistics

Copy:

* Copies textarea contents

---

## Task 6.7: Footer

Display:

```
Built with AstroJS and Tailwind CSS
```

---

# Phase 7: Build Main Page

## File

```
src/pages/index.astro
```

### Responsibilities

Compose:

```
BaseLayout
 ├── Header
 ├── TextArea
 ├── FileUploader
 ├── StatsGrid
 ├── ActionButtons
 └── Footer
```

### Acceptance Criteria

Entire application works on one page.

---

# Phase 8: State Management

## State

```ts
text
statistics
error
```

### Flow

```
User types text
      ↓
Text changes
      ↓
Generate statistics
      ↓
Update UI
```

File Upload:

```
Upload file
      ↓
Read file
      ↓
Update textarea
      ↓
Generate statistics
      ↓
Display statistics
```

Clear:

```
Clear button
      ↓
Empty textarea
      ↓
Reset statistics
```

---

# Phase 9: Error Handling

## Empty Input

Display:

```
0 Words
0 Characters
0 Sentences
0 Paragraphs
```

---

## Invalid File Type

Display:

```
Only .txt files are supported.
```

---

## File Read Failure

Display:

```
Unable to read the selected file.
```

---

# Phase 10: Responsive Design

## Mobile (<768px)

* Single column layout
* Large textarea
* Full-width buttons

## Tablet

* Two-column statistics grid

## Desktop

* Centered container
* Five-card statistics grid
* Maximum width around 1200px

---

# Phase 11: Accessibility

### Requirements

* Semantic HTML
* Labels for textarea
* Keyboard navigation
* Sufficient color contrast
* Focus states
* Screen reader support

---

# Phase 12: Testing Checklist

## Statistics Tests

### Word Count

```
"" → 0
"Hello" → 1
"Hello world" → 2
```

### Sentence Count

```
"Hello." → 1
"Hi. Bye." → 2
```

### Paragraph Count

```
"One\n\nTwo" → 2
```

### File Upload

```
.txt accepted
.pdf rejected
```

### UI Tests

* Mobile responsive
* Desktop responsive
* Large text input
* Clear button works
* Statistics update in real time

---

# Future Enhancements

## Version 2

* Reading time estimate
* Keyword frequency analysis
* Dark mode
* Export statistics as PDF
* Export statistics as CSV
* Support .docx files
* Multi-language support
* Save recent documents in Local Storage

---

# Definition of Done

✅ User can type text

✅ User can paste text

✅ User can upload .txt files

✅ Statistics update instantly

✅ Words are counted accurately

✅ Characters are counted accurately

✅ Sentences are counted accurately

✅ Paragraphs are counted accurately

✅ Application is responsive

✅ Accessibility requirements are met

✅ Error handling implemented

✅ Application is ready for deployment
