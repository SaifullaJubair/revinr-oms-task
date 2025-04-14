"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-background text-foreground">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          Welcome to Your App
        </h1>

        <p className="text-lg text-muted-foreground mb-6">
          Start building beautiful, fast applications with your custom design
          system.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
