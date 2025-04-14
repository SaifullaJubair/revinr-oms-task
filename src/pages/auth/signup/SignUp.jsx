"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useForm, useWatch } from "react-hook-form";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import MiniSpinner from "@/shared/loader/MiniSpinner";
import { FaAnglesRight } from "react-icons/fa6";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [isPasswordShow, setPasswordShow] = useState(false);
  const [requirements, setRequirements] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const password = useWatch({
    control,
    name: "user_password",
    defaultValue: "",
  });

  useEffect(() => {
    if (password) {
      setRequirements({
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      });
    } else {
      setRequirements({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
      });
    }
  }, [password]);

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
    <div className="bg-gray-100 relative min-h-screen flex items-center justify-center">
      {/* Logo Section */}
      <div className="absolute top-4 left-4 flex items-center gap-3">
        <div className="border-4 border-[#E0E5ED] rounded-full w-12 h-12 relative">
          <Image
            src="/assets/images/paint.png"
            alt="Login"
            fill
            className="rounded-full w-full object-cover bg-white"
          />
        </div>
        <div>
          <h3 className="font-bold">
            <span className="text-gray-500">OMS/ </span>
            <span className="text-cyan-500">Study Press</span>
          </h3>
          <h5 className="text-xs text-gray-400">Solutions of Study</h5>
        </div>
      </div>

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
                Create New Account
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore
              </p>

              <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
                {/*  Password Input */}
                <div>
                  <label className="font-bold text-sm text-gray-700">
                    Password
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
                {/* Password Requirements */}
                <div className="text-sm text-gray-500 space-y-1">
                  <ul className="flex flex-col gap-1">
                    <li
                      className={`flex items-center gap-2 ${
                        requirements.minLength ? "text-green-500" : ""
                      }`}
                    >
                      {requirements.minLength ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaAnglesRight />
                      )}
                      Minimum 8 characters
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        requirements.hasUpperCase ? "text-green-500" : ""
                      }`}
                    >
                      {requirements.hasUpperCase ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaAnglesRight />
                      )}
                      At least one uppercase letter (A-Z)
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        requirements.hasLowerCase ? "text-green-500" : ""
                      }`}
                    >
                      {requirements.hasLowerCase ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaAnglesRight />
                      )}
                      At least one lowercase letter (a-z)
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        requirements.hasNumber ? "text-green-500" : ""
                      }`}
                    >
                      {requirements.hasNumber ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaAnglesRight />
                      )}
                      At least one number (0-9)
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        requirements.hasSpecialChar ? "text-green-500" : ""
                      }`}
                    >
                      {requirements.hasSpecialChar ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaAnglesRight />
                      )}
                      At least one special character (e.g., !, @, #, $, etc.)
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full font-bold rounded-sm cursor-pointer"
                >
                  {isLoading ? <MiniSpinner /> : "Sign Up"}
                </button>
              </form>

              {/* OR divider */}
              <div className="relative my-4 text-center">
                <span className="relative px-2 font-bold text-sm text-gray-700 uppercase">
                  or
                </span>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-6 mb-4">
                <button className="flex items-center gap-2 border bg-gray-100 border-gray-300 p-2 rounded-full hover:bg-gray-100">
                  <Image
                    src="/assets/icons/Facebook-logo.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </button>
                <button className="flex items-center gap-2 border bg-gray-100 border-gray-300 p-2 rounded-full hover:bg-gray-100">
                  <Image
                    src="/assets/icons/google-logo.png"
                    alt="Google"
                    width={40}
                    height={40}
                  />
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-gray-700">
                Already have an account?{" "}
                <Link href="/sign-up" className="text-blue-600 ">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
