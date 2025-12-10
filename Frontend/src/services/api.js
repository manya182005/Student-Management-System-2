import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:3000/api",
})

export const getAllStudents =  async () => {
    try {
        const response = await API.get("/students");
        console.log("responce",response);
        console.log("responce data",response.data);
        console.log("responce data students",response.data.students);

        const studentsArray = response.data.students;
        for(let i=0;i<studentsArray.length;i++){
            console.log("Student Name:",studentsArray[i].name);
            console.log("Student Age:",studentsArray[i].age);
        }


    }
    catch (error) {
        console.log("Enter getting students", error);

    }
}