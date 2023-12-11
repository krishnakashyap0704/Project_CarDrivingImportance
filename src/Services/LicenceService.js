import axios from "axios";
import { BASE_URL, PORT_No } from "./ApiConstants";

export async function savePerson(formData){
    try{
        const response =await axios.post("http://127.0.0.1:4100/LicenceDataCollection", formData);
        console.log(response);
    }catch(error){
        console.log(error);
    } 
};

export async function fetchDetails(vehicleNumber){
    try{
        const response =await axios.get(`${BASE_URL}${PORT_No}/LicenceDataCollection/${vehicleNumber}`);
        return response;
    }catch(error){
        console.log(error);
    }
}
