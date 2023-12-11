import axios from "axios";
import { BASE_URL } from "./ApiConstants";
import { PORT_No } from "./ApiConstants";

export async function saveStudent(formData){
    try{
        const response =await axios.post("http://127.0.0.1:4100/DrivingSchoolCollection", formData);
        console.log(response);
    }catch(error){
        console.log(error);
    } 
};

export async function DetailsOfLicence(contact){
    try{
        const response =await axios.get(`${BASE_URL}${PORT_No}/DrivingSchoolCollection/${contact}`);
        return response;
    }catch(error){
        console.log(error);
    }
}