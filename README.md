# Demo JEST + SUPERTEST

- [Fazt Code Youtube video: Nodejs Testing con Jest y Supertest](https://www.youtube.com/watch?v=MTMcWrDbPA8)

## Install Dependencies

```bash
npm i express
```

## Install Dev Dependencies 1

```bash
npm i -D jest supertest
npm i -D @types/jest
npm i -D nodemon
npm i -D @babel/core @babel/node @babel/cli @babel/preset-env
npm i -D babel-jest 
```

## Configure Babel 7

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```
