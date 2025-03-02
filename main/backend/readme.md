my-backend/
├── package.json
├── tsconfig.json
├── .env                    // Environment variables (e.g., AWS credentials, PORT)
├── src/
│   ├── server.ts           // Main server setup (Express + Apollo Server)
│   ├── schema/
│   │   ├── typeDefs.ts     // GraphQL type definitions
│   │   ├── resolvers.ts    // GraphQL resolvers
│   │   └── index.ts        // Optional: re-export typeDefs & resolvers
│   ├── services/
│   │   └── s3Service.ts    // AWS S3 integration logic
│   ├── utils/
│   │   └── fileUtils.ts    // Utility functions for file handling
│   └── config/
│       └── constants.ts    // Application constants or configuration
└── dist/                   // Compiled JS output (after tsc)

## Setup Instruction

Using node 23.90, you can use nvm to do it.

Create

```
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
npm run start
```
