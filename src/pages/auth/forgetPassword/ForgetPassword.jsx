"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import Image from "next/image";
import MiniSpinner from "@/shared/loader/MiniSpinner";

const ForgetPassword = () => {
  const length = 6;
  const {
    handleSubmit,
    register, // Keep register for email field if needed
    reset,
    formState: { isSubmitting },
  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const navigationInputs = useRef([]);
  const [otpValues, setOtpValues] = useState(Array(length).fill(""));

  // Input Change Handler
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newOtpValues = [...otpValues];

    if (/^[a-zA-Z0-9]$/.test(value)) {
      newOtpValues[index] = value;
      if (index < length - 1) {
        navigationInputs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      newOtpValues[index] = "";
    } else {
      newOtpValues[index] = value.slice(0, 1).replace(/[^a-zA-Z0-9]/g, "");
    }

    setOtpValues(newOtpValues);
    setOtpError("");
  };

  // Backspace Handler
  const handleKeydown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !navigationInputs.current[index].value &&
      index > 0
    ) {
      navigationInputs.current[index - 1]?.focus();
    }
  };

  // Form Submission

  const submitForm = async (formData) => {
    try {
      if (otpValues.some((value) => !value)) {
        setOtpError("Please fill all OTP fields");
        return;
      }

      const otp = otpValues.join("");

      setLoading(true);
      setOtpError("");

      if (otp.length == length) {
        setOtpError("That code is incorrect. Check the code and try again."); // Simulate an error for demonstration
        return;
      }

      //******* */ Make API call to verify OTP and reset password *********//

      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/reset-password`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: ,
      //       otp,
      //     }),
      //   }
      // );

      // const result = await response.json();

      // if (!response.ok) {
      //   throw new Error(
      //     result.message ||
      //       "That code is incorrect. Check the code and try again."
      //   );
      // }

      // toast.success("OTP verified successfully!");
      // reset();
      // setOtpValues(Array(length).fill(""));
    } catch (error) {
      setOtpError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-[80vh] flex items-center justify-center">
      <div className="flex items-center justify-center mt-10 lg:mt-0 ">
        <div className="max-w-[1066px] w-full mx-auto flex flex-col lg:flex-row overflow-hidden">
          {/* Left Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100 p-4">
            <Image
              src="/assets/images/auth/group.png"
              alt="Login"
              width={500}
              height={500}
              className="mx-auto "
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-gray-400 md:mx-4 "></div>

          {/* Form Section */}
          <div className="lg:w-1/2 w-full flex items-center justify-center py-6 px-3 sm:p-6">
            <div className="w-full mx-auto max-w-[450px]">
              <h2 className="text-gray-900 font-bold text-xl mb-2">
                Forget Password
              </h2>
              <p className="text-gray-600 mb-7">
                We've sent a One-Time Password (OTP) to your email. Please check
                your inbox and enter the OTP below to proceed.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
                {/* OTP Input */}
                <div className="max-w-xs w-full">
                  <label htmlFor="otp">
                    <span className="text-sm text-gray-700">
                      Enter 6 Digit OTP
                    </span>
                  </label>
                  <div className="flex gap-2 md:gap-3 flex-wrap justify-between mt-3">
                    {Array.from({ length }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        id={`otp-${index}`}
                        name={`otp-${index}`}
                        ref={(el) => (navigationInputs.current[index] = el)}
                        className={`w-10 h-10 text-center border ${
                          otpError ? "border-red-500" : "border-[#bcbcbc]"
                        } rounded-md outline-none focus:border-[#3B9DF8]`}
                        maxLength={1}
                        value={otpValues[index]}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeydown(e, index)}
                      />
                    ))}
                  </div>

                  {/* Error Message */}
                  {otpError && (
                    <p className="text-red-500 text-xs my-2 flex items-center gap-1">
                      <PiWarningCircle className="text-lg" />
                      {otpError}
                    </p>
                  )}

                  {/* Submit Button */}
                  {isSubmitting || isLoading ? (
                    <div
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 mt-3 text-white py-2 w-full font-bold rounded-sm text-center flex items-center justify-center cursor-not-allowed"
                    >
                      <MiniSpinner />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 mt-3 text-white py-2 w-full font-bold rounded-sm cursor-pointer"
                    >
                      Reset Password
                    </button>
                  )}
                </div>
              </form>

              {/* Link */}
              <div className="text-sm text-gray-700 mt-5">
                Haven't got the email yet?{" "}
                <Link href="/sign-in" className="text-blue-600">
                  Reset Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
