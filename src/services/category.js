import { backend_url } from "../utils/config";
import axios from 'axios'



// Get all categories
export const getCategories = async () => {
    try {
        const response = await axios.get(`${backend_url}/api/category/getCategory`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in fetching categories";
        throw new Error(errorMessage);
    }
};

// Create a new category (with image upload)
export const createCategory = async (formData) => {
    try {
        const response = await axios.post(`${backend_url}/api/category/addCategory`, formData, {
            headers: { "Content-Type": "multipart/form-data" }, // Ensure file upload works
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in creating category";
        throw new Error(errorMessage);
    }
};

// Update a category (with optional image upload)
export const updateCategory = async (id, formData) => {
    try {
        const response = await axios.put(`${backend_url}/api/category/updateCategory/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in updating category";
        throw new Error(errorMessage);
    }
};

// Delete a category
export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`${backend_url}/api/category/deleteCategory/${id}`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error in deleting category";
        throw new Error(errorMessage);
    }
};
