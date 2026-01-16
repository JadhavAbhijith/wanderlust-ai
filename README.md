# Phase 1: Phase 1: Frontend & Backend Foundations

⏱️ **Estimated Duration:** 2 weeks

---

## 🎯 Milestone 1: Next.js Core Concepts

### Task 1: Understand React Fundamentals

- [ ] **Status:** Not Started

**Description:**
Revisit or learn React's core concepts: components, JSX, props, state, lifecycle methods, and hooks (useState, useEffect).

**✅ Definition of Done:**
> A Next.js page successfully renders a custom React component that displays a dynamic destination passed via props, updates an internal visits counter using useState, and displays a corresponding message that reacts to counter changes via useEffect.

**Concepts:** `React` `Components` `JSX` `Props` `State` `Hooks`

**📚 Resources:**
- 🎥 [React JS Full Course for Beginners | Complete All-in-One Tutorial | 9 ...](https://www.youtube.com/watch?v=RVFAyFWO4go)
- 🎥 [React Crash Course - YouTube](https://www.youtube.com/watch?v=LDB4uaJ87e0)
- 🎥 [All React Hooks Explained - React Hooks Tutorial 2025 - YouTube](https://www.youtube.com/watch?v=xfKYYRE6-TQ)
- 🔗 [React hooks (v17.0.3) and Redux handbook using TypeScript (v4 ...](http://developerlife.com/2021/10/19/react-hooks-redux-typescript-handbook/)
- 🔗 [Build a To-Do Application with React and Firebase](https://dev-academy.com/react-firebase/)
- 🎥 [Make an Image Carousel/Slider with React | Beginners Tutorial ...](https://m.youtube.com/watch?v=QpsGo8kZiTo&pp=ygUUI3ZlcnRpY2FsaW1hZ2VzbGlkZXLSBwkJ_ACjtWo3m0M%3D)
- 🔗 [Building a Secure Wikipedia App Using React Hooks and Auth0](https://auth0.com/blog/building-a-wikipedia-app-using-react-hooks-and-auth0/)

---

### Task 2: Introduction to Next.js

- [ ] **Status:** Not Started

**Description:**
Learn Next.js project setup, file-system routing, pages vs. app router, client-side vs. server-side rendering, and basic data fetching methods.

**✅ Definition of Done:**
> A Next.js application runs locally with two distinct routes (one from App Router, one from Pages Router), displaying data fetched server-side on the App Router route and client-side on the Pages Router route.

**Concepts:** `Next.js` `Routing` `Pages Router` `App Router` `SSR` `CSR` `Data Fetching`

**📚 Resources:**
- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎥 [Best NextJS Folder Structures | Beginner - Intermediate - YouTube](https://www.youtube.com/watch?v=gLFT1wYd7G0)
- 🎥 [Next.js App Router Authentication (Sessions, Cookies, JWTs ...](https://www.youtube.com/watch?v=DJvM2lSPn6w)
- 🎥 [NextJS 15 with React Query Tutorial - YouTube](https://www.youtube.com/watch?v=b_UQ1bdQddw)

---

### Task 3: Styling in Next.js

- [ ] **Status:** Not Started

**Description:**
Explore different styling approaches in Next.js, including CSS modules, Tailwind CSS, or styled-components.

**✅ Definition of Done:**
> A Next.js page renders at least one UI element successfully styled using either CSS Modules, Tailwind CSS, or styled-components, demonstrating the implementation of a chosen styling approach.

**🤔 Decision Point:**
> Which styling approach will you adopt for your Next.js application?

Options:
- **CSS Modules**: Embrace standard CSS with a local scope. CSS Modules ensure styles are encapsulated, making components reusable and preventing unintended style overrides across the application.
- **Tailwind CSS**: Adopt a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup. It's highly customizable and speeds up styling but requires learning its extensive class API.
- **Styled Components**: Utilize a popular CSS-in-JS library that allows you to write actual CSS code within tagged template literals in your JavaScript. This approach provides strong component-level styling and dynamic theming capabilities, but adds a runtime overhead.

**Concepts:** `Next.js Styling` `CSS Modules` `Tailwind CSS`

**📚 Resources:**
- 🎥 [Mastering Next.js 14: CSS Styling | Part Two - YouTube](https://www.youtube.com/watch?v=jNO9HiiXyJM)
- 🎥 [Styling with Global Styles, CSS Modules and SASS - Next.js Course ...](https://www.youtube.com/watch?v=aM4zu346yBs)
- 🎥 [Next js Tutorial for Beginners | Nextjs 13 (App Router) with ...](https://www.youtube.com/watch?v=ZVnjOPwW4ZA)
- 🎥 [7 ways to deal with CSS - YouTube](https://www.youtube.com/watch?v=ouncVBiye_M)
- 🔗 [reactjs - How to import SCSS on Component Level with Next.js ...](https://stackoverflow.com/questions/62799423/how-to-import-scss-on-component-level-with-next-js)
- 🔗 [How to CSS Style in React](https://www.robinwieruch.de/react-css-styling/)
- 🔗 [Styled Components Best Practices](https://www.robinwieruch.de/styled-components/)

---

## 🎯 Milestone 2: Node.js & MongoDB Basics

### Task 1: Node.js and Express.js Fundamentals

- [ ] **Status:** Not Started

**Description:**
Learn how to set up a Node.js project, understand event loop, modules, and build a simple REST API using Express.js.

**✅ Definition of Done:**
> A Node.js Express.js application is running locally on a specified port, successfully serving a GET request to a '/api/hello' endpoint that returns a JSON object with a 'message' property.

**Concepts:** `Node.js` `Express.js` `REST API` `HTTP Methods` `Middleware`

**📚 Resources:**
- 🎥 [Node.js Crash Course - YouTube](https://www.youtube.com/watch?v=32M1al-Y6Ag)
- 🎥 [Node JS Full Course 2025 | Hostinger | Part 2 - YouTube](https://www.youtube.com/watch?v=_f7h6xQXiLA)
- 🎥 [React.JS Full Course - Build 4 Projects in 5 Hours - YouTube](https://www.youtube.com/watch?v=82PXenL4MGg)
- 🔗 [Making HTTP Requests in Node.js. An introduction to server-side ...](https://medium.com/@madelinecorman/making-http-requests-in-node-js-16fe74af0a79)

---

### Task 2: MongoDB Setup and Basic Operations

- [ ] **Status:** Not Started

**Description:**
Install MongoDB (local or cloud like Atlas), understand NoSQL concepts, and perform CRUD operations using the MongoDB Node.js driver or Mongoose.

**✅ Definition of Done:**
> The Node.js application successfully connects to a MongoDB database and performs all four CRUD operations (Create, Read, Update, Delete) on a sample collection, with the results verifiable through console output or API responses.

**🤔 Decision Point:**
> How will your Node.js backend interact with MongoDB?

Options:
- **MongoDB Node.js Driver**: Use the official MongoDB Node.js driver to interact with the database. This gives you direct access to MongoDB commands and collections, offering full control but requiring more manual schema validation and data structuring.
- **Mongoose (ODM)**: Mongoose is an ODM library that provides a straightforward, schema-based solution to model your application data. It handles type casting, validation, query building, and business logic hooks out of the box, streamlining development but adding an abstraction layer.

**Concepts:** `MongoDB` `NoSQL` `CRUD` `Mongoose` `Database Connection`

**📚 Resources:**
- 📖 [MongoDB Documentation](https://www.mongodb.com/docs/)
- 🎥 [How to create MongoDB Schemas and Data Models | Node.js ...](https://www.youtube.com/watch?v=jZ-dzj6ut54)
- 🔗 [Django MongoDB Integration: A Step-by-Step Guide | MongoDB](https://www.mongodb.com/resources/products/compatibilities/mongodb-and-django)
- 🎥 [MongoDB + Python #1 - CRUD, Relationships and More - YouTube](https://www.youtube.com/watch?v=UpsZDGutpZc)
- 🔗 [Connect to a MongoDB Database Using Node.js | MongoDB](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)
- 🎥 [NestJS with MongoDB & Mongoose Tutorial - YouTube](https://www.youtube.com/watch?v=dJz94r5C3QA)
- 📖 [Manage Connections with AWS Lambda - Atlas - MongoDB Docs](https://www.mongodb.com/docs/atlas/manage-connections-aws-lambda/)

---

### Task 3: Connect Next.js to Node.js Backend

- [ ] **Status:** Not Started

**Description:**
Build a simple API endpoint in Node.js and fetch data from it using Next.js client-side or server-side data fetching.

**✅ Definition of Done:**
> The Next.js application displays a message or data object fetched from a successfully running Node.js Express API endpoint.

**Concepts:** `Full-Stack Integration` `API Calls` `Data Flow`

**📚 Resources:**
- 🎥 [Building APIs with Next.js - YouTube](https://www.youtube.com/watch?v=zm2_xFyFAHI)
- 🔗 [Hang in There! (A solution to socket hang up) | by Elizabeth Zevin ...](https://medium.com/@ehzevin/hang-in-there-a-solution-to-socket-hang-up-5e04c600fa89)
- 🎥 [How to Create a Express/Node + React Project with Vite - YouTube](https://www.youtube.com/watch?v=mKmxc8TcWQ8)
- 🔗 [How to integrate a Express Backend with an Auth0 frontend for ...](https://community.auth0.com/t/how-to-integrate-a-express-backend-with-an-auth0-frontend-for-controlled-access-to-server-routes/123126)

---

## 📊 Progress

Track your progress by checking off tasks as you complete them!

When done with this phase, merge to `main` and move to `phase-2`.

---
*Generated by [RoadmapFlow](https://roadmapflow.com) 🚀*
