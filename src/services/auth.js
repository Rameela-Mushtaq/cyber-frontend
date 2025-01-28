import { backend_url } from "../utils/config";
import axios from 'axios'


export const userLogin = async (email, password) => {
    try {
        const response = await axios.post(`${backend_url}/api/user/login`, {email, password});
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred during Login";
        throw new Error(errorMessage);
    }
};

export const userRegister = async (formData) => {
    try {
        const response = await axios.post(`${backend_url}/api/user/register`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred during Registration";
        throw new Error(errorMessage);
    }
};

export const verifyOtp = async (email, otp) => {
    try {
        const response = await axios.post(`${backend_url}/api/user/verifyOtp`, { email, otp });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error verifying OTP";
        throw new Error(errorMessage);
    }
};









































// export const userRegister = async (name, email, password) => {
//     try {
//         const response = await axios.post(`${backend_url}/api/user/register`, {name, email, password});
//         return response.data;
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "An error occurred during Registration";
//         throw new Error(errorMessage);
//     }
// };
