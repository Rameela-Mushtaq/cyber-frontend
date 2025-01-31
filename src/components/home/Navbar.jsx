import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { logout } from "../../store/auth/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user?.user); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav className="bg-white sticky top-0 border-b border-gray-200 shadow-lg z-40">
            <div className="mx-auto w-[90%] max-w-[1800px] md:py-4 py-2 font-hind content-center">
                <div className="flex justify-between gap-3 items-center">
                    {/* Logo */}
                    <img src={logo} alt="logo" className="xl:w-auto w-40" />

                    {/* Hamburger Button */}
                    <div className="lg:hidden pt-5 ">
                        <button onClick={toggleMenu}>
                            <GiHamburgerMenu className="text-2xl text-end" />
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden text-base font-[500] lg:flex items-center xl:gap-8 gap-6">
                        <Link to={user ? "/" : "/login"}>Learn</Link>
                        <Link to={user ? "/tips" : "/login"}>Tips & Tricks</Link>
                        <Link to={user ? "/resources" : "/login"}>Resources</Link>
                        <Link to={user ? "/infographics" : "/login"}>InfoGraphics</Link>
                        <Link to={user ? "/plans" : "/login"}>Plans & Pricing</Link>
                        <Link to={user ? "/community" : "/login"}>Community</Link>
                        <Link to={user ? "/about" : "/login"}>About Us</Link>
                    </div>

                    {/* Conditional Buttons */}
                    <div>
                        {user ? (
                            <div className="hidden lg:flex items-center text-lg font-semibold">
                                <Link to='/dashboard' className="whitespace-nowrap py-3 xl:px-10 px-7 ">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className=" whitespace-nowrap py-3 xl:px-10 px-7 bg-[#FF876C] text-white rounded-lg"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="hidden lg:flex items-center text-lg font-semibold">
                                <Link to='/register' className="whitespace-nowrap py-3 xl:px-10 px-7 ">
                                    Sign Up
                                </Link>
                                <Link to="/login" className="whitespace-nowrap py-3 xl:px-10 px-7 bg-[#FF876C] text-white rounded-lg">
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeMenu}
                >
                    <div
                        className="fixed flex flex-col items-center justify-between h-screen w-[60%] bg-white overflow-auto md:px-12 p-5 z-30 transition-transform transform"
                        style={{
                            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center justify-between">
                            <img src={logo} alt="logo" />

                            <div className="flex flex-col gap-3 justify-center font-medium py-8 text-lg">
                                <Link to="/">Learn</Link>
                                <Link to="/articles">Articles</Link>
                                <Link to="/tips">Tips & Tricks</Link>
                                <Link onClick={closeMenu} to="/infographics">
                                    InfoGraphics
                                </Link>
                                <Link to="/pricing">Plans & Pricing</Link>
                                <Link to="/community">Community</Link>
                                <Link to="/about">About Us</Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-lg font-semibold">
                            {user ? (
                                <div>
                                    <Link to="/dashboard"
                                     className="whitespace-nowrap py-3 xl:px-10 px-7 ">
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="whitespace-nowrap py-3 xl:px-10 px-7 bg-[#FF876C] text-white rounded-lg"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="hidden lg:flex items-center text-lg font-semibold">
                                    <button className="whitespace-nowrap py-3 xl:px-10 px-7 ">
                                        Sign Up
                                    </button>
                                    <Link to="/login" className="whitespace-nowrap py-3 xl:px-10 px-7 bg-[#FF876C] text-white rounded-lg">
                                        Sign In
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
