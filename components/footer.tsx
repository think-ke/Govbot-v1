'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F8F3FC]">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

        {/* Logo */}

        <div className="flex justify-center">

          <Image
            src="/images/think-logo.svg"
            alt="THiNK"
            width={150}
            height={60}
            className="object-contain"
          />

        </div>

        {/* Navigation */}

        <nav className="mt-10 flex flex-wrap justify-center gap-10 text-xl font-semibold text-black">

          <Link href="/about" className="hover:text-purple-700 transition">
            About us
          </Link>

          <Link href="/contact" className="hover:text-purple-700 transition">
            Contact
          </Link>

          <Link href="/developers" className="hover:text-purple-700 transition">
            Developers
          </Link>

          <Link href="/blog" className="hover:text-purple-700 transition">
            Blog
          </Link>

          <Link href="/support" className="hover:text-purple-700 transition">
            Support
          </Link>

        </nav>

        {/* Divider */}

        <div className="mt-20 border-t border-gray-300" />

        {/* Bottom */}

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <p className="text-xl text-black">
            © {currentYear} THiNK Platform. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-10 text-xl text-black">

            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-purple-700"
            >
              Privacy policy
            </Link>

            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-purple-700"
            >
              Terms of service
            </Link>

            <Link
              href="/cookies"
              className="underline underline-offset-4 hover:text-purple-700"
            >
              Cookie settings
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}