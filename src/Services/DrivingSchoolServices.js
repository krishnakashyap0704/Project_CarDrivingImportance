import axios from "axios";
// import { BASE_URL, PORT_NO } from "./ApiConstants";

export async function saveStudent(formData){
    try{
        const response =await axios.post("http://127.0.0.1:4100/DrivingSchoolCollection", formData);
        console.log(response);
    }catch(error){
        console.log(error);
    } 
}