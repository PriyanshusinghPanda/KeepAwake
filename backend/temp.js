const express = require('express');
const mongoose = require('mongoose');
const User = require('./schema/Signup');

const uri = "mongodb+srv://keepawake_username:KeepAwake_password@keepawake-cluster.xhoqmvp.mongodb.net/?retryWrites=true&w=majority&appName=KeepAwake-Cluster";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully!");

    const newUser = new User({
      username: "testuser123",
      email: "testuser@example.com",
      password: "securepassword123",
      userType: "User"
    });

    const savedUser = await newUser.save();
    console.log("User created successfully:", savedUser);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed.");
  }
}



run().catch(console.dir);
