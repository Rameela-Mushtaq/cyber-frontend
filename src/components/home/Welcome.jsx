import { useSelector } from "react-redux";

const Welcome = () => {
  const user = useSelector((state) => state.user?.user);
  const imageUrl = user?.profileImage?.secure_url || user?.profileImage || ""; 

  return (
    <div className="">
      <div className="text-center py-20 text-2xl font-bold">
        Welcome, <span className="text-orange">{user?.name || ""}!</span>
      </div>

      {user?.profileImage && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Welcome;
