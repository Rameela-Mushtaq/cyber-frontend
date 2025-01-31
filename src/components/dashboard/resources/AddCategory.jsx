import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createCategory, updateCategory } from '../../../services/category';
import CustomInput2 from '../../share/CustomeInput2';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import UploadIcon from '../../share/UploadIcon';


const AddCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {}; // Get category data from state (if available)

  const [formData, setFormData] = useState({
    title: category?.title || '',
    description: category?.description || '',
    icon: category?.image || null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(null);

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
      setUploading(true); // Show loader

      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          [name]: files[0],
        }));
        setUploading(false); // Hide loader after upload completes
      }, 2000); // Simulating upload delay
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
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    if (formData.icon) {
      formDataToSend.append('image', formData.icon);
    }

    try {
      if (category) {
        // If a category is passed (edit mode)
        await updateCategory(category._id, formDataToSend);
        setSuccess('Category updated successfully!');
      } else {
        // If no category is passed (add mode)
        await createCategory(formDataToSend);
        setSuccess('Category added successfully!');
      }
      setFormData({ title: '', description: '', icon: null });
      setTimeout(() => {
        navigate("/category");
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='sm:p-8 p-6 '>
      {uploading && <UploadIcon message="Uploading Icon..." />}
      <div className='p-6 flex flex-col gap-7 bg-white rounded-lg border'>
        <div className='lg:text-3xl md:text-2xl text-xl font-bold text-darkblue'>
          {category ? 'Edit Category' : 'Add Category'}
        </div>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <CustomInput2
              label='Title'
              type='text'
              placeholder='Enter a title for the category'
              value={formData.title}
              onChange={handleInputChange}
              name='title'
            />

            <CustomInput2
              label='Description'
              placeholder='Provide a brief description of the category'
              value={formData.description}
              onChange={handleInputChange}
              name='description'
              isTextarea={true}
            />

            <div className='pt-3'>
              <label className='text-label text-base font-medium'>Add Icon</label>
              <div className='w-full border-2 border-dashed border-purpleBg rounded-lg p-14 text-center mt-4'>
                {category && formData.icon ? (
                  // Show image preview only in update mode
                  <div className='flex flex-col items-center gap-2'>
                    <img
                      src={typeof formData.icon === 'string' ? formData.icon : URL.createObjectURL(formData.icon)}
                      alt='Category Icon'
                      className='w-20 h-20 object-cover rounded-md'
                    />
                    <button
                      type='button'
                      onClick={() => handleFileDelete('icon')}
                      className='text-red-500'
                    >
                      <MdDelete className='text-xl' />
                    </button>
                  </div>
                ) : (
                  // Show file name when adding a new category
                  <div>
                    <label htmlFor='icon' className='cursor-pointer'>
                      <input
                        type='file'
                        name='icon'
                        id='icon'
                        className='hidden'
                        onChange={handleFileChange}
                        accept='image/*'
                      />
                      <IoCloudUploadOutline className='text-uploadIcon text-4xl mx-auto' />
                      <p className='text-upload mt-2'>Upload icon</p>
                    </label>
                    {formData.icon && (
                      <div className='flex items-center justify-center mt-2 text-sm text-green-600'>
                        <span>{formData.icon.name}</span>
                        <button
                          type='button'
                          onClick={() => handleFileDelete('icon')}
                          className='ml-2 text-red-500'
                        >
                          <MdDelete />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>


            </div>

            {error && <p className='text-red-500 pt-1'>{error}</p>}
            {success && <p className='text-green-500 pt-1'>{success}</p>}

            <button
              className='w-full mt-2 bg-purpleBg text-white p-3 rounded-lg'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Adding...' : category ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
