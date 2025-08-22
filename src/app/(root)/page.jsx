"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Intern Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Auth Buttons */}
          <div className="space-x-3 hidden md:flex">
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="ghost" className="rounded-full px-6">
                  Login
                </Button>
              </motion.div>
            </Link>
            <Link href="/signup">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 shadow-md">
                  Sign Up
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-32 md:pt-40 pb-20 max-w-7xl mx-auto gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Your Career <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Discover internships with top companies, connect with recruiters,
            and take the first step toward your professional journey.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 shadow-md"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Login
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/images/teamwork.png"
            alt="Internship teamwork illustration"
            className="w-full max-w-xl drop-shadow-xl"
          />
        </motion.div>
      </section>

      {/* Curved Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            fill="currentColor"
            d="M0,0 C480,120 960,-40 1440,60 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Intern. All rights reserved.
      </footer>
    </main>
  );
}
