# NotApp

Basic application which allows user to save notes and view them later.
It is written in TypeScript, React-native with Expo build tools.
It uses React Native Reusable Components for UI.
It uses SQLite for storing notes.

## Features

- [ ] User can add categories.
- [ ] User can view categories.
- [ ] User can delete categories.
- [ ] User can edit categories.

- [ ] User can add notes.
- [ ] User can view notes.
- [ ] User can delete notes.
- [ ] User can edit notes.

## System

### Description

User can add categories. Then user can add a note that belongs to a category.

```js
// In this example, user adds a category named 'Books' and adds a note to it.
const booksCategory = [];

const note1 = {
  title: "Note1",
  content: "This is a simple note.",
  category: "booksCategory",
};

const note2 = {
  title: "Note2",
  content: "This is another simple note.",
};

// add to default category (uncategorised)
if (!note.category) {
  defaultCategory.push(note);
}

// add to category
if (note.category) {
  const noteCategory = note.category;
  noteCategory.push(note);
}

// note 2 is added to default category
// note 1 is added to 'Books' category
```

### Tables

`note`
| id | title | content | created_at | updated_at | categoryId |
| --- | ----- | ------- | ---------- | ---------- | ---------- |
| 1 | Note1 | Content | 2021-05-01 | 2021-05-01 | 1 |
| 2 | Note2 | Content | 2021-05-01 | 2021-05-01 | 1 |
| 3 | Note3 | Content | 2021-05-01 | 2021-05-01 | 2 |

`category`
| id | name | created_at |
| --- | ---- | ---------- |
| 1 | Category1 | 2021-05-01 |
| 2 | Category2 | 2021-05-01 |

## References

[Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite)
[React Native Reusables](https://rnr-docs.vercel.app/)
