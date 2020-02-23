# Merica

An easy way to get state names and abbreviations for the beautiful US of A.

## Getting started 

`npm install merica`
or
`yarn add merica`

```js
import * as merica from 'merica';
// OR
import { states, abbreviationToFullName } from 'merica';
```

## Types

### All Options:
- abbreviationToFullName
- fullNameToAbbreviation
- abbreviations
- states
- getAbbreviation
- getFullName

### Objects:
- abbreviationToFullName
- fullNameToAbbreviation

### Lists
- abbreviations
- states

### Methods:
- getAbbreviation
Given a state's full name, returns a state's two letter abbreviation.

Example: 
```js
  const abbrev = getAbbreviation('California'); // CA
```

- getFullName
Given a state's two letter abbreviation, returns the state's full name.
Example:
```js
  const fullName = getFullName('CA'); // California
```