"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/navigation";


const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  // Form submission handler
  const submitForm = async (data) => {
    try {
      setLoading(true);
      const sendData = {
        full_name: data.full_name,
        email: data.email,
        mobile: data.mobile,
        password: data.user_password,
      };

      console.log(sendData);
      // Your API call here

      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(sendData),
      //   }
      // );

      // const result = await response.json();

      toast.success("User registered successfully!");
      router.push("/sign-in");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center py-8  ">
      <div className="max-w-[1066px] w-full mx-auto flex flex-col lg:flex-row ">
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
        <div className="lg:w-1/2 w-full flex items-center justify-center px-6">
          <div className="w-full max-w-[450px]">
            <h2 className="text-gray-900 font-bold text-xl mb-1">
              Create New Account
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore
            </p>

            {/* Sign Up Form */}
            <SignUpForm
              submitForm={submitForm}
              isSubmitting={false}
              isLoading={isLoading}
            />
            {/* OR divider */}
            <div className="relative my-4 text-center">
              <span className="relative px-2 font-bold text-sm text-gray-700 uppercase">
                or
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center gap-6 mb-4">
              <button className="flex items-center gap-2 border bg-gray-100 border-gray-300 p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <Image
                  src="/assets/icons/Facebook-logo.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </button>
              <button className="flex items-center gap-2 border bg-gray-100 border-gray-300 p-2 rounded-full hover:bg-gray-100 cursor-pointer">
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
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-600 ">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
