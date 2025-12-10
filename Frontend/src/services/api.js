import axios from 'axios';

const API = axios.create({
    baseURL: "https://localhost:3000/api",
})

export const getAllStudents =  async () => {
    try {
        const response = await API.get("/students");
        console.log("responce",response);


    }
    catch (error) {
        console.log("Enter getting students", error);

    }
}