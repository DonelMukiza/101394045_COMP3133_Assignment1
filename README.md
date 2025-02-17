# COMP3133 Assignment 1 - Employee Management System

##  Project Overview
This project is a **GraphQL-based Employee Management System** built with **Node.js, Express, Apollo Server, and MongoDB**. It allows users to sign up, log in, and manage employee records using GraphQL queries and mutations.

## Technologies Used
- **Node.js** - Server-side runtime
- **Express.js** - Web framework for Node.js
- **Apollo Server** - GraphQL API implementation
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT-based authentication
- **dotenv** - Environment variables
- **GraphiQL** - API testing

## Installation & Setup
### ** Clone the Repository**
```bash
clone https://github.com/your-github-username/101394045_COMP3133_Assignment1.git
cd 101394045_COMP3133_Assignment1
```

### **Install Dependencies**
```bash
npm install
```

### **Set Up Environment Variables**
Create a `.env` file and add the following:
```
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/comp3133_101394045_assigment1
JWT_SECRET=your_secret_key
```

### **Start the Server**
```bash
npm start
```
Server runs on: `http://localhost:4000/graphql`

##  GraphQL API Endpoints
### ** Authentication**
- **Sign Up (Mutation)**
```graphql
mutation {
  signup(username: "adminuser", email: "admin@example.com", password: "password123") {
    id
    username
    email
  }
}
```
- **Login (Query)**
```graphql
query {
  login(username: "adminuser", password: "password123")
}
```

### **Employee Management**
- **Get All Employees (Query)**
```graphql
query {
  getAllEmployees {
    id
    first_name
    last_name
    department
  }
}
```
- **Add New Employee (Mutation)**
```graphql
mutation {
  addEmployee(
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice@example.com",
    gender: "Female",
    designation: "HR Manager",
    salary: 5000,
    date_of_joining: "2022-05-15",
    department: "HR",
    employee_photo: "alice.jpg"
  ) {
    id
    first_name
    last_name
    department
  }
}
```
- **Search Employee by ID (Query)**
```graphql
query {
  getEmployeeByEid(id: "67b18bacb7ea04eccd65a0f2") {
    id
    first_name
    last_name
    email
    designation
  }
}
```

## Testing Instructions
1. **Use Postman or GraphiQL(I used GraphiQL because Postman won't run on my computer)** to test queries and mutations.
2. **Ensure MongoDB Atlas is connected** before testing.
3. **Take API response screenshots** for submission.

## Submission Requirements
-  **MongoDB Console Screenshots** (Database, Collections, Sample Data)
-  **Screenshots of API Testing**
-  **GitHub Repository Link**
-  **Project ZIP File** (Remove `node_modules` before zipping)
-  **Sample User Credentials** (`adminuser/password123`)

## GitHub Repository
https://github.com/DonelMukiza/101394045_COMP3133_Assignment1.git


