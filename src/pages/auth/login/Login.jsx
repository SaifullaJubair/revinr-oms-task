"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { FaEye, FaEyeSlash, FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import MiniSpinner from "@/shared/loader/MiniSpinner";
import LogoSection from "@/components/auth/LogoSection";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [isPasswordShow, setPasswordShow] = useState(false);

  // Function to handle form submission
  const submitForm = async (data) => {
    try {
      setLoading(true);

      const sendData = {
        email: data.user_email,
        password: data.user_password,
      };

      console.log(sendData);

      // Your API call here

      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: data.user_email,
      //       password: data.user_password,
      //     }),
      //   }
      // );

      // const result = await response.json();

      // if (!response.ok) {
      //   throw new Error(result.message || "Login failed");
      // }

      // toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-100 relative min-h-screen flex items-center justify-center">
      {/* Logo Section */}
      <LogoSection />
      <div className="flex items-center justify-center   mt-10 lg:mt-0">
        <div className="max-w-[1066px] w-full mx-auto flex flex-col lg:flex-row  overflow-hidden ">
          {/* Left: login Image Section */}
          <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100 p-4">
            <Image
              src="/assets/images/auth/group.png"
              alt="Login"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-gray-400 md:mx-6"></div>

          {/* Right: Form Section */}
          <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
            <div className="w-full max-w-[450px]">
              <h2 className="text-gray-900 font-bold text-xl mb-1">
                Welcome to OMS!
              </h2>
              <p className="text-gray-600 mb-6">
                Please sign-in to your account and start the adventure
              </p>

              <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="user_email"
                    className="font-bold text-sm text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    placeholder="Type Email Address"
                    {...register("user_email", {
                      required: "Email is required",
                    })}
                    className={`placeholder:text-gray-400 border rounded-sm outline-none px-4 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 bg-white ${
                      errors.user_email ? "border-destructive" : ""
                    }`}
                  />
                  {errors.user_email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.user_email.message}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="user_password"
                    className="font-bold text-sm text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      id="user_password"
                      placeholder="Enter Password"
                      {...register("user_password", {
                        required: "Password is Required!",
                      })}
                      className={`placeholder:text-gray-400 border rounded-sm outline-none px-4 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 bg-white ${
                        errors.user_password ? "border-destructive" : ""
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
                    <span className="text-xs text-destructive">
                      {errors.user_password.message}
                    </span>
                  )}
                </div>

                {/* Checkbox Row */}
                <div className="flex flex-row items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="forgot-password"
                      className="accent-primary w-4 h-4"
                    />
                    <label
                      htmlFor="forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      <Link href="/forget-password">Forget password</Link>
                    </label>
                  </div>
                  <span className="text-destructive text-sm">Remember me</span>
                </div>

                {/* Sign In Button */}
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
                    Sign In
                  </button>
                )}
              </form>

              {/* OR divider */}
              <div className="relative my-6 text-center">
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
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </button>
                <button className="flex items-center gap-2 border bg-gray-100 border-gray-300 p-2 rounded-full hover:bg-gray-100">
                  <Image
                    src="/assets/icons/google-logo.png"
                    alt="Google"
                    width={40}
                    height={40}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-gray-700">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-blue-600 ">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
