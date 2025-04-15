"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  UserPlus,
  Key,
  RefreshCw,
  DollarSign,
  Building2,
} from "lucide-react";
import { yatra } from "@/utils/font";

export default function Home() {
  const actionButtons = [
    {
      name: "Sign Up",
      href: "/sign-up",
      icon: <UserPlus className="mr-2 h-4 w-4" />,
      variant: "default",
    },
    {
      name: "Sign In",
      href: "/sign-in",
      icon: <LogIn className="mr-2 h-4 w-4" />,
      variant: "outline",
    },
    {
      name: "Forget Password",
      href: "/forget-password",
      icon: <Key className="mr-2 h-4 w-4" />,
      variant: "outline",
    },
    {
      name: "Reset Password",
      href: "/reset-password",
      icon: <RefreshCw className="mr-2 h-4 w-4" />,
      variant: "outline",
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <DollarSign className="mr-2 h-4 w-4" />,
      variant: "outline",
    },
    {
      name: "Company Profile",
      href: "/profile",
      icon: <Building2 className="mr-2 h-4 w-4" />,
      variant: "outline",
    },
  ];

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-12 bg-gray-100 text-foreground">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1
            className="text-4xl font-bold text-primary mb-4 "
            style={{
              fontFamily: yatra.style.fontFamily,
            }}
          >
            Welcome to <span className="text-gray-500">OMS/ </span>
            <span className="text-cyan-500">Study Press</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Start building beautiful, fast applications with your custom design
            system.
          </p>
        </div>

        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-6 text-muted-foreground">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {actionButtons.map((button) => (
              <Link key={button.name} href={button.href}>
                <Button
                  size="lg"
                  variant={button.variant}
                  className="w-full justify-start px-6 py-5 transition-all hover:shadow-md cursor-pointer"
                >
                  {button.icon}
                  {button.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
