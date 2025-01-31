import React, { useState, useRef, useEffect } from 'react';
import { FaVideo } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaMinus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import image from '../../../assets/icons/image.svg';
import { Link, useNavigate } from 'react-router-dom';
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { getResources, deleteResource } from '../../../services/resources'
import { getCategories } from '../../../services/category';
import Pagination from '../../tips/Pagination'; 

const ResourcesList = () => {
    const [resources, setResources] = useState([]);
    const [categories, setCategories] = useState([]);
    const [editingResource, setEditingResource] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [openMenu, setOpenMenu] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  // Add state for the current page
    const [totalPages, setTotalPages] = useState(1); 
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const data = await getResources();
            setResources(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const fetchCategories = async () => {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleEditResource = (resource) => {
        setEditingResource(resource); 
        
        const selectedCategory = categories.find(cat => cat._id === resource.category?._id);
        navigate('/addResources', { state: { resource: resource, category: selectedCategory } }); // Pass the resource data to Add resource
    };

    const handleDelete = async (id) => {
        try {
            await deleteResource(id);
            setResources(resources.filter(resource => resource._id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const filteredResources = selectedCategory === "all"
        ? resources
        : resources.filter(resource => resource.category?._id === selectedCategory);

    // Function to toggle menu visibility
    const handleMenuToggle = (index) => {
        setOpenMenu((prev) => (prev === index ? null : index));
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const itemsPerPage = 5;
    const paginatedResources = filteredResources.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setTotalPages(Math.ceil(filteredResources.length / itemsPerPage));
    }, [filteredResources]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='lg:p-8 sm:p-6 p-4 bg-white'>
            <div className='lg:px-6 flex flex-col gap-3'>
                {/* heading */}
                <div className='flex justify-between sm:flex-row flex-col gap-3'>
                    <div className="lg:text-3xl md:text-2xl text-xl font-bold text-darkblue">
                        Resources
                    </div>
                    <Link to='/addResources'>
                        <button className='text-white w-fit px-4 py-2 bg-purpleBg rounded-md'>
                            + Add Resources
                        </button>
                    </Link>
                </div>

                {/* select */}
                <div className='py-4 flex flex-wrap gap-3 items-center'>
                    <label htmlFor="" className='font-semibold'>Select Category:</label>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='border border-bordered md:w-[30%] w-full rounded-lg px-3 outline-none py-2'>
                        <option value="all">All Resources</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* table */}
                <div className='border pt-2 rounded-md'>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full min-h-full bg-white'>
                            <thead className=' rounded-t-lg text-label font-semibold text-lg'>
                                <tr>
                                    <th className='p-4 text-start rounded-t-lg'>Category</th>
                                    <th className='p-4 text-start'>Title</th>
                                    <th className='p-4 text-start'>Description</th>
                                    <th className='p-4 text-center'>Image </th>
                                    <th className='p-4 text-start'>URL </th>
                                    <th className='p-4 text-start'>Video </th>
                                    <th className='p-4 text-start'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {paginatedResources.map((resource, index) => (
                                    <tr key={resource._id} className="border-b border-bordered">
                                        <td className="px-4 py-2 whitespace-nowrap truncate">{resource.category?.title}</td>
                                        <td className="px-4 py-2 min-w-[100px] max-w-[150px] whitespace-nowrap truncate">{resource.title}</td>
                                        <td className="px-4 py-2 min-w-[200px] max-w-[250px] whitespace-nowrap truncate">
                                            <div>{resource.description}</div>
                                        </td>
                                        <td className="px-4 py-2 flex justify-center items-center ">
                                            {resource.picture ? (
                                                <a href={resource.picture} target='_blank' rel='noopener noreferrer'>
                                                    <img src={image} alt="table" width='40' height='40' />
                                                </a>
                                            ) : (
                                                <span><FaMinus className='text-contents mt-2.5'/></span>
                                            )}
                                        </td>
                                        <td className="px-4 py-2 text-start">
                                            {resource.link ? (
                                                <a href={resource.link} target='_blank' rel='noopener noreferrer'>
                                                    <FaArrowUpRightFromSquare className='text-2xl text-contents' />
                                                </a>
                                            ) : (
                                                <span><FaMinus className='text-contents'/></span>
                                            )}
                                        </td>
                                        <td className="px-4 py-2 text-start">
                                            {resource.video ? (
                                                <a href={resource.video} target='_blank' rel='noopener noreferrer'>
                                                    <FaVideo className='text-2xl text-contents' />
                                                </a>
                                            ) : (
                                                <span><FaMinus className='text-contents'/></span>
                                            )}
                                        </td>
                                        <td className="px-4 py-2 relative ">
                                            {/* Three Dots Button */}
                                            <button onClick={() => handleMenuToggle(index)} className="p-1">
                                                <BsThreeDots className='text-orange  text-2xl' />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {openMenu === index && (
                                                <div ref={menuRef} className='absolute top-6 right-20  bg-white rounded-lg shadow-lg z-10 p-3 '>
                                                    <button
                                                        onClick={() => handleEditResource(resource)}
                                                        className='flex items-center gap-2 px-2 py-1 text-[#5B93FF]'>
                                                        <LuPencilLine />
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(resource._id)}
                                                        className='flex items-center gap-2 px-2 py-1 text-[#E71D36]'>
                                                        <MdDelete />
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination Component */}
                {filteredResources.length > itemsPerPage && (
                    <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
                )}
                
            </div>
        </div>
    );
};

export default ResourcesList;
