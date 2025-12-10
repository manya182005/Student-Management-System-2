const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./Connection/db");
const mongoose = require("mongoose");
const Student = require("./model/Student");
app.use(express.json());
app.use(cors());

const PORT = 3000;

ConnectDB();

app.post("/api/student",async(req,res)=>{
try{
const newStudent = (req.body);
const student = new Student(newStudent);
await student.save()
res.status(200).json({
  message: "Student created successfully",
  student: student,
})



}
catch(error){
  console.log("Error creating Student",error);
}
})
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      message: "Students fetched successfully",
      students: students,
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: "Error fetching students",
       error: error.message,
    });
  }
});
app.delete("/api/student/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      student: deletedStudent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error deleting student",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("Application is running in PORT", PORT);
});