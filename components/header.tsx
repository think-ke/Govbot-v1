"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header
      className="
    fixed
    top-0
    left-0
    right-0
    z-50
    bg-transparent
    backdrop-blur-md
  "
    >      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/think-logo.svg"
            alt="THiNK"
            width={185}
            height={100}
            priority
            className="h-15 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center">

          <div
            className="
      flex items-center
      rounded-full
      border border-white/70
      bg-white/70
      p-2
      shadow-xl
      backdrop-blur-xl
    "
          >

            {/* ================= HOME ================= */}
            <div className="group relative">

              <button
                className="
          flex items-center gap-2
          rounded-full
          bg-[#7B4BB7]
          px-6
          py-2
          text-lg
          font-semibold
          text-white
          shadow-md
          transition-all
          duration-300
          hover:bg-[#6A3AA8]
        "
              >
                Home

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className="
          invisible
          absolute
          left-0
          top-full
          mt-4
          w-72
          rounded-3xl
          border
          border-purple-100
          bg-white
          p-3
          opacity-0
          shadow-2xl
          transition-all
          duration-300
          group-hover:visible
          group-hover:opacity-100
        "
              >
                <Link
                  href="#home"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Home
                </Link>

                <Link
                  href="#features"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Features
                </Link>

                <Link
                  href="#technology"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Technology
                </Link>

                <Link
                  href="#purpose"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Purpose
                </Link>

                <Link
                  href="#govstack"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  GovStack Alignment
                </Link>

                <Link
                  href="#agencies"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Supported Agencies
                </Link>

                <Link
                  href="#collaboration"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Collaborations
                </Link>
                <Link
                  href="#privacy"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Privacy & Security
                </Link>


                <Link
                  href="#recognition"
                  className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  Recognition
                </Link>
              </div>

            </div>

            {/* ================= THINK ================= */}

            <Link
              href="https://think.ke"
              target="_blank"
              className="
        rounded-full
        px-10
        py-2
        text-lg
        font-medium
        text-gray-500
        transition-all
        duration-300
        hover:bg-white
        hover:text-[#7B4BB7]
      "
            >
              THiNK
            </Link>

          </div>

        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-5">

          <Link href="https://playbook.think.ke/books/govbot-playbook">
            <Button
              className="
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-[#7B3FBF]
              to-[#143C8B]
              px-8
              text-lg
              font-semibold
              text-white
              hover:opacity-90
            "
            >
              Playbook
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}