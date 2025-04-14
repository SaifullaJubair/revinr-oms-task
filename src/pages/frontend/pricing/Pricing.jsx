"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for small teams or startups taking their first step toward streamlined HR management.",
    priceMonthly: 2,
    features: [
      "Onboarding",
      "Employee database management",
      null,
      null,
      null,
      null,
    ],
  },
  {
    name: "Professional",
    description:
      "Designed for growing businesses, the Professional package offers enhanced HR capabilities to streamline operations and boost productivity.",
    priceMonthly: 25,
    features: [
      "Onboarding",
      "Employee database management",
      "Time-off management (Leave)",
      "Basic shift management",
      "Document management",
      "Module-based reports",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description:
      "Built for large organizations with complex HR needs, the Enterprise package offers a fully customizable and scalable solution.",
    priceMonthly: 50,
    features: [
      "Onboarding",
      "Employee database management",
      "Time-off management (Leave)",
      "Basic shift management",
      "Document management",
      "Module-based reports",
    ],
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
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
        <div className="flex justify-center items-center gap-4 mt-6">
          <span className="text-gray-900">Pay Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
            />
            {/* <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:bg-cyan-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div> */}

            <Switch />
          </label>
          <span className="text-gray-900">Pay Yearly</span>
          <div className="flex items-end gap-3">
            <Image
              src="/assets/icons/vector-arrow.png"
              alt="arrow"
              width={110}
              height={80}
              className="rotate-2 w-full"
            />
            <p className="text-blue-600 text-sm whitespace-nowrap">Save 25%</p>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 shadow-sm border ${
              plan.highlight ? "bg-cyan-500 text-white" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                plan.highlight ? "text-white" : "text-gray-800"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-sm mb-4 ${
                plan.highlight ? "text-white/80" : "text-gray-600"
              }`}
            >
              {plan.description}
            </p>

            <div className="text-3xl font-bold mb-4">
              ${yearly ? plan.priceMonthly * 12 * 0.75 : plan.priceMonthly}
              <span className="text-base font-normal">
                {" "}
                / {yearly ? "Year" : "Month"}
              </span>
            </div>

            <button
              className={`w-full py-2 rounded text-sm font-medium ${
                plan.highlight
                  ? "bg-white text-cyan-600 hover:bg-gray-100"
                  : "border border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              Get Started Now
            </button>

            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  {feature ? (
                    <CheckCircle
                      size={16}
                      className={`${
                        plan.highlight ? "text-white" : "text-cyan-500"
                      }`}
                    />
                  ) : (
                    <XCircle size={16} className="text-gray-300" />
                  )}
                  <span className={feature ? "" : "text-gray-400 line-through"}>
                    {feature || ""}
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
