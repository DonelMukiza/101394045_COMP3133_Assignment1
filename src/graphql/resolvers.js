const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Employee = require("../models/Employee");
require("dotenv").config();

const resolvers = {
  Query: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error("User not found");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error("Invalid password");

      return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    },

    getAllEmployees: async () => await Employee.find(),
    getEmployeeByEid: async (_, { id }) => await Employee.findById(id),
    searchEmployeeByDesignation: async (_, { department }) => await Employee.find({ department }),
  },

  Mutation: {
    signup: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return await User.create({ username, email, password: hashedPassword });
    },

    addEmployee: async (_, args) => await Employee.create(args),
    updateEmployee: async (_, { id, ...updates }) => await Employee.findByIdAndUpdate(id, updates, { new: true }),
    deleteEmployee: async (_, { id }) => {
      await Employee.findByIdAndDelete(id);
      return "Employee deleted successfully";
    },
  },
};

module.exports = resolvers;
