import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { getCategories, deleteCategory } from '../../../services/category';
import imagePlaceholder from '../../../assets/icons/image.svg';
import {  FaMinus } from "react-icons/fa6";
import { LuPencilLine } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [openMenu, setOpenMenu] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null); // New state to store editing category
    const menuRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigate

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

    const handleDelete = async (id) => {
        try {
            await deleteCategory(id);
            setCategories(categories.filter(category => category._id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleMenuToggle = (index) => {
        setOpenMenu((prev) => (prev === index ? null : index));
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category); // Store category to be edited
        navigate('/addCategory', { state: { category: category } }); // Pass the category data to AddCategory
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='lg:p-8 sm:p-6 p-4'>
            <div className='lg:px-6 flex flex-col md:gap-10 gap-4'>
                <div className='flex justify-between sm:flex-row flex-col gap-3'>
                    <div className='lg:text-3xl md:text-2xl text-xl font-bold text-darkblue'>Categories</div>
                    <Link to='/addCategory'>
                        <button className='text-white w-fit px-4 py-2 bg-purpleBg rounded-md'>+ Add</button>
                    </Link>
                </div>
                <div className='border pt-2 rounded-md'>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full min-h-full bg-white'>
                            <thead className='rounded-t-lg text-label font-semibold text-lg'>
                                <tr>
                                    <th className='p-4 text-start'>Title</th>
                                    <th className='p-4 text-start'>Description</th>
                                    <th className='p-4 text-center'>Image</th>
                                    <th className='p-4 text-start'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={category._id} className='border-b border-bordered'>
                                        <td className='px-4 min-w-[150px]  py-2'>{category.title}</td>
                                        <td className='px-4 min-w-[200px] max-w-[250px] py-2'>{category.description}</td>
                                        <td className='px-4 py-2 flex justify-center items-center'>
                                        {category.image ? (
                                                <a href={category.image || imagePlaceholder} target='_blank' rel='noopener noreferrer'>
                                                <img src={imagePlaceholder} alt='Category' width='40' height='40' />
                                            </a>
                                            ) : (
                                                <span><FaMinus className='mt-2'/></span>
                                            )}
                                            
                                        </td>
                                        <td className='px-4 py-2 relative'>
                                            <button onClick={() => handleMenuToggle(index)} className='p-1'>
                                                <BsThreeDots className='text-orange text-2xl' />
                                            </button>
                                            {openMenu === index && (
                                                <div ref={menuRef} className='absolute top-6 right-32 bg-white rounded-lg shadow-lg z-10 p-3'>
                                                    <button onClick={() => handleEditCategory(category)} className='flex items-center gap-2 px-2 py-1 text-[#5B93FF]'>
                                                        <LuPencilLine /> Edit
                                                    </button>
                                                    <button onClick={() => handleDelete(category._id)} className='flex items-center gap-2 px-2 py-1 text-[#E71D36]'>
                                                        <MdDelete /> Delete
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
            </div>
        </div>
    );
};

export default CategoryList;
