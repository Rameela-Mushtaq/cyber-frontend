import signIn from "../../assets/images/signIn.png";
import { useState } from "react";
import CustomInput from "../share/CustomInput";
import Section from "../share/Section";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../services/auth";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        profileImage: null, // Added profile image field
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        // Username validation
        if (!formData.username) {
            newErrors.username = "Username is required.";
        } else if (/^[^a-zA-Z]*$/.test(formData.username)) {
            newErrors.username = "Username must include letters.";
        }

        // Email validation
        if (!formData.email) newErrors.email = "Email is required.";

        // Password validation
        if (!formData.password) newErrors.password = "Password is required.";


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true); // Start loading
            try {
                // Prepare FormData
                const formDataToSend = new FormData();
                formDataToSend.append("name", formData.username);
                formDataToSend.append("email", formData.email);
                formDataToSend.append("password", formData.password);
                formDataToSend.append("profileImage", formData.profileImage);

                // Call the register API
                const response = await userRegister(formDataToSend);
                console.log("Registration successful:", response);

                // Redirect after successful registration
                setTimeout(() => {
                    navigate("/otp-verify", { state: { email: formData.email } });
                }, 2000);
            } catch (error) {
                setErrors({ apiError: error.message }); // Display API error
            } finally {
                setLoading(false); // End loading
            }
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "profileImage") {
            setFormData({ ...formData, profileImage: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setErrors({ ...errors, [name]: "" });
    };

    return (
        <div className="pt-8 md:pt-16 pb-8 md:pb-10 flex justify-center">
            <Section style={"flex flex-col md:flex-row gap-9"}>
                {/* Left side */}
                <div className="w-full bg-loginBg md:p-8 p-4 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-2 mt-2 w-full ">
                        <div className="md:text-3xl text-2xl font-semibold text-center">
                            Register
                        </div>
                        <p className="md:text-lg text-sm text-line mb-4 text-center">
                            Please enter your details to register.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col md:gap-5 gap-3 px-2 overflow-hidden"
                        >
                            {/* Username */}
                            <CustomInput
                                value={formData.username}
                                onChange={handleChange}
                                type="text"
                                name="username"
                                placeholder={"Enter your name"}
                                label={"User Name"}
                                errors={errors.username}
                            />

                            {/* Email */}
                            <CustomInput
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder={"Enter your email address"}
                                label={"Email Address"}
                                errors={errors.email}
                            />

                            {/* Password */}
                            <CustomInput
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Enter your password here"
                                label="Password"
                                errors={errors.password}
                            />

                            {/* Profile Image */}
                            <div className="w-full flex flex-col md:gap-2 gap-1 relative">
                                <label className="text-primary text-lg">
                                    Profile Image
                                </label>
                                <div className="w-full flex flex-col">
                                    <input
                                        type="file"
                                        name="profileImage"
                                        className="p-4 rounded-sm  text-secondary md:text-lg text-base focus-within:outline-none focus-within:ring-1 focus-within:ring-orange"
                                        onChange={handleChange}
                                        accept="image/*"
                                    />
                                </div>
                            </div>

                            {/* API Error Message */}
                            {errors.apiError && (
                                <p className="text-red-500 text-center">{errors.apiError}</p>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-orange text-white p-4 w-full rounded-sm font-medium my-2"
                                disabled={loading}
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>

                            <p className="w-full text-center mt-3">
                                Already have an account?{" "}
                                <Link to="/login" className="text-orange">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Right side */}
                <div className="mt-10 w-full md:flex justify-center hidden">
                    <img src={signIn} alt="login" className="w-full h-full" />
                </div>
            </Section>
        </div>
    );
};

export default Register;
