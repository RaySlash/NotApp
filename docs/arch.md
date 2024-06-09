# NotApp

Basic application which allows user to save notes and view them later.
It is written in TypeScript, React-native with Expo build tools.
It uses SQLite for storing notes.It is a simple application which is useful for beginners to understand the basic concepts of React-native and Expo.

## Features

- [ ] User can add notes.
- [ ] User can view notes.
- [ ] User can delete notes.
- [ ] User can edit notes.

## System

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
