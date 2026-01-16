# Phase 4: Phase 4: Capstone Project - Wanderlust AI Planner

⏱️ **Estimated Duration:** 2 weeks

---

## 🎯 Milestone 1: Integrate & Build Main Features

### Task 1: Design Application Architecture

- [ ] **Status:** Not Started

**Description:**
Plan the overall structure of the 'Wanderlust AI Planner' app, defining components, API endpoints, and data models.

**✅ Definition of Done:**
> A comprehensive architecture document exists, outlining all major application components, their interactions, defined API endpoints for the backend, and detailed data models for MongoDB and Supabase, enabling clear development implementation.

**Concepts:** `Architecture Design` `System Design` `Data Modeling`

**📚 Resources:**
- 🎥 [Clean Architecture in Next.js: A Complete Implementation Guide ...](https://www.youtube.com/watch?v=jJVAla0dWJo)
- 💻 [A curated list of awesome MDC files for your next vibe project.](https://github.com/benallfree/awesome-mdc)
- 🔗 [React Trends in 2024](https://www.robinwieruch.de/react-trends-2024/)
- 🔗 [Web framework](https://grokipedia.com/page/Web_framework)
- 🔗 [A Simple Next.js API Folder Structure - ThatSoftwareDude.com](https://www.thatsoftwaredude.com/content/12869/a-simple-nextjs-api-folder-structure)
- 💻 [ruvnet/claude.md at main · ruvnet/ruvnet · GitHub](https://github.com/ruvnet/ruvnet/blob/main/claude.md)
- 🎥 [The Ultimate FastAPI + React Full Stack Project (Deploy This and ...](https://www.youtube.com/watch?v=_1P0Uqk50Ps)
- 🎥 [Node.js, Express, Mongo DB & More The Complete Bootcamp 2021 ...](https://archive.org/details/node.js-express-mongo-db-more-the-complete-bootcamp-2021)

---

### Task 2: Build Core UI with Next.js

- [ ] **Status:** Not Started

**Description:**
Develop the main user interface for the travel planner, including pages for destination search, trip creation, user dashboard, and profile management.

**✅ Definition of Done:**
> The Next.js application successfully renders distinct pages for destination search, trip creation, user dashboard, and profile management, each accessible via navigation and displaying its specific title and placeholder content.

**Concepts:** `UI/UX Design` `Next.js Components` `Frontend Development`

**📚 Resources:**
- 🎥 [Build and Deploy a Full Stack React Admin Dashboard with Tables ...](https://www.youtube.com/watch?v=xZ1ba-RLrjo)
- 🔗 [reactjs - Setting up the home page on Next.js - Stack Overflow](https://stackoverflow.com/questions/63082929/setting-up-the-home-page-on-next-js)
- 💻 [PackRat-AI/PackRat: PackRat is a versatile adventure ... - GitHub](https://github.com/PackRat-AI/PackRat)
- 🔗 [Deep Dive: Caching and Revalidating · vercel next.js · Discussion ...](https://github.com/vercel/next.js/discussions/54075)
- 🎥 [How To Make Full Stack Hotel Booking App Using MERN | Hotel ...](https://www.youtube.com/watch?v=ubM9cX8G_gk)
- 🎥 [Travel Website: HTML & CSS | Project 1 - YouTube](https://www.youtube.com/watch?v=TyJ7ui110Ek)
- 📖 [How to preserve client state after loginWithRedirect? - Auth0 ...](https://community.auth0.com/t/how-to-preserve-client-state-after-loginWithRedirect/95963)
- 🔗 [Custom Layout for Specific Routes in tanstack/router #1102](https://github.com/TanStack/router/discussions/1102)

---

### Task 3: Develop Comprehensive Backend APIs

- [ ] **Status:** Not Started

**Description:**
Create robust Node.js/Express APIs for managing users (Firebase), travel plans (MongoDB), interacting with Gemini (suggestions), and Supabase (semantic search).

**✅ Definition of Done:**
> The Node.js/Express backend provides distinct, authenticated API endpoints for user management via Firebase, CRUD operations on travel plans stored in MongoDB, AI-powered travel suggestions using the Gemini API, and semantic search queries leveraging Supabase vector embeddings.

**Concepts:** `Backend Development` `API Design` `Data Persistence` `Microservices`

**📚 Resources:**
- 💻 [freeCodeCamp/awesome-quincy-larson-emails: This ... - GitHub](https://github.com/freeCodeCamp/awesome-quincy-larson-emails)
- 🎥 [How to Build an AI SQL Agent with n8n to Query Databases ...](https://www.youtube.com/watch?v=mfj1WGjJuWQ)
- 💻 [modelcontextprotocol/servers: Model Context Protocol ... - GitHub](https://github.com/modelcontextprotocol/servers)
- 🔗 [MCP Server Hub Database | Awesome MCP Servers for ... Everything](https://gist.github.com/devinschumacher/fc434091c6414acc098f58b18a0146d8)
- 💻 [viktorbezdek/awesome-github-projects: Curated list of ... - GitHub](https://github.com/viktorbezdek/awesome-github-projects)

---

## 🎯 Milestone 2: Advanced Features & Automation

### Task 1: Implement AI-Powered Recommendations

- [ ] **Status:** Not Started

**Description:**
Use Supabase embeddings to provide personalized destination or activity recommendations based on user preferences or past trips.

**✅ Definition of Done:**
> When a logged-in user accesses their dashboard, a dedicated section displays a list of 3-5 personalized destination or activity recommendations, generated by comparing user and destination embeddings via Supabase vector search.

**Concepts:** `Personalization` `Recommendation Engine` `Vector Search`

**📚 Resources:**
- 🎥 [Advanced Vector Database Techniques That Power YouTube's ...](https://www.youtube.com/watch?v=gWBsSMehyJo)
- 🎥 [Build your own AI Shopping App with React Native and Supabase ...](https://www.youtube.com/watch?v=tFnNBhr0WTw)
- 🔗 [Revolutionizing Vector Similarity with Supabase pgvector](https://myscale.com/blog/supabase-pgvector-revolutionizes-vector-similarity-calculations/)
- 🎥 [Build a Chatbot With Custom Data Using ChatGPT and Supabase ...](https://www.youtube.com/watch?v=B6Vxr-ijjrs)
- 🎥 [ClippyGPT - How I Built Supabase's OpenAI Doc Search ...](https://www.youtube.com/watch?v=Yhtjd7yGGGA)
- 🎥 [Use Hugging Face AI models with Supabase - YouTube](https://www.youtube.com/watch?v=RJccSbJ9Go4)
- 💻 [supabase/supabase: The Postgres development platform ... - GitHub](https://github.com/supabase/supabase)
- 💻 [Vector type needed for storing OpenAI embeddings · prisma prisma ...](https://github.com/prisma/prisma/discussions/18220)

---

### Task 2: Integrate n8n Workflows for Notifications/Updates

- [ ] **Status:** Not Started

**Description:**
Connect key application events (e.g., new trip created, specific date approaching) to n8n webhooks to trigger automated emails, push notifications, or data syncs.

**✅ Definition of Done:**
> When a new trip is successfully created in the application, an n8n workflow is triggered, and a confirmation email is automatically sent to the trip creator's registered email address.

**Concepts:** `Event-Driven Architecture` `Automation Integration` `Webhooks`

**📚 Resources:**
- 🎥 [Using webhooks in n8n (parameters, responses and triggers ...](https://www.youtube.com/watch?v=IvUYJQkf6sA)
- 🎥 [How to Connect Slack to n8n (2025) (Step-by-Step) - YouTube](https://www.youtube.com/watch?v=qk5JH6ImK0I)
- 📖 [How to Launch a Phantom from n8n Using HTTP Requests ...](https://support.phantombuster.com/hc/en-us/articles/27979646341906-How-to-Launch-a-Phantom-from-n8n-Using-HTTP-Requests)
- 🎥 [n8n at Scale - Episode 1: Unlocking Slack's Potential with n8n ...](https://www.youtube.com/watch?v=WneT4gliSbY)
- 📖 [How to Send PhantomBuster Data to a Spreadsheet Using n8n ...](https://support.phantombuster.com/hc/en-us/articles/27979681179282-How-to-Send-PhantomBuster-Data-to-a-Spreadsheet-Using-n8n)
- 🔗 [n8n AI Phone Automation: Self-Hosted Workflow Setup 2026 ...](https://www.getnextphone.com/blog/n8n-nextphone-integration)
- 📖 [Build Custom Workflows with Unipile API - Unipile](https://www.unipile.com/no-code-builders/)
- 🔗 [A practical guide to WordPress integrations with n8n - eesel AI](https://www.eesel.ai/blog/wordpress-integrations-with-n8n)
- 🎥 [PT 5 UsWork.ai - Supabase❤️N8N = Emails & Webhooks - YouTube](https://www.youtube.com/watch?v=BVnXb4d-ypw)
- 🎥 [Step-by-Step: N8N Webhooks (From Beginner to Pro) - YouTube](https://www.youtube.com/watch?v=lK3veuZAg0c)
- 🔗 [Send Chat Message Notifications from Tawk.to to Gmail – Yastime](https://yastime.net/en/blogs/n8n-workflows/send-chat-message-notifications-from-tawk-to-to-gmail)
- 💻 [enescingoz/awesome-n8n-templates: Supercharge your ... - GitHub](https://github.com/enescingoz/awesome-n8n-templates)
- 🎥 [n8n Quick Start Tutorial: Build Your First Workflow [2025] - YouTube](https://www.youtube.com/watch?v=4cQWJViybAQ)
- 🔗 [How to Use Webhooks in SiteGuru for Automation | SiteGuru](https://www.siteguru.co/seo-academy/webhooks)
- 🔗 [you're watching Stripe process billions while ignoring the easiest ...](https://x.com/paoloanzn/status/1973802914562105796)
- 🔗 [Help with Automating Daily Security Report (QuickChart + Wazuh + ...](https://community.n8n.io/t/help-with-automating-daily-security-report-quickchart-wazuh-n8n/191903)

---

### Task 3: Refine UI/UX and Error Handling

- [ ] **Status:** Not Started

**Description:**
Improve the user experience with better navigation, loading states, form validations, and comprehensive error handling across the application.

**✅ Definition of Done:**
> The application consistently displays loading states during data fetching, prevents invalid form submissions with specific real-time error messages, shows user-friendly alerts for all backend and network errors, and ensures seamless navigation with clear visual feedback for current page status.

**Concepts:** `UI/UX Refinement` `Error Handling` `Form Validation` `User Feedback`

**📚 Resources:**
- 🎥 [Error Handling in React (Complete Tutorial) - YouTube](https://www.youtube.com/watch?v=OQQAv8t3bfc)
- 💻 [arnobt78/Ecommerce-Platform--NextJS-Serverless ... - GitHub](https://github.com/arnobt78/Ecommerce-Platform--NextJS-Serverless-FullStack)
- 💻 [Bolt.new Mega Prompt Template: A concise guide for generating full ...](https://gist.github.com/iamnolanhu/d0f6b04cea7b83e36fc83895e1cef7d1)
- 🔗 [Progressive React: When Your App Still Works with JS Disabled ...](https://casual-programming.com/20250726_progressive-react-when-your-app-still-works-with-js-disabled/)
- 🎥 [Build a COMPLETE React Admin Dashboard App | React, Material ...](https://www.youtube.com/watch?v=wYpCWwD1oz0)
- 🎥 [How To Make Sign In & Sign Up Form Using React JS | ReactJS ...](https://www.youtube.com/watch?v=8QgQKRcAUvM)
- 💻 [Server-driven UI (or Backend driven UI) strategies ...](https://github.com/MobileNativeFoundation/discussions/discussions/47)
- 💻 [Deep Dive: Caching and Revalidating · vercel next.js · Discussion ...](https://github.com/vercel/next.js/discussions/54075)

---

## 🎯 Milestone 3: Deployment & Final Review

### Task 1: Prepare for Deployment

- [ ] **Status:** Not Started

**Description:**
Optimize the application for production, including environment variables, build processes, and security considerations.

**✅ Definition of Done:**
> The application successfully builds for production, securely accesses all necessary environment variables, and functions correctly when tested locally in a production-like environment.

**Concepts:** `Deployment Preparation` `Environment Variables` `Build Process` `Security Best Practices`

**📚 Resources:**
- 🔗 [How to Prepare Your Node.js Application for Production](https://www.capitalnumbers.com/blog/prepare-node-js-application-for-production/)
- 🔗 [Next.js environment variables | Refine](https://refine.dev/blog/next-js-environment-variables/)
- 🎥 [Dockerize Next.js app for Development and Production | Step By ...](https://www.youtube.com/watch?v=ucTmWale9SI)
- 🔗 [What Is a Dockerfile? Complete Guide to Docker Image Creation ...](https://sealos.io/blog/what-is-a-dockerfile)
- 🔗 [Why and how to put secrets in environment variables in Node.js ...](https://stackoverflow.com/questions/61669613/why-and-how-to-put-secrets-in-environment-variables-in-node-js)
- 💻 [What is the best way to use NextJS with docker? · vercel next.js ...](https://github.com/vercel/next.js/discussions/16995)
- 💻 [Allow runtime environment variables in middleware · vercel next.js ...](https://github.com/vercel/next.js/discussions/36338)
- 🔗 [How to Authenticate with Next.js and Auth0: A Guide for Every ...](https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/)

---

### Task 2: Deploy Next.js Frontend

- [ ] **Status:** Not Started

**Description:**
Deploy the Next.js application to a platform like Vercel or Netlify.

**✅ Definition of Done:**
> The Next.js application is successfully deployed to a cloud platform (Vercel or Netlify) and is publicly accessible via a unique URL, displaying the main application interface without errors.

**Concepts:** `Vercel` `Netlify` `Frontend Deployment`

**📚 Resources:**
- 📖 [Deploying Next.js with Vercel](https://vercel.com/docs/deployments/overview)
- 🔗 [Deploy a Next.js 13 app to AWS with Amplify Hosting | Front-End ...](https://aws.amazon.com/blogs/mobile/amplify-next-js-13/)
- 🎥 [How To Deploy a NextJS App To Vercel (EASY AND QUICK ...](https://www.youtube.com/watch?v=2HBIzEx6IZA)
- 🎥 [Deploying Next.js to Vercel - YouTube](https://www.youtube.com/watch?v=AiiGjB2AxqA)
- 🎥 [Deploying Next.js To AWS Just Got MUCH BETTER! - YouTube](https://www.youtube.com/watch?v=JxaOW3iDSS4)
- 🎥 [Deploy Next.JS Frontend with AWS Amplify and AWS CodeCommit ...](https://www.youtube.com/watch?v=A0WOnRJ4uZI)
- 🎥 [How To Host Next.js In 2026 (VPS, Self-Hosting, Managed) - YouTube](https://www.youtube.com/watch?v=ze1zrmoElrs)
- 💻 [Deploying TurboRepo with Next.js Frontend and Express.js ...](https://github.com/vercel/turborepo/discussions/8459)

---

### Task 3: Deploy Node.js Backend

- [ ] **Status:** Not Started

**Description:**
Deploy the Node.js backend API to a cloud provider like Render, Heroku, or AWS EC2/Lightsail.

**✅ Definition of Done:**
> The Node.js backend API is deployed to a cloud provider, publicly accessible via a unique URL, and successfully responds to a basic GET request (e.g., health check or root endpoint) without errors.

**🤔 Decision Point:**
> Which cloud provider will you choose for deploying your Node.js backend?

Options:
- **Render**: Render is a unified cloud platform for building and running all your apps and websites. It offers a developer-friendly experience with automatic deployments, managed databases, and built-in scalability for Node.js applications, often simpler for beginners.
- **Heroku**: Heroku is a cloud platform that lets companies build, deliver, monitor, and scale apps. It abstracts away much of the server management, allowing developers to focus on code. While its free tier has limitations, it's very beginner-friendly for Node.js deployments.
- **AWS EC2/Lightsail**: Amazon EC2 (Elastic Compute Cloud) provides configurable virtual servers in the cloud, giving you immense control but requiring more manual setup for server management, scaling, and security. AWS Lightsail is a simpler, more bundled option within AWS, akin to a VPS. This option offers power but a steeper learning curve.

**Concepts:** `Backend Deployment` `Cloud Hosting` `Render` `Heroku`

**📚 Resources:**
- 🎥 [Easily Deploy Full Stack Node.js Apps on AWS EC2 | Step-by-Step ...](https://www.youtube.com/watch?v=nQdyiK7-VlQ)
- 🎥 [Deploy NodeJS API to AWS (Full Step-by-Step Guide) - YouTube](https://www.youtube.com/watch?v=b_x_Ap6icXQ)
- 📖 [How to deploy frontend and backend on Render? - Render](https://community.render.com/t/how-to-deploy-frontend-and-backend-on-render/7449)
- 🎥 [7 Ways to Deploy a Node.js App - YouTube](https://www.youtube.com/watch?v=uEVmD6n8Il0)
- 🔗 [The Complete Guide To Deploying JavaScript Applications - Part 1 ...](https://auth0.com/blog/the-complete-guide-to-deploying-javascript-applications-part-1/)
- 🎥 [How to Deploy an Express/Node App to Vercel | Express/Node ...](https://www.youtube.com/watch?v=ep5crSLD7y4)
- 🎥 [Deploying a backend on Vercel (APIs and Functions) - YouTube](https://www.youtube.com/watch?v=yLMODEUPJdU)

---

### Task 4: Conduct Final Testing and Review

- [ ] **Status:** Not Started

**Description:**
Perform end-to-end testing, ensure all features work as expected, and review code for best practices and maintainability.

**✅ Definition of Done:**
> All core features of the Wanderlust AI Planner function correctly end-to-end, confirmed by successful execution of all test suites and manual verification, and the entire codebase passes all linting, static analysis, and a final code review for best practices and maintainability.

**Concepts:** `End-to-End Testing` `Code Review` `Quality Assurance`

**📚 Resources:**
- 💻 [goldbergyoni/javascript-testing-best-practices ... - GitHub](https://github.com/goldbergyoni/javascript-testing-best-practices)
- 🔗 [Web Development - Search Envy](https://searchenvy.com/software/web-development/)
- 🔗 [Front End Engineer Job Description template and pdf with duties ...](https://100hires.com/front-end-engineer-job-description.html)
- 🔗 [The Four Pillars of a Good Software Developer](http://www.bradoncode.com/blog/2012/08/the-four-pillars-of-good-software.html)
- 💻 [A curated list of awesome MDC files for your next vibe project.](https://github.com/benallfree/awesome-mdc)
- 📖 [RFP — Explorer Maintenance - RFP Applications - Livepeer Forum](https://forum.livepeer.org/t/rfp-explorer-maintenance/3072)
- 🔗 [One Community Updates - Over 12 Years of Weekly Video & Written ...](https://onecommunityglobal.org/one-community-blog/)

---

## 📊 Progress

Track your progress by checking off tasks as you complete them!

When done with this phase, merge to `main` and move to `phase-5`.

---
*Generated by [RoadmapFlow](https://roadmapflow.com) 🚀*
