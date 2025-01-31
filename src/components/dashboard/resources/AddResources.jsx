import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import CustomInput2 from "../../share/CustomeInput2";
import { MdDelete } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createResource, updateResource } from "../../../services/resources";
import { getCategories } from '../../../services/category';

const AddResources = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { resource } = location.state || {};
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        category: "",
        title: resource?.title || '',
        description: resource?.description || '',
        link: resource?.link || '',
        video: resource?.video || null,
        picture: resource?.picture || null,
    });

    useEffect(() => {
        fetchCategories();
    }, []);


    const fetchCategories = async () => {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        }
    };

    const handleFileDelete = (fileType) => {
        setFormData((prev) => ({
            ...prev,
            [fileType]: null,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            setLoading(true);
            setError(null);
            setSuccess(null);

            const formDataToSend = new FormData();
            formDataToSend.append('category', formData.category);
            formDataToSend.append('title', formData.title);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('link', formData.link);
            if (formData.picture) {
                formDataToSend.append('picture', formData.picture);
            }
            if (formData.video) {
                formDataToSend.append('video', formData.video);
            }

            try {
                if (resource) {
                    // If a resource is passed (edit mode)
                    await updateResource(resource._id, formDataToSend);
                    setSuccess('Resource updated successfully!');
                } else {
                    // If no resource is passed (add mode)
                    await createResource(formDataToSend);
                    setSuccess('Resource added successfully!');
                }
                setFormData({ category: '', title: '', description: '', link: '', picture: null, video: null });
                setTimeout(() => {
                    navigate("/resources");
                }, 2000);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        
    };


    return (
        <div className='sm:p-8 p-6'>
            <div className='p-6 flex flex-col gap-7 bg-white rounded-lg border'>
                {/* heading */}
                <div className='flex justify-between sm:flex-row flex-col gap-3'>
                    <div className="lg:text-3xl md:text-2xl text-xl font-bold text-darkblue">
                        {resource ? 'Edit Resource' : 'Add Resource'}
                    </div>
                    <Link to='/category'>
                        <button className='text-white w-fit px-4 py-2 bg-purpleBg rounded-md'>
                            + Add Category
                        </button>
                    </Link>
                </div>


                {/* form     */}
                <form action="" className='' onSubmit={handleSubmit}>
                    <div className='flex flex-col md:gap-4 gap-2'>

                        {/* Category selector */}
                        <div>
                            <label htmlFor="" className='text-label pb-1 font-medium'>Category</label>

                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                    className='appearance-none p-5 w-full text-contents outline-none'>
                                    <option>Select Category</option>
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id}>
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                                <FaChevronDown className="absolute right-5 inset-y-6 text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                        {/* Title */}
                        <CustomInput2
                            label="Title"
                            type="text"
                            placeholder="Enter a title."
                            value={formData.title}
                            onChange={handleInputChange}
                            name="title"
                        />

                        {/* Description */}
                        <CustomInput2
                            label="Description"
                            placeholder="Provide a brief description of the training module."
                            value={formData.description}
                            onChange={handleInputChange}
                            name="description"
                            isTextarea={true}
                        />

                        {/* Link */}
                        <CustomInput2
                            label="Link"
                            placeholder="Provide a link ."
                            value={formData.link}
                            onChange={handleInputChange}
                            name="link"
                        />

                        {/* File Upload - Video */}
                        <div className="pt-3">
                            <label className="text-label text-base font-medium">
                                Video
                            </label>
                            <div className="w-full border-2 border-dashed border-purpleBg rounded-lg p-8 text-center mt-4">
                                <label htmlFor="video" className="cursor-pointer">
                                    <input
                                        type="file"
                                        name="video"
                                        id="video"
                                        className="hidden"
                                        onChange={handleFileChange}
                                        accept="video/*"
                                    />
                                    <IoCloudUploadOutline className="text-uploadIcon text-4xl mx-auto" />
                                    <p className="text-upload mt-2">Upload Media File</p>
                                </label>
                                {formData.video && (
                                    <div className="flex items-center justify-center mt-2 text-sm text-green-600">
                                        <span>{formData.video.name}</span>
                                        <button onClick={() => handleFileDelete("video")} className="ml-2 text-red-500">
                                            <MdDelete />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* File Upload - Picture */}
                        <div className="pt-3">
                            <label className="text-label text-base font-medium">
                                Picture
                            </label>
                            <div className="w-full border-2 border-dashed border-purpleBg rounded-lg p-8 text-center mt-4">
                                <label htmlFor="picture" className="cursor-pointer">
                                    <input
                                        type="file"
                                        name="picture"
                                        id="picture"
                                        className="hidden"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                    <IoCloudUploadOutline className="text-uploadIcon text-4xl mx-auto" />
                                    <p className="text-upload mt-2">Upload Picture</p>
                                </label>
                                {formData.picture && (
                                    <div className="flex items-center justify-center mt-2 text-sm text-green-600">
                                        <span>{formData.picture.name}</span>
                                        <button onClick={() => handleFileDelete("picture")} className="ml-2 text-red-500">
                                            <MdDelete />
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                        {error && <p className='text-red-500 pt-1'>{error}</p>}
                        {success && <p className='text-green-500 pt-1'>{success}</p>}

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={loading}
                            className="w-full mt-2 bg-purpleBg text-white p-3 rounded-lg "
                        >
                            {loading ? 'Adding...' : resource ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddResources
