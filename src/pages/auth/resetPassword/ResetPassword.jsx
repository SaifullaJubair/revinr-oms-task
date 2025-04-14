"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MiniSpinner from "@/shared/loader/MiniSpinner";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [isPasswordShow, setPasswordShow] = useState(false);
  const password = watch("user_password", "");

  // Password validation rules
  const passwordValidation = {
    required: "Password is required!",
    minLength: {
      value: 8,
      message: "Must be at least 8 characters",
    },
    validate: {
      hasUpperCase: (value) =>
        /[A-Z]/.test(value) || "Must contain at least one uppercase letter",
      hasLowerCase: (value) =>
        /[a-z]/.test(value) || "Must contain at least one lowercase letter",
      hasNumber: (value) =>
        /[0-9]/.test(value) || "Must contain at least one number",
      hasSpecialChar: (value) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
        "Must contain at least one special character",
    },
  };

  // Form submission handler
  const submitForm = async (data) => {
    try {
      setLoading(true);
      const sendData = {
        password: data.user_password,
      };
      console.log(sendData);
      // Your API call here
      toast.success("Password updated successfully!");
      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-[80vh] flex items-center justify-center">
      <div className="flex items-center justify-center mt-10 lg:mt-0">
        <div className="max-w-[1066px] w-full mx-auto flex flex-col lg:flex-row overflow-hidden">
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100 p-4">
            <Image
              src="/assets/images/auth/group.png"
              alt="Reset"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-gray-400 md:mx-6"></div>

          {/* Right: Form */}
          <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
            <div className="w-full max-w-[450px]">
              <h2 className="text-gray-900 font-bold text-xl mb-1">
                Reset Password
              </h2>
              <p className="text-gray-600 mb-6">
                Create a new password. Ensure it differs from previous ones for
                security.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
                {/* New Password Input */}
                <div>
                  <label className="font-bold text-sm text-gray-700">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("user_password", passwordValidation)}
                      className={`bg-white placeholder:text-gray-400 border rounded-sm outline-none px-4 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 ${
                        errors.user_password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <span
                      onClick={() => setPasswordShow(!isPasswordShow)}
                      className="absolute end-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                    >
                      {isPasswordShow ? (
                        <FaEye size={20} />
                      ) : (
                        <FaEyeSlash size={20} />
                      )}
                    </span>
                  </div>
                  {errors.user_password && (
                    <div className="text-xs text-red-500 mt-1 space-y-1">
                      <p>{errors.user_password.message}</p>
                    </div>
                  )}
                </div>

                {/* Retype Password Input */}
                <div>
                  <label className="font-bold text-sm text-gray-700">
                    Retype Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      placeholder="Retype password"
                      {...register("confirm_password", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className={`bg-white placeholder:text-gray-400 border rounded-sm outline-none px-4 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 ${
                        errors.confirm_password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <span
                      onClick={() => setPasswordShow(!isPasswordShow)}
                      className="absolute end-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                    >
                      {isPasswordShow ? (
                        <FaEye size={20} />
                      ) : (
                        <FaEyeSlash size={20} />
                      )}
                    </span>
                  </div>
                  {errors.confirm_password && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>

                {isSubmitting || isLoading ? (
                  <div
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full font-bold rounded-sm text-center flex items-center justify-center cursor-not-allowed"
                  >
                    <MiniSpinner />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full font-bold rounded-sm cursor-pointer"
                  >
                    Update Password
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
