const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://manyashreemanya775_db_user:kzo7mHAOknj3pLo1@studentmanagement.srj61eu.mongodb.net/?appName=StudentManagement"
    );
    console.log("Connected Mongodb");
  } catch (error) {
    console.log("Error Connecting to Mongodb", error);
  }
}

module.exports = ConnectDB;