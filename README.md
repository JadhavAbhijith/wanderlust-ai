# Phase 3: Phase 3: Advanced Data & Automation

⏱️ **Estimated Duration:** 1.5 weeks

---

## 🎯 Milestone 1: Supabase Embeddings for Semantic Search

### Task 1: Introduction to Vector Embeddings

- [ ] **Status:** Not Started

**Description:**
Learn about text embeddings, vector databases, and their application in semantic search and recommendation systems.

**✅ Definition of Done:**
> A Node.js script successfully generates a vector embedding for a sample text using an external AI model (e.g., Gemini API) and inserts it into a Supabase vector database table, then performs a basic similarity search against a pre-populated set of vectors.

**Concepts:** `Vector Embeddings` `Vector Databases` `Semantic Search` `Similarity Search`

**📚 Resources:**
- 🎥 [A Beginner's Guide to Vector Embeddings - YouTube](https://www.youtube.com/watch?v=NEreO2zlXDk)
- 🔗 [A Gentle Introduction to Vector Databases | Weaviate](https://weaviate.io/blog/what-is-a-vector-database)
- 🔗 [An intuitive introduction to text embeddings - Stack Overflow](https://stackoverflow.blog/2023/11/09/an-intuitive-introduction-to-text-embeddings/)
- 🎥 [RAG, semantic search, embedding, vector... Find out what the terms ... - YouTube](https://www.youtube.com/watch?v=orLGv2LgWDE)
- 💻 [Machine-Learning/Introduction to Vector Databases for AI and ...](https://github.com/xbeat/Machine-Learning/blob/main/Introduction%20to%20Vector%20Databases%20for%20AI%20and%20Machine%20Learning%20in%20Python.md)
- 🎥 [How to Build a Recommendation System with AI and Semantic Search](https://www.youtube.com/watch?v=SF1ZlRjVsxw)
- 🔗 [Implementing Semantic Search with Sequel and pgvector](https://www.ombulabs.com/blog/semantic-search.html)
- 💻 [introduction to vectorDB like Pinecone with langchain and openai ...](https://gist.github.com/alonsoir/8709ec0e151ffdabe4c0b73e4a9799dc)

---

### Task 2: Supabase Vector Setup

- [ ] **Status:** Not Started

**Description:**
Set up a Supabase project, enable `pgvector` extension, and create a table to store text and its vector embeddings.

**✅ Definition of Done:**
> A Supabase project is created, the `pgvector` extension is enabled, and a `documents` table exists with `id` (primary key), `content` (text), and `embedding` (vector(1536)) columns, successfully verified by querying its structure and test data.

**Concepts:** `Supabase` `pgvector` `Database Schema`

**📚 Resources:**
- 📖 [Supabase Docs](https://supabase.com/docs)
- 📖 [Supabase pgvector Extension Guide](https://supabase.com/docs/guides/database/extensions/pgvector)
- 🎥 [Supabase Postgres Vector DB Crash Course - YouTube](https://www.youtube.com/watch?v=cyPZsbO5i5U)
- 💻 [Contextual Retrieval System with Supabase Storage](https://gist.github.com/ruvnet/6959450aa7fe0e919ff52b05e3c26a44)
- 🎥 [PostgreSQL as VectorDB - Beginner Tutorial - YouTube](https://www.youtube.com/watch?v=Ff3tJ4pJEa4)
- 🔗 [Qa_chain.invoke({"question": data, "chat_history"](https://forum.langchain.com/t/qa-chain-invoke-question-data-chat-history-chat_history-error/1981)
- 🎥 [The missing pieces to your AI app (pgvector + RAG in prod) - YouTube](https://www.youtube.com/watch?v=ibzlEQmgPPY)
- 🔗 [Build your own Discord/Slack bot using Supabase and OpenAI's ...](https://www.windmill.dev/blog/knowledge-base-discord-bot)
- 💻 [supavec/supabase-ai: TypeScript SDK for building RAG ... - GitHub](https://github.com/supavec/supabase-ai)

---

### Task 3: Generate Embeddings with Gemini & Store in Supabase

- [ ] **Status:** Not Started

**Description:**
Use the Gemini API's embedding models to generate vector embeddings for travel-related text (e.g., destination descriptions) and store them in your Supabase `pgvector` table via your Node.js backend.

**✅ Definition of Done:**
> A Node.js backend endpoint successfully receives travel-related text, uses the Gemini API to generate its vector embedding, and stores both the original text and its embedding in a Supabase pgvector table.

**Concepts:** `Gemini Embeddings` `Data Ingestion` `Supabase Integration` `Node.js Backend`

**📚 Resources:**
- 📖 [Gemini Embeddings Guide](https://ai.google.dev/docs/embeddings_guide)
- 💻 [kedaroo/codename-pixa: Natural Language Search Engine ... - GitHub](https://github.com/kedaroo/codename-pixa)
- 💻 [winn/thaifloodhelp - GitHub](https://github.com/winn/thaifloodhelp)
- 📖 [Dimensions option for Embeddings Google Vertex and Embeddings ...](https://community.n8n.io/t/dimensions-option-for-embeddings-google-vertex-and-embeddings-google-gemini-nodes/124300)
- 💻 [danblah/n8n-nodes-google-gemini-embeddings-extended - GitHub](https://github.com/danblah/n8n-nodes-google-gemini-embeddings-extended)
- 🎥 [Build high-performance RAG using just PostgreSQL (Full Tutorial ...](https://www.youtube.com/watch?v=hAdEuDBN57g)
- 📖 [[Feature Request/Question] Support for higher-dimension Gemini ...](https://community.n8n.io/t/feature-request-question-support-for-higher-dimension-gemini-embedding-node-e.g.-gemini-embedding-exp-03-07-3072d/136292)
- 🎥 [How to Set up Supabase and Postgres for RAG Agent with Memory ...](https://www.youtube.com/watch?v=JjBofKJnYIU&vl=en)
- 🎥 [Effortless RAG in n8n - Use ALL Your Files (PDFs, Excel, and More ...](https://www.youtube.com/watch?v=T1ZKEmDN8AA)

---

### Task 4: Implement Semantic Search

- [ ] **Status:** Not Started

**Description:**
Query Supabase using a user-provided text's embedding to find semantically similar travel items, demonstrating personalized recommendations.

**✅ Definition of Done:**
> The application successfully queries Supabase with a user-provided text's embedding and displays a list of semantically similar travel items on the UI.

**Concepts:** `Semantic Search` `Supabase Querying` `Recommendation Systems`

**📚 Resources:**
- 💻 [openai-cookbook/examples/vector_databases/supabase/semantic-search.mdx](https://github.com/openai/openai-cookbook/blob/main/examples/vector_databases/supabase/semantic-search.mdx)
- 📖 [Supabase Guide: Automatic Embeddings](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/automatic-embeddings.mdx)
- 🎥 [Build a Chatbot with Next.js, LangChain, OpenAI, and Supabase Vector](https://www.youtube.com/watch?v=Tt45NrVIBn8)
- 🎥 [Build a Chatbot With Custom Data Using ChatGPT and Supabase](https://www.youtube.com/watch?v=B6Vxr-ijjrs)
- 🔗 [Build your own Discord/Slack bot using Supabase and OpenAI's Embeddings](https://www.windmill.dev/blog/knowledge-base-discord-bot)
- 💻 [supabase-community/natural-db - Semantic Memory (Vector Search using pgvector)](https://github.com/supabase-community/natural-db)
- 🎥 [Semantic search for relevant recommendations](https://www.youtube.com/watch?v=3YzM7-4GZ30)
- 🎥 [18 Months of Pgvector Learnings in 47 Minutes (Tutorial)](https://www.youtube.com/watch?v=Ua6LDIOVN1s)

---

## 🎯 Milestone 2: n8n Workflow Automation

### Task 1: n8n Introduction and Setup

- [ ] **Status:** Not Started

**Description:**
Learn about n8n's visual workflow editor, nodes, triggers, and actions. Set up a local n8n instance or use n8n Cloud.

**✅ Definition of Done:**
> An n8n instance (local or cloud) is successfully set up and accessible via a web browser, and a new workflow containing a trigger and an action node has been created and executed successfully.

**Concepts:** `n8n` `Workflow Automation` `No-code/Low-code` `Triggers` `Nodes`

**📚 Resources:**
- 📖 [n8n Documentation](https://n8n.io/docs/)
- 💻 [n8n-io/n8n: Fair-code workflow automation platform with ... - GitHub](https://github.com/n8n-io/n8n)
- 🎥 [n8n Quick Start Tutorial: Build Your First Workflow [2025] - YouTube](https://www.youtube.com/watch?v=4cQWJViybAQ)
- 🎥 [How to Build Your Very First Workflow in n8n | n8n Tutorial - YouTube](https://www.youtube.com/watch?v=380Z8cZyFc8)
- 🎥 [N8N Tutorial: Building N8N Ai Agents (Beginner to Pro) - YouTube](https://www.youtube.com/watch?v=lSwMtsm6oDU)
- 🎥 [How to use n8n ( LowCode Workflow Automation ) For Beginners ...](https://www.youtube.com/watch?v=_EdRzDY9nh4)
- 🔗 [N8n Vs Zapier 2025 Open-Source Workflow Automation Alternative ...](https://moiid.com/en/n8n-vs-zapier-2025-best-open-source-automation-tool-for-advanced-workflows-and-cost-savings/)
- 🎥 [n8n Tutorial For Beginners: How To Set Up AI Agents That Save You ...](https://www.youtube.com/watch?v=RRIgP3Msgqs)
- 💻 [czlonkowski/n8n-mcp: A MCP for Claude Desktop / Claude ... - GitHub](https://github.com/czlonkowski/n8n-mcp)

---

### Task 2: Connect n8n to External Services

- [ ] **Status:** Not Started

**Description:**
Create a simple workflow in n8n that consumes data from a webhook, processes it, and sends it to another service (e.g., email notification, Google Sheet).

**✅ Definition of Done:**
> An n8n workflow successfully receives a test payload via a webhook trigger and then sends specific data extracted from that payload to a configured external service (e.g., an email address or a Google Sheet row).

**Concepts:** `Webhooks` `API Integration` `Data Processing` `Email Automation`

**📚 Resources:**
- 🎥 [Step-by-Step: N8N Webhooks (From Beginner to Pro) - YouTube](https://www.youtube.com/watch?v=lK3veuZAg0c)
- 🎥 [Webhooks Made Easy With N8n For Beginners! - YouTube](https://www.youtube.com/watch?v=Hn2JsIpiJfs)
- 📖 [Introduction to N8N - Docs & Tutorials - n8n Community](https://community.n8n.io/t/introduction-to-n8n/230666)
- 💻 [freddy-schuetz/ai-launchkit: AI LaunchKit - Complete self ... - GitHub](https://github.com/freddy-schuetz/ai-launchkit)
- 🎥 [The Ultimate Guide to Building Production-Ready n8n Workflows ...](https://www.youtube.com/watch?v=1yZq4uEtm-k)
- 📖 [Setting up OpenAI API integration with Google Home via n8n ...](https://community.latenode.com/t/setting-up-openai-api-integration-with-google-home-via-n8n-automation-platform/32934)
- 📖 [New plugin: Post Webhook - Send notes to any Webhook endpoint ...](https://forum.obsidian.md/t/new-plugin-post-webhook-send-notes-to-any-webhook-endpoint/92647)

---

### Task 3: Automate Travel-Related Tasks

- [ ] **Status:** Not Started

**Description:**
Design n8n workflows for scenarios like sending daily travel tips to users, generating a PDF itinerary on trip creation, or notifying users about price drops for saved destinations.

**✅ Definition of Done:**
> A fully functional n8n workflow is deployed and tested, successfully automating at least one travel-related task (e.g., sending daily travel tips, generating a PDF itinerary, or notifying about price drops), demonstrating the intended outcome.

**Concepts:** `Automation Scenarios` `Real-world Applications` `Workflow Design`

**📚 Resources:**
- 🎥 [ChatGPT Agent Mode Use Cases You Must Know - YouTube](https://www.youtube.com/watch?v=ao4rbtZo4Rg)
- 💻 [nusquama/n8nworkflows.xyz: N8N Workflows Catalog - GitHub](https://github.com/nusquama/n8nworkflows.xyz)
- 🎥 [The 9 Best Ways to Scrape Any Website in N8N - YouTube](https://www.youtube.com/watch?v=y-eEbmNeFZo)
- 🎥 [N8N Tutorial: Build N8N Whatsapp Chatbot! (Easy Method) - YouTube](https://www.youtube.com/watch?v=DU2hwUsMBBM)
- 💻 [MCP Server Hub Database | Awesome MCP Servers for ... Everything](https://gist.github.com/devinschumacher/fc434091c6414acc098f58b18a0146d8)
- 💻 [czlonkowski/n8n-mcp: A MCP for Claude Desktop / Claude ... - GitHub](https://github.com/czlonkowski/n8n-mcp)
- 🔗 [A practical guide to Google Analytics integrations with n8n - eesel AI](https://www.eesel.ai/blog/google-analytics-integrations-with-n8n)

---

## 📊 Progress

Track your progress by checking off tasks as you complete them!

When done with this phase, merge to `main` and move to `phase-4`.

---
*Generated by [RoadmapFlow](https://roadmapflow.com) 🚀*
