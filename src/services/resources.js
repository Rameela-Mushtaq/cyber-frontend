import { backend_url } from "../utils/config";
import axios from 'axios'


// Get All resources

export const getResources = async () => {
    try {
        const response = await axios.get(`${backend_url}/api/resource/getResources`)
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in fetching resources";
        throw new Error(errorMessage);
    }
}

//Create a new resources
export const createResource = async (formData) => {
    try {
        const response = await axios.post(`${backend_url}/api/resource/addResource`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in creating resources";
        throw new Error(errorMessage);
    }
}


//update a resource
export const updateResource = async (id, formData) => {
    try {
        const response = await axios.put(`${backend_url}/api/resource/updateResource/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        return (await response).data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in updating resources";
        throw new Error(errorMessage);
    }
}

export const deleteResource = async (id) => {
    try {
        const response = await axios.delete(`${backend_url}/api/resource/deleteResource/${id}`)
        return response.data
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in deleting resource";
        throw new Error(errorMessage);
    }
}