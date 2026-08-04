"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-900/20 bg-[linear-gradient(180deg,#160B25_0%,#221233_50%,#2B1940_100%)] text-white">

      {/* Background Glow */}

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top */}

        <div className="grid gap-12 border-b border-purple-800/30 pb-14 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <Link href="/" className="inline-block">

              <Image
                src="/images/think-logo-white.svg"
                alt="THiNK"
                width={170}
                height={45}
                className="h-10 w-auto"
              />

            </Link>

            <h3 className="mt-6 text-2xl font-bold text-white">
              GovBot
            </h3>

            <p className="mt-4 max-w-sm text-[15px] leading-7 text-purple-200/70">
              Kenya's intelligent gateway to government services.
              Built by THiNK to improve accessibility, transparency,
              and digital public service delivery through trusted AI.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/think-ke"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 transition hover:bg-purple-600"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/think-ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 transition hover:bg-purple-600"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://think.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 transition hover:bg-purple-600"
              >
                <Globe className="h-5 w-5" />
              </a>

            </div>

          </div>

          {/* GovBot */}

          <div>

            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-purple-400">
              GovBot
            </h4>

            <ul className="space-y-3 text-purple-200/70">

              <li>
                <Link href="#home" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#technology" className="hover:text-white">
                  Technology
                </Link>
              </li>

              <li>
                <Link href="#purpose" className="hover:text-white">
                  Purpose
                </Link>
              </li>

              <li>
                <Link href="#recognition" className="hover:text-white">
                  Recognition
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-purple-400">
              Resources
            </h4>

            <ul className="space-y-3 text-purple-200/70">

              <li>
                <Link
                  href="https://playbook.think.ke/books/govbot-playbook"
                  target="_blank"
                  className="hover:text-white"
                >
                  GovBot Playbook
                </Link>
              </li>

              <li>
                <Link
                  href="https://think.ke"
                  target="_blank"
                  className="hover:text-white"
                >
                  THiNK
                </Link>
              </li>

              <li>
                <Link
                  href="https://chatbot.ecitizen.go.ke"
                  target="_blank"
                  className="hover:text-white"
                >
                  Launch GovBot
                </Link>
              </li>

              <li>
                <Link
                  href="https://govstack.global"
                  target="_blank"
                  className="hover:text-white"
                >
                  GovStack
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-purple-400">
              Contact
            </h4>

            <div className="space-y-4 text-purple-200/70">

              <a
                href="mailto:support@think.ke"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4 text-purple-400" />
                support@think.ke
              </a>

              <a
                href="tel:+254759759311"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 text-purple-400" />
                +254 759 759 311
              </a>

              <a
                href="https://think.ke"
                target="_blank"
                className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Visit THiNK →
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-purple-200/50">
            © {new Date().getFullYear()} THiNK. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-8 text-sm text-purple-200/50">

            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookie Settings
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}