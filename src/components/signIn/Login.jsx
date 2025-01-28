import signIn from "../../assets/images/signIn.png";
import { useState } from "react";
import CustomInput from "../share/CustomInput";
import Section from "../share/Section";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services/auth";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) newErrors.email = "Email is required.";

        // password validation
        if (!formData.password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                // Call the register API
                const response = await userLogin(
                    formData.email,
                    formData.password
                );
                console.log("Registration successful:", response);
                setTimeout(() => {
                    navigate('/otp-verify', { state: { email: formData.email } }); // Redirect after successful registration
                }, 2000);
            } catch (error) {
                setErrors({ apiError: error.message }); // Display API error
            } finally {
                setLoading(false); // End loading
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }


    return (
        <div className="pt-8 md:pt-16 pb-8 md:pb-10 flex justify-center">
            <Section style={'flex flex-col md:flex-row gap-9'}>
                {/* Left side */}
                <div className="w-full bg-loginBg md:p-8 p-4 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-2 mt-2 w-full ">
                        <div className="md:text-3xl text-2xl font-semibold text-center">
                            Login
                        </div>
                        <p className="md:text-lg text-sm text-line mb-4 text-center">
                            Please enter your details to login.
                        </p>

                        <form onSubmit={handleSubmit}
                            className="w-full flex flex-col md:gap-5 gap-3 px-2 overflow-hidden"
                        >

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
                                {loading ? "Login..." : "Login"}
                            </button>
                            <p className="w-full text-center mt-3">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-orange">
                                    Sign Up
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

export default Login;
