# TypeScript Sample App

This branch is approximately the same JavaScript/Node application from `master` branch, rewritten in TypeScript.

## Dependencies

To install the application dependencies and their typescript descriptions:

```plain
yarn add express jade pug
yarn add @types/express --dev
yarn add @types/node --dev
```

To install `typescript` itself

```plain
yarn add typescript --dev
```

To convert TypeScript `src/**/*.ts` files into JavaScript `built/**/*.js` files, run:

```plain
tsc
```

To watch `src/**/*.ts` files for changes and automatically convert:

```plain
tsc -w
```

To run the application locally:

```plain
node built/server.js
```