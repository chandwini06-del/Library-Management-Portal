# LibraDesk – Library Management & Book Circulation Portal

React + JSON Server capstone project for managing books, members, book issue/return operations and transaction history.

## Requirements
- Node.js LTS and npm
- VS Code (recommended)

## Run the project
1. Extract this ZIP and open the `Library_Management_Portal` folder in VS Code.
2. Open Terminal and run `npm install`.
3. In Terminal 1 run `npm run server`. Keep it running (JSON Server: http://localhost:3000).
4. Open a second terminal in the same folder and run `npm run dev`.
5. Open the localhost URL shown by Vite, usually http://localhost:5173.

## API endpoints
Books: GET /books, GET /books/:id, POST /books, PUT /books/:id, DELETE /books/:id.
Members: GET /members, GET /members/:id, POST /members, PUT /members/:id, DELETE /members/:id.
Transactions: GET /transactions, GET /transactions/:id, POST /transactions, PUT /transactions/:id, DELETE /transactions/:id.

## Features
- Dashboard counts from API data
- Books: add, edit, delete, search
- Members: add, edit, delete, search
- Issue only available books; book status becomes Issued
- Return issued books; book status becomes Available
- Transaction history with search and type filters
- React Router, components, hooks, forms, validation and API service layer

## Important
Keep both terminals open while using the app. Data is stored in `db.json`. Do not delete `db.json` if you want to keep your records.
