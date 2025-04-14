import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-700">
        This is the main content area of the home page.
      </p>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
