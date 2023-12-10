import axios from "axios";
import { BASE_URL, PORT_No} from "./ApiConstants";

export async function saveRegister(formData){
    try {
        const response=await axios.post(`${BASE_URL}${PORT_No}/Register`,formData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export async function LoginProfile(Credential){
    const response=await axios.post(`${BASE_URL}${PORT_No}/LoginProfile`,Credential);
    return response.data;
};