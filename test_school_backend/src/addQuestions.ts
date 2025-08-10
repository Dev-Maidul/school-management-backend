import mongoose from 'mongoose';
import Question, { IQuestion } from './models/Question.js'; // Ensure .js or .ts based on your setup
import 'dotenv/config';

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('MONGO_URI is not defined in environment variables');
  process.exit(1);
}

const questions = [
  // --- A1 Level Questions (22 questions) ---
  {
    text: "What is a 'for' loop used for in programming?",
    options: ["Executing a block of code a specified number of times", "Storing a single value", "Making a decision", "Creating a new function"],
    correctAnswer: "Executing a block of code a specified number of times",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "Which of the following is a CSS framework?",
    options: ["Node.js", "React", "Vue.js", "Tailwind CSS"],
    correctAnswer: "Tailwind CSS",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "What does 'HTML' stand for?",
    options: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
    correctAnswer: "HyperText Markup Language",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of a 'variable' in programming?",
    options: ["To create loops", "To store data", "To define a function", "To handle errors"],
    correctAnswer: "To store data",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "Which of these is a popular version control system?",
    options: ["npm", "Git", "Webpack", "Babel"],
    correctAnswer: "Git",
    level: "A1",
    competency: "DevOps & Tools"
  },
  {
    text: "In JavaScript, how do you declare a constant variable?",
    options: ["`var x = 5;`", "`let x = 5;`", "`const x = 5;`", "`x = 5;`"],
    correctAnswer: "`const x = 5;`",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "Which HTML tag is used for the largest heading?",
    options: ["`<h1>`", "`<head>`", "`<title>`", "`<p>`"],
    correctAnswer: "`<h1>`",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "What does `CSS` stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "Which of these is a database management system?",
    options: ["Express.js", "MongoDB", "Redux", "TypeScript"],
    correctAnswer: "MongoDB",
    level: "A1",
    competency: "Database"
  },
  {
    text: "What is a function in programming?",
    options: ["A special type of loop", "A block of code that performs a specific task", "A data type", "A container for variables"],
    correctAnswer: "A block of code that performs a specific task",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "Which command is used to install Node.js packages?",
    options: ["`node install`", "`npm install`", "`get package`", "package install"],
    correctAnswer: "`npm install`",
    level: "A1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is a REST API?",
    options: ["A type of database", "A set of rules for web services to communicate", "A front-end framework", "A programming language"],
    correctAnswer: "A set of rules for web services to communicate",
    level: "A1",
    competency: "Networking"
  },
  {
    text: "What is a common use for the `<footer>` tag in HTML?",
    options: ["To define a header", "To define the main content", "To define the footer of a document", "To define a navigation menu"],
    correctAnswer: "To define the footer of a document",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "What does the `if` statement do?",
    options: ["Creates a loop", "Makes a decision based on a condition", "Defines a variable", "Creates a function"],
    correctAnswer: "Makes a decision based on a condition",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "Which operator is used for assignment in JavaScript?",
    options: ["`==`", "`===`", "`=`", "`!=`"],
    correctAnswer: "`=`",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `DOCTYPE` declaration in HTML?",
    options: ["To define the document's character set", "To specify the HTML version", "To link external stylesheets", "To create a title"],
    correctAnswer: "To specify the HTML version",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "Which of the following is an example of a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    correctAnswer: "MongoDB",
    level: "A1",
    competency: "Database"
  },
  {
    text: "How do you add a comment in JavaScript?",
    options: ["`// This is a comment`", "`<!-- This is a comment -->`", "`'This is a comment'`", "`# This is a comment`"],
    correctAnswer: "`// This is a comment`",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "What is a boolean data type?",
    options: ["A number with a decimal point", "A true or false value", "A sequence of characters", "An array of numbers"],
    correctAnswer: "A true or false value",
    level: "A1",
    competency: "Programming Basics"
  },
  {
    text: "Which CSS property is used to change the background color?",
    options: ["`color`", "`font-color`", "`background-color`", "`bg-color`"],
    correctAnswer: "`background-color`",
    level: "A1",
    competency: "Web Development"
  },
  {
    text: "What is a web server?",
    options: ["A type of browser", "A software that delivers web pages to users", "A programming language", "A tool for debugging"],
    correctAnswer: "A software that delivers web pages to users",
    level: "A1",
    competency: "Networking"
  },
  {
    text: "What is the purpose of a `<div>` tag?",
    options: ["To define a paragraph", "To create a link", "To group and style block-level elements", "To display an image"],
    correctAnswer: "To group and style block-level elements",
    level: "A1",
    competency: "Web Development"
  },
  // --- A2 Level Questions (22 questions) ---
  {
    text: "What is the primary purpose of `npm`?",
    options: ["To run JavaScript in the browser", "To manage project dependencies and packages", "To compile TypeScript", "To create a new React app"],
    correctAnswer: "To manage project dependencies and packages",
    level: "A2",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the use of the `useEffect` hook in React?",
    options: ["To handle state changes", "To perform side effects in functional components", "To create a new component", "To manage component lifecycle"],
    correctAnswer: "To perform side effects in functional components",
    level: "A2",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of a `JOIN` clause in SQL?",
    options: ["To combine rows from two or more tables", "To filter data", "To update a table", "To delete data from a table"],
    correctAnswer: "To combine rows from two or more tables",
    level: "A2",
    competency: "Database"
  },
  {
    text: "What is the main advantage of using TypeScript over JavaScript?",
    options: ["It runs faster in the browser", "It provides static typing and type-checking", "It has more built-in functions", "It is easier to learn"],
    correctAnswer: "It provides static typing and type-checking",
    level: "A2",
    competency: "Programming Basics"
  },
  {
    text: "What does the `async` keyword do in JavaScript?",
    options: ["It makes a function run synchronously", "It makes a function return a Promise", "It creates a new thread", "It defines a class"],
    correctAnswer: "It makes a function return a Promise",
    level: "A2",
    competency: "Programming Basics"
  },
  {
    text: "What is `middleware` in an Express.js application?",
    options: ["A database ORM", "A function that has access to the request and response objects", "A front-end state management tool", "A templating engine"],
    correctAnswer: "A function that has access to the request and response objects",
    level: "A2",
    competency: "Backend Development"
  },
  {
    text: "Which HTTP method is typically used to retrieve data from a server?",
    options: ["`POST`", "`PUT`", "`GET`", "`DELETE`"],
    correctAnswer: "`GET`",
    level: "A2",
    competency: "Networking"
  },
  {
    text: "What is the purpose of a `package-lock.json` file?",
    options: ["To define a new package", "To lock the versions of installed dependencies", "To store environment variables", "To compile TypeScript code"],
    correctAnswer: "To lock the versions of installed dependencies",
    level: "A2",
    competency: "DevOps & Tools"
  },
  {
    text: "What is a primary key in a relational database?",
    options: ["A key that sorts the data", "A unique identifier for each record in a table", "A key that links to another table", "A key used for searching"],
    correctAnswer: "A unique identifier for each record in a table",
    level: "A2",
    competency: "Database"
  },
  {
    text: "What is the purpose of a `JWT` (JSON Web Token)?",
    options: ["To style web pages", "To handle database migrations", "To securely transmit information between parties", "To manage front-end state"],
    correctAnswer: "To securely transmit information between parties",
    level: "A2",
    competency: "Authentication & Security"
  },
  {
    text: "What is the difference between `var`, `let`, and `const`?",
    options: ["`var` is function-scoped, `let` and `const` are block-scoped", "They are all the same", "`let` is block-scoped, `var` and `const` are not", "`const` can be reassigned"],
    correctAnswer: "`var` is function-scoped, `let` and `const` are block-scoped",
    level: "A2",
    competency: "Programming Basics"
  },
  {
    text: "What is the role of a `router` in an Express.js application?",
    options: ["To handle database queries", "To define the application's API endpoints", "To manage user sessions", "To render HTML pages"],
    correctAnswer: "To define the application's API endpoints",
    level: "A2",
    competency: "Backend Development"
  },
  {
    text: "What is a `prop` in React?",
    options: ["A method to change the state", "An event handler", "A way to pass data from parent to child components", "A type of hook"],
    correctAnswer: "A way to pass data from parent to child components",
    level: "A2",
    competency: "Web Development"
  },
  {
    text: "What does `CRUD` stand for in the context of databases?",
    options: ["Compile, Run, Update, Delete", "Create, Read, Update, Delete", "Code, Read, Understand, Deploy", "Control, Run, Use, Delete"],
    correctAnswer: "Create, Read, Update, Delete",
    level: "A2",
    competency: "Database"
  },
  {
    text: "How do you handle asynchronous operations in JavaScript?",
    options: ["Using `for` loops", "Using `if/else` statements", "Using Promises, `async/await`, or callbacks", "Using class components"],
    correctAnswer: "Using Promises, `async/await`, or callbacks",
    level: "A2",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of `CORS` (Cross-Origin Resource Sharing)?",
    options: ["To secure a database", "To allow a web page to make requests to a different domain", "To create a server-side route", "To manage user authentication"],
    correctAnswer: "To allow a web page to make requests to a different domain",
    level: "A2",
    competency: "Networking"
  },
  {
    text: "What is `state` in React?",
    options: ["Data passed from a parent component", "A variable that holds the current URL", "An object that holds data and determines how a component renders", "A permanent data storage"],
    correctAnswer: "An object that holds data and determines how a component renders",
    level: "A2",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of a `.gitignore` file?",
    options: ["To ignore syntax errors", "To list files that Git should ignore", "To track changes in a project", "To define project dependencies"],
    correctAnswer: "To list files that Git should ignore",
    level: "A2",
    competency: "DevOps & Tools"
  },
  {
    text: "Which of these is a popular framework for building Node.js REST APIs?",
    options: ["Angular", "React", "Express.js", "Django"],
    correctAnswer: "Express.js",
    level: "A2",
    competency: "Backend Development"
  },
  {
    text: "What is the command to create a new Git repository?",
    options: ["`git init`", "`git clone`", "`git commit`", "`git push`"],
    correctAnswer: "`git init`",
    level: "A2",
    competency: "DevOps & Tools"
  },
  {
    text: "What does `JWT` stand for?",
    options: ["JSON Web Transfer", "JavaScript Web Technology", "JSON Web Token", "Java Web Type"],
    correctAnswer: "JSON Web Token",
    level: "A2",
    competency: "Authentication & Security"
  },
  {
    text: "In MongoDB, what is a `document`?",
    options: ["A table", "A row", "A collection", "A record with key-value pairs"],
    correctAnswer: "A record with key-value pairs",
    level: "A2",
    competency: "Database"
  },
  // --- A3 Level Questions (22 questions) ---
  {
    text: "What is the purpose of the `map` method in JavaScript?",
    options: ["To loop through an array and modify it", "To create a new array with transformed elements", "To filter elements", "To reduce an array to a single value"],
    correctAnswer: "To create a new array with transformed elements",
    level: "A3",
    competency: "Programming Basics"
  },
  {
    text: "What is the CSS `flexbox` used for?",
    options: ["To create animations", "To manage layouts with flexible boxes", "To style text", "To handle events"],
    correctAnswer: "To manage layouts with flexible boxes",
    level: "A3",
    competency: "Web Development"
  },
  {
    text: "What is a foreign key in a relational database?",
    options: ["A key that sorts data", "A key that links two tables", "A unique identifier for a record", "A key for indexing"],
    correctAnswer: "A key that links two tables",
    level: "A3",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `git branch` command?",
    options: ["To create a new repository", "To list, create, or delete branches", "To commit changes", "To push changes to a remote repository"],
    correctAnswer: "To list, create, or delete branches",
    level: "A3",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `await` keyword in JavaScript?",
    options: ["To pause execution until a Promise is resolved", "To create a new Promise", "To define a synchronous function", "To handle errors"],
    correctAnswer: "To pause execution until a Promise is resolved",
    level: "A3",
    competency: "Programming Basics"
  },
  {
    text: "What is the role of the `body-parser` middleware in Express.js?",
    options: ["To parse incoming request bodies", "To handle database queries", "To manage sessions", "To serve static files"],
    correctAnswer: "To parse incoming request bodies",
    level: "A3",
    competency: "Backend Development"
  },
  {
    text: "Which HTTP status code indicates a successful request?",
    options: ["404", "200", "500", "301"],
    correctAnswer: "200",
    level: "A3",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `useState` hook in React?",
    options: ["To manage side effects", "To manage state in functional components", "To handle routing", "To create components"],
    correctAnswer: "To manage state in functional components",
    level: "A3",
    competency: "Web Development"
  },
  {
    text: "What is a MongoDB `collection`?",
    options: ["A single document", "A group of documents", "A database schema", "A type of index"],
    correctAnswer: "A group of documents",
    level: "A3",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `bcrypt` library?",
    options: ["To style web pages", "To hash passwords securely", "To manage API routes", "To connect to databases"],
    correctAnswer: "To hash passwords securely",
    level: "A3",
    competency: "Authentication & Security"
  },
  {
    text: "What is the difference between `==` and `===` in JavaScript?",
    options: ["`==` compares values, `===` compares values and types", "They are the same", "`==` is for strings only", "`===` is for numbers only"],
    correctAnswer: "`==` compares values, `===` compares values and types",
    level: "A3",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `public` folder in an Express.js app?",
    options: ["To store database schemas", "To serve static files", "To define API routes", "To manage middleware"],
    correctAnswer: "To serve static files",
    level: "A3",
    competency: "Backend Development"
  },
  {
    text: "What is the CSS `grid` system used for?",
    options: ["To create animations", "To manage two-dimensional layouts", "To style text", "To handle events"],
    correctAnswer: "To manage two-dimensional layouts",
    level: "A3",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `git merge` command?",
    options: ["To create a new branch", "To combine branches", "To delete a branch", "To push changes"],
    correctAnswer: "To combine branches",
    level: "A3",
    competency: "DevOps & Tools"
  },
  {
    text: "What is a `Promise` in JavaScript?",
    options: ["A function that runs synchronously", "An object representing the eventual completion of an async operation", "A type of loop", "A database query"],
    correctAnswer: "An object representing the eventual completion of an async operation",
    level: "A3",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of an `index` in a database?",
    options: ["To store data", "To improve query performance", "To define relationships", "To secure the database"],
    correctAnswer: "To improve query performance",
    level: "A3",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `dotenv` package in Node.js?",
    options: ["To manage API routes", "To load environment variables from a .env file", "To hash passwords", "To serve static files"],
    correctAnswer: "To load environment variables from a .env file",
    level: "A3",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the role of the `useRef` hook in React?",
    options: ["To manage state", "To reference a DOM element or value", "To handle routing", "To perform side effects"],
    correctAnswer: "To reference a DOM element or value",
    level: "A3",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `helmet` middleware in Express.js?",
    options: ["To parse request bodies", "To secure HTTP headers", "To manage sessions", "To serve static files"],
    correctAnswer: "To secure HTTP headers",
    level: "A3",
    competency: "Authentication & Security"
  },
  {
    text: "Which HTTP method is used to update data on a server?",
    options: ["`GET`", "`POST`", "`PUT`", "`DELETE`"],
    correctAnswer: "`PUT`",
    level: "A3",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `try...catch` block in JavaScript?",
    options: ["To define a loop", "To handle errors", "To create a function", "To manage state"],
    correctAnswer: "To handle errors",
    level: "A3",
    competency: "Programming Basics"
  },
  {
    text: "What is a `schema` in MongoDB?",
    options: ["A database table", "A structure for documents in a collection", "A type of index", "A query method"],
    correctAnswer: "A structure for documents in a collection",
    level: "A3",
    competency: "Database"
  },
  // --- B1 Level Questions (22 questions) ---
  {
    text: "What is the purpose of the `reduce` method in JavaScript?",
    options: ["To filter an array", "To create a new array", "To reduce an array to a single value", "To loop through an array"],
    correctAnswer: "To reduce an array to a single value",
    level: "B1",
    competency: "Programming Basics"
  },
  {
    text: "What is the CSS `position: absolute` property used for?",
    options: ["To align text", "To position an element relative to its nearest positioned ancestor", "To create a grid layout", "To handle animations"],
    correctAnswer: "To position an element relative to its nearest positioned ancestor",
    level: "B1",
    competency: "Web Development"
  },
  {
    text: "What is a `transaction` in a database?",
    options: ["A single query", "A group of operations executed as a single unit", "A type of index", "A schema definition"],
    correctAnswer: "A group of operations executed as a single unit",
    level: "B1",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `git checkout` command?",
    options: ["To create a new branch", "To switch branches or restore files", "To commit changes", "To push changes"],
    correctAnswer: "To switch branches or restore files",
    level: "B1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `fetch` API in JavaScript?",
    options: ["To create a new Promise", "To make HTTP requests", "To manage state", "To handle errors"],
    correctAnswer: "To make HTTP requests",
    level: "B1",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `express-session` middleware?",
    options: ["To parse request bodies", "To manage user sessions", "To secure HTTP headers", "To serve static files"],
    correctAnswer: "To manage user sessions",
    level: "B1",
    competency: "Backend Development"
  },
  {
    text: "What is the difference between `POST` and `GET` HTTP methods?",
    options: ["`POST` retrieves data, `GET` sends data", "`POST` sends data, `GET` retrieves data", "They are the same", "`POST` is for deleting data"],
    correctAnswer: "`POST` sends data, `GET` retrieves data",
    level: "B1",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `useCallback` hook in React?",
    options: ["To manage state", "To memoize functions", "To reference DOM elements", "To handle side effects"],
    correctAnswer: "To memoize functions",
    level: "B1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `find` method in MongoDB?",
    options: ["To update documents", "To delete documents", "To query documents", "To create a new collection"],
    correctAnswer: "To query documents",
    level: "B1",
    competency: "Database"
  },
  {
    text: "What is OAuth used for?",
    options: ["To style web pages", "To secure passwords", "To allow third-party authentication", "To manage API routes"],
    correctAnswer: "To allow third-party authentication",
    level: "B1",
    competency: "Authentication & Security"
  },
  {
    text: "What is a closure in JavaScript?",
    options: ["A loop construct", "A function with access to its outer scope", "A type of Promise", "A database query"],
    correctAnswer: "A function with access to its outer scope",
    level: "B1",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `cors` middleware in Express.js?",
    options: ["To handle sessions", "To enable Cross-Origin Resource Sharing", "To parse request bodies", "To secure HTTP headers"],
    correctAnswer: "To enable Cross-Origin Resource Sharing",
    level: "B1",
    competency: "Backend Development"
  },
  {
    text: "What is the CSS `media query` used for?",
    options: ["To create animations", "To apply styles based on device characteristics", "To manage layouts", "To handle events"],
    correctAnswer: "To apply styles based on device characteristics",
    level: "B1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `git pull` command?",
    options: ["To create a new branch", "To fetch and merge changes from a remote repository", "To commit changes", "To delete a branch"],
    correctAnswer: "To fetch and merge changes from a remote repository",
    level: "B1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `filter` method in JavaScript?",
    options: ["To create a new array with elements that pass a test", "To reduce an array", "To loop through an array", "To modify an array"],
    correctAnswer: "To create a new array with elements that pass a test",
    level: "B1",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `aggregate` method in MongoDB?",
    options: ["To update documents", "To perform advanced data processing", "To delete documents", "To create a new collection"],
    correctAnswer: "To perform advanced data processing",
    level: "B1",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `nodemon` tool?",
    options: ["To compile TypeScript", "To restart the server on file changes", "To manage dependencies", "To secure HTTP headers"],
    correctAnswer: "To restart the server on file changes",
    level: "B1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `useMemo` hook in React?",
    options: ["To manage state", "To memoize values", "To reference DOM elements", "To handle side effects"],
    correctAnswer: "To memoize values",
    level: "B1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `jsonwebtoken` library in Node.js?",
    options: ["To create API routes", "To generate and verify JWTs", "To parse request bodies", "To manage sessions"],
    correctAnswer: "To generate and verify JWTs",
    level: "B1",
    competency: "Authentication & Security"
  },
  {
    text: "What is the difference between `null` and `undefined` in JavaScript?",
    options: ["`null` is an object, `undefined` is not defined", "`null` is not defined, `undefined` is an object", "They are the same", "`null` is a number, `undefined` is a string"],
    correctAnswer: "`null` is an object, `undefined` is not defined",
    level: "B1",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `DELETE` HTTP method?",
    options: ["To retrieve data", "To update data", "To delete data", "To send data"],
    correctAnswer: "To delete data",
    level: "B1",
    competency: "Networking"
  },
  {
    text: "What is a `view` in a relational database?",
    options: ["A physical table", "A virtual table based on a query", "A type of index", "A schema definition"],
    correctAnswer: "A virtual table based on a query",
    level: "B1",
    competency: "Database"
  },
  // --- B2 Level Questions (22 questions) ---
  {
    text: "What is the purpose of the `spread` operator in JavaScript?",
    options: ["To create loops", "To copy or merge arrays/objects", "To define a function", "To handle errors"],
    correctAnswer: "To copy or merge arrays/objects",
    level: "B2",
    competency: "Programming Basics"
  },
  {
    text: "What is the CSS `transition` property used for?",
    options: ["To create layouts", "To animate changes in CSS properties", "To manage media queries", "To handle events"],
    correctAnswer: "To animate changes in CSS properties",
    level: "B2",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `GROUP BY` clause in SQL?",
    options: ["To filter data", "To sort data", "To group rows with similar values", "To update data"],
    correctAnswer: "To group rows with similar values",
    level: "B2",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `git rebase` command?",
    options: ["To create a new branch", "To rewrite commit history", "To delete a branch", "To push changes"],
    correctAnswer: "To rewrite commit history",
    level: "B2",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `axios` library in JavaScript?",
    options: ["To manage state", "To make HTTP requests", "To handle routing", "To create components"],
    correctAnswer: "To make HTTP requests",
    level: "B2",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `morgan` middleware in Express.js?",
    options: ["To log HTTP requests", "To parse request bodies", "To manage sessions", "To serve static files"],
    correctAnswer: "To log HTTP requests",
    level: "B2",
    competency: "Backend Development"
  },
  {
    text: "What is the HTTP status code for 'Not Found'?",
    options: ["200", "404", "500", "301"],
    correctAnswer: "404",
    level: "B2",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `React.Fragment` in React?",
    options: ["To manage state", "To group elements without adding extra DOM nodes", "To handle routing", "To perform side effects"],
    correctAnswer: "To group elements without adding extra DOM nodes",
    level: "B2",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `updateOne` method in MongoDB?",
    options: ["To query documents", "To update a single document", "To delete documents", "To create a new collection"],
    correctAnswer: "To update a single document",
    level: "B2",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `passport` library in Node.js?",
    options: ["To create API routes", "To handle authentication", "To parse request bodies", "To manage sessions"],
    correctAnswer: "To handle authentication",
    level: "B2",
    competency: "Authentication & Security"
  },
  {
    text: "What is a higher-order function in JavaScript?",
    options: ["A function that returns another function", "A loop construct", "A type of Promise", "A database query"],
    correctAnswer: "A function that returns another function",
    level: "B2",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `express.static` middleware?",
    options: ["To parse request bodies", "To serve static files", "To manage sessions", "To secure HTTP headers"],
    correctAnswer: "To serve static files",
    level: "B2",
    competency: "Backend Development"
  },
  {
    text: "What is the CSS `box-shadow` property used for?",
    options: ["To create layouts", "To add shadows to elements", "To manage media queries", "To handle animations"],
    correctAnswer: "To add shadows to elements",
    level: "B2",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `git stash` command?",
    options: ["To save changes temporarily", "To create a new branch", "To commit changes", "To push changes"],
    correctAnswer: "To save changes temporarily",
    level: "B2",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `Promise.all` method in JavaScript?",
    options: ["To create a new Promise", "To handle multiple Promises concurrently", "To manage state", "To handle errors"],
    correctAnswer: "To handle multiple Promises concurrently",
    level: "B2",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `createIndex` method in MongoDB?",
    options: ["To update documents", "To create an index for faster queries", "To delete documents", "To create a new collection"],
    correctAnswer: "To create an index for faster queries",
    level: "B2",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `eslint` tool?",
    options: ["To compile TypeScript", "To lint and fix code errors", "To manage dependencies", "To secure HTTP headers"],
    correctAnswer: "To lint and fix code errors",
    level: "B2",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `useContext` hook in React?",
    options: ["To manage state", "To share data across components", "To reference DOM elements", "To handle side effects"],
    correctAnswer: "To share data across components",
    level: "B2",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `crypto` module in Node.js?",
    options: ["To create API routes", "To handle cryptographic operations", "To parse request bodies", "To manage sessions"],
    correctAnswer: "To handle cryptographic operations",
    level: "B2",
    competency: "Authentication & Security"
  },
  {
    text: "What is the difference between `forEach` and `map` in JavaScript?",
    options: ["`forEach` returns a new array, `map` does not", "`map` returns a new array, `forEach` does not", "They are the same", "`forEach` filters elements"],
    correctAnswer: "`map` returns a new array, `forEach` does not",
    level: "B2",
    competency: "Programming Basics"
  },
  {
    text: "What is the HTTP status code for 'Internal Server Error'?",
    options: ["200", "404", "500", "301"],
    correctAnswer: "500",
    level: "B2",
    competency: "Networking"
  },
  {
    text: "What is a `trigger` in a relational database?",
    options: ["A type of index", "A stored procedure executed automatically", "A virtual table", "A schema definition"],
    correctAnswer: "A stored procedure executed automatically",
    level: "B2",
    competency: "Database"
  },
  // --- C1 Level Questions (22 questions) ---
  {
    text: "What is the purpose of the `destructuring` syntax in JavaScript?",
    options: ["To create loops", "To extract values from arrays/objects", "To define a function", "To handle errors"],
    correctAnswer: "To extract values from arrays/objects",
    level: "C1",
    competency: "Programming Basics"
  },
  {
    text: "What is the CSS `transform` property used for?",
    options: ["To create layouts", "To apply 2D or 3D transformations", "To manage media queries", "To handle animations"],
    correctAnswer: "To apply 2D or 3D transformations",
    level: "C1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `HAVING` clause in SQL?",
    options: ["To filter data before grouping", "To filter grouped data", "To sort data", "To update data"],
    correctAnswer: "To filter grouped data",
    level: "C1",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `git cherry-pick` command?",
    options: ["To apply specific commits to a branch", "To create a new branch", "To delete a branch", "To push changes"],
    correctAnswer: "To apply specific commits to a branch",
    level: "C1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `WebSocket` protocol?",
    options: ["To make HTTP requests", "To enable real-time bidirectional communication", "To manage state", "To handle routing"],
    correctAnswer: "To enable real-time bidirectional communication",
    level: "C1",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `rate-limiter` middleware in Express.js?",
    options: ["To parse request bodies", "To limit the number of requests", "To manage sessions", "To serve static files"],
    correctAnswer: "To limit the number of requests",
    level: "C1",
    competency: "Backend Development"
  },
  {
    text: "What is the HTTP status code for 'Moved Permanently'?",
    options: ["200", "404", "500", "301"],
    correctAnswer: "301",
    level: "C1",
    competency: "Networking"
  },
  {
    text: "What is the purpose of the `React Router` library?",
    options: ["To manage state", "To handle client-side routing", "To reference DOM elements", "To perform side effects"],
    correctAnswer: "To handle client-side routing",
    level: "C1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `bulkWrite` method in MongoDB?",
    options: ["To query documents", "To perform multiple write operations", "To delete documents", "To create a new collection"],
    correctAnswer: "To perform multiple write operations",
    level: "C1",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `CSRF` token?",
    options: ["To style web pages", "To prevent cross-site request forgery", "To manage API routes", "To hash passwords"],
    correctAnswer: "To prevent cross-site request forgery",
    level: "C1",
    competency: "Authentication & Security"
  },
  {
    text: "What is a generator function in JavaScript?",
    options: ["A function that returns multiple values over time", "A loop construct", "A type of Promise", "A database query"],
    correctAnswer: "A function that returns multiple values over time",
    level: "C1",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `compression` middleware in Express.js?",
    options: ["To parse request bodies", "To compress response bodies", "To manage sessions", "To secure HTTP headers"],
    correctAnswer: "To compress response bodies",
    level: "C1",
    competency: "Backend Development"
  },
  {
    text: "What is the CSS `animation` property used for?",
    options: ["To create layouts", "To apply keyframe-based animations", "To manage media queries", "To handle events"],
    correctAnswer: "To apply keyframe-based animations",
    level: "C1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `git reset` command?",
    options: ["To create a new branch", "To undo changes in the working directory or index", "To delete a branch", "To push changes"],
    correctAnswer: "To undo changes in the working directory or index",
    level: "C1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `async/await` syntax in JavaScript?",
    options: ["To create loops", "To handle asynchronous operations more easily", "To define a function", "To manage state"],
    correctAnswer: "To handle asynchronous operations more easily",
    level: "C1",
    competency: "Programming Basics"
  },
  {
    text: "What is the purpose of the `textIndex` in MongoDB?",
    options: ["To update documents", "To enable text search", "To delete documents", "To create a new collection"],
    correctAnswer: "To enable text search",
    level: "C1",
    competency: "Database"
  },
  {
    text: "What is the purpose of the `prettier` tool?",
    options: ["To compile TypeScript", "To format code consistently", "To manage dependencies", "To secure HTTP headers"],
    correctAnswer: "To format code consistently",
    level: "C1",
    competency: "DevOps & Tools"
  },
  {
    text: "What is the purpose of the `useReducer` hook in React?",
    options: ["To manage complex state logic", "To reference DOM elements", "To handle routing", "To perform side effects"],
    correctAnswer: "To manage complex state logic",
    level: "C1",
    competency: "Web Development"
  },
  {
    text: "What is the purpose of the `secure` flag in a cookie?",
    options: ["To style web pages", "To ensure the cookie is sent over HTTPS", "To manage API routes", "To hash passwords"],
    correctAnswer: "To ensure the cookie is sent over HTTPS",
    level: "C1",
    competency: "Authentication & Security"
  },
  {
    text: "What is the difference between `shallow` and `deep` copying in JavaScript?",
    options: ["`shallow` copies only top-level properties, `deep` copies nested objects", "`deep` copies only top-level properties", "They are the same", "`shallow` copies nested objects"],
    correctAnswer: "`shallow` copies only top-level properties, `deep` copies nested objects",
    level: "C1",
    competency: "Programming Basics"
  },
  {
    text: "What is the HTTP status code for 'Unauthorized'?",
    options: ["200", "404", "401", "301"],
    correctAnswer: "401",
    level: "C1",
    competency: "Networking"
  },
  {
    text: "What is a `stored procedure` in a relational database?",
    options: ["A type of index", "A precompiled set of SQL statements", "A virtual table", "A schema definition"],
    correctAnswer: "A precompiled set of SQL statements",
    level: "C1",
    competency: "Database"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected for seeding.');

    await Question.deleteMany({});
    console.log('Existing questions deleted.');

    await Question.insertMany(questions);
    console.log('Questions successfully added to the database!');

    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();