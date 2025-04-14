"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";

import { FaEye, FaEyeSlash, FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import MiniSpinner from "@/shared/loader/MiniSpinner";
import { Button } from "@/components/ui/button";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [isPasswordShow, setPasswordShow] = useState(false);

  const submitForm = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-[1066px] w-full mx-auto flex flex-col lg:flex-row  overflow-hidden ">
        {/* Left: Image Section */}
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
        <div className="hidden lg:block w-[1px] bg-gray-400"></div>

        {/* Right: Form Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
          <div className="w-full max-w-[400px]">
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
                  {...register("user_email", { required: "Email is required" })}
                  className={`placeholder:text-gray-400 border rounded-sm outline-none px-4 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 ${
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
                    className={`placeholder:text-gray-400 border rounded-sm outline-none px-4 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 ${
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
                    <Link href="/forgot-password">Forget password</Link>
                  </label>
                </div>
                <span className="text-destructive text-sm">Remember me</span>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className="bg-primaryColor hover:bg-primaryColor/90 cursor-pointer text-white py-[6px] w-full border-0 font-bold  shadow-md rounded-sm"
              >
                {isLoading ? <MiniSpinner /> : "Sign In"}
              </button>
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
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-primaryColor underline font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
