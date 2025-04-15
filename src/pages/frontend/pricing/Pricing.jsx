"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { pricingPlans } from "@/utils/priceData";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-500">
          30-day free trial. No credit card required
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          A complete HR solution for every business
        </p>
        <p className="mt-1  text-gray-500 text-lg">
          Choose a plan that's right for you
        </p>

        {/* Toggle */}
        <div className="flex justify-center  gap-4 mt-6 sm:mb-20 relative">
          <span className="text-gray-900 text-xl ">Pay Monthly</span>
          <label className="relative inline-flex mt-2 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
            />
            {/* <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:bg-cyan-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div> */}

            <Switch />
          </label>
          <span className="text-gray-900 text-xl ">Pay Yearly</span>

          <div className=" hidden sm:flex items-end  gap-1 mt-2.5 lg:mt-1  absolute left-[80%] md:left-[76%] lg:left-[74%] -translate-x-1/2">
            <Image
              src="/assets/icons/arrow.png"
              alt="arrow"
              width={110}
              height={80}
              className="rotate-2 w-full"
            />
            <p className="text-blue-600 text-xl whitespace-nowrap mb-2">Save 25%</p>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 shadow-sm border ${
              plan.highlight ? "bg-cyan-500 text-white" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold my-4 ${
                plan.highlight ? "text-white" : "text-gray-800"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-sm mb-4 ${
                plan.highlight ? "text-gray-200" : "text-gray-500 "
              }`}
            >
              {plan.description}
            </p>

            <div className="text-3xl sm:text-5xl font-bold mb-6">
              ${yearly ? plan.priceMonthly * 12 * 0.75 : plan.priceMonthly}
              <span
                className={`text-sm font-normal  ml-2 ${
                  plan.highlight ? "text-gray-200" : "text-gray-500 "
                }`}
              >
                / {yearly ? "Year" : "Month"}
              </span>
            </div>

            <button
              className={`w-full py-2 rounded text-sm font-medium cursor-pointer text-blue-600 ${
                plan.highlight
                  ? "bg-white  hover:bg-gray-100"
                  : "border border-blue-600  hover:bg-blue-50"
              }`}
            >
              Get Started Now
            </button>

            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  {feature.available ? (
                    <CheckCircle
                      size={16}
                      className={
                        plan.highlight ? "text-white" : "text-cyan-500"
                      }
                    />
                  ) : (
                    <XCircle size={16} className="text-gray-300" />
                  )}
                  <span
                    className={`${
                      feature.available
                        ? plan.highlight
                          ? "text-white"
                          : "text-gray-800"
                        : " "
                    } ${
                      plan.highlight && !feature.available && "text-gray-300"
                    }`}
                  >
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
