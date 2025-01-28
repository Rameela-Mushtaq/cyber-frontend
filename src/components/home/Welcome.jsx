//import { useSelector } from 'react-redux';
//import { selectUser } from '../../store/auth/userSelectors';
//import ProtectedRoute from '../signIn/ProtectedRoute'; 

import { useEffect, useState } from "react";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem('userName');
    const image = localStorage.getItem('profileImage');

    console.log("Fetched userName:", user);  // Debug userName
    console.log("Fetched profileImage:", image);
    if (user) {
      setUserName(user);
    }
    if (image) {
      setProfileImage(image);
    }
  }, []);

  return (
    <div className="">
      <div className='text-center py-20 text-2xl font-bold'>
        Welcome, <span className='text-orange'>{userName ? userName : ''}!</span>
      </div>

      {profileImage && (
        <div className="mt-4">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover mx-auto"
          />
        </div>
      )}
    </div>

  );
};

export default Welcome;
