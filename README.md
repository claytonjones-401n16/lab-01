# NOTES APPLICATION

## Classes - lab02

### Author: Clayton Jones

### Links and Resources

- [submission PR](https://github.com/claytonjones-401n16/lab-01/pull/3)
- [ci/cd: GitHub Actions](https://github.com/claytonjones-401n16/lab-01/actions)
- [NPM Package](https://www.npmjs.com/package/@claytonjones7/notes)

### Setup

#### `.env` requirements (where applicable)

N/A

#### How to initialize/run your application (where applicable)

- If cloned repo: `npm i` then `node index.js -a "NOTE_TO_ADD"`
- npm package: `npm i @claytonjones7/notes`

#### How to use your library (where applicable)
- `notes -a (or --add) "NOTE_TO_ADD"`

#### Tests

- How do you run tests?
  - `npm test`
- Any tests of note?
  - 7 tests of input module
    - testing various flags and making data is within those flags
  - 2 tests of notes module
    - testing that the prototype functions call and produce as expected
  - 4 tests of validator module
    - testing validity of inputs
- Describe any tests that you did not complete, skipped, etc
  - all tests complete, 94% line coverage

#### UML


![lab-01](./assets/lab-01-UML.jpg)
