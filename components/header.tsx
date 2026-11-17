
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-[#eae3eb]/80 bg-[#fbfaf7]/85 px-5 shadow-[0_8px_35px_rgba(40,25,50,0.05)] backdrop-blur-xl md:px-8">

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/think-logo.svg"
            alt="THiNK"
            width={170}
            height={70}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-2 text-sm font-semibold text-[#70427e]">
              GovBot
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full w-64 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-[#eae3eb] bg-white p-3 shadow-xl">
                {[
                  ["Overview", "#home"],
                  ["Features", "#features"],
                  ["Technology", "#technology"],
                  ["How It Works", "#purpose"],
                  ["Agencies", "#agencies"],
                  ["Recognition", "#recognition"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block rounded-xl px-4 py-3 text-sm text-[#6f6975] transition hover:bg-[#f5eafa] hover:text-[#70427e]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="https://think.ke"
            target="_blank"
            className="text-sm text-[#6f6975] transition hover:text-[#70427e]"
          >
            About THiNK
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://playbook.think.ke/books/govbot-playbook"
            className="hidden text-sm font-medium text-[#70427e] transition hover:text-[#60356d] sm:block"
          >
            Playbook
          </Link>

          <Link href="https://chatbot.ecitizen.go.ke">
            <Button className="h-10 rounded-xl bg-[#70427e] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#60356d]">
              Explore GovBot
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}
