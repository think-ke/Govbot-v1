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
        <nav className="hidden lg:flex items-center gap-10">

          {/* Home Dropdown */}
          <div className="group relative">

            <button
              className="flex items-center gap-2 text-[17px] font-medium text-gray-900 transition-colors duration-200 hover:text-purple-700"
            >
              Home

              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
        mt-3
        w-64
        rounded-2xl
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
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Home
              </Link>

              <Link
                href="#features"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Features
              </Link>

              <Link
                href="#technology"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Technology
              </Link>

              <Link
                href="#purpose"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Purpose
              </Link>

              <Link
                href="#govstack"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                GovStack Alignment
              </Link>

              <Link
                href="#agencies"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Supported Agencies
              </Link>

              <Link
                href="#privacy"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Privacy & Security
              </Link>

              <Link
                href="#recognition"
                className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                Recognition
              </Link>

            </div>
          </div>

          <Link
            href="https://think.ke/"
            className="text-[17px] font-medium text-gray-900 transition hover:text-purple-700"
          >
            Think
          </Link>

          <Link
            href="https://playbook.think.ke/books/govbot-playbook"
            className="text-[17px] font-medium text-gray-900 transition hover:text-purple-700"
          >
            Docs
          </Link>

        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-5">

          <Link
            href="https://playbook.think.ke/books/govbot-playbook"
            className="hidden lg:inline-block text-lg font-semibold text-gray-900 transition hover:text-purple-700"
          >
            Playbook
          </Link>

          <Link href="https://think.ke">
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
              Studio
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}