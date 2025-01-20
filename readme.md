# React, NodeJS, Express & MongoDB - The MERN Fullstack Guide

## A Note About The NodeJS Version

If, when running the newly created React project, you get a **"digital envelope routines unsupported"** error, this should be caused by your Node version.

In such cases, it will help to replace (in `package.json`):

```
"start": "react-scripts start"
```

with:

```
"start": "react-scripts --openssl-legacy-provider start"
```

and:

```
"build": "react-scripts build"
```

with:

```
"build": "react-scripts --openssl-legacy-provider build"
```

Older Code Base:-

```
ReactDOM.render(<App />, document.getElementById('root'));
```

Newer Code Base:-

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Useful Resources & Links

The following links allow you to dive deeper into some of the concepts.

- **Official React Docs**: [React Documentation](https://reactjs.org/docs/getting-started.html)
- **Official Node.js Docs**: [Node.js Documentation](https://nodejs.org/en/docs/)
- **Official Express.js Docs**: [Express.js Documentation](https://expressjs.com/)
- **Official MongoDB Docs**: [MongoDB Documentation](https://docs.mongodb.com/)
- **Academind Learn React**: [Further React Resources](https://academind.com/learn/react/)

Additionally, you can explore these resources for further learning:

- **Getting Started with React**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
- **React Tutorial at W3Schools**: [W3Schools React Tutorial](https://www.w3schools.com/REACT/DEFAULT.ASP)
- **Introducing JSX in React**: [React JSX Documentation](https://legacy.reactjs.org/docs/introducing-jsx.html)
- **React Router Documentation**: [React Router](https://reactrouter.com/en/main)
- **Getting Started with React Native**: [React Native Docs](https://reactnative.dev/docs/getting-started)
