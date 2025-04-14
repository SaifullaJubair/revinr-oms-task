import Image from "next/image";
import React from "react";

const AuthNavbar = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 py-2.5 px-4">
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
  );
};

export default AuthNavbar;
