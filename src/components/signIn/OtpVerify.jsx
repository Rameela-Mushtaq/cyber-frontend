import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { verifyOtp } from "../../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth/userSlice";
import CustomInput from "../share/CustomInput";
import Section from "../share/Section";

const VerifyOtp = () => {
    const location = useLocation(); // Get the location object
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState(location.state?.email || ""); // Pre-fill email from location state
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState("");

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await verifyOtp(email, otp);
            setMessage(response.message);

            if (response.success) {
                console.log(response.token);
                dispatch(setUser(response.user));

                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
            setErrors("");
        } catch (err) {
            setMessage("");
            setErrors({ apiError: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:py-24 py-8 flex justify-center">
            <Section>
                <div className="bg-loginBg w-full md:w-[70%] lg:w-[50%] py-8 px-4">
                    <div className="flex flex-col items-center gap-4">
                        <div className="md:text-3xl text-2xl font-semibold text-center">
                            Verify OTP
                        </div>
                        <p className="md:text-lg text-sm text-line mb-4 text-center">
                            OTP send to your email address
                        </p>
                        <form
                            onSubmit={handleVerifyOtp}
                            className="w-full flex flex-col md:gap-5 gap-3 px-2 overflow-hidden"
                        >
                            <CustomInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                readOnly
                            />
                            <CustomInput
                                type="text"
                                name="otp"
                                value={otp}
                                placeholder="Enter the OTP"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-orange whitespace-nowrap text-white p-4 mt-3 rounded-sm"
                                disabled={loading}
                            >
                                {loading ? "Verifying..." : "Verify OTP"}
                            </button>
                        </form>
                        {message && <p className="text-green-500">{message}</p>}
                        {errors.apiError && (
                            <p className="text-red-500 text-center">{errors.apiError}</p>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default VerifyOtp;
