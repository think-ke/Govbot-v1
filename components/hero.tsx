"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F0FB] pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HERO CONTENT ================= */}

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Kenya Flag Background */}

          <Image
            src="/images/kenya.svg"
            alt="Kenya Flag"
            width={900}
            height={450}
            className="absolute left-1/2 top-10 -translate-x-1/2 opacity-20 pointer-events-none select-none"
          />

          <h1 className="relative z-10 text-5xl md:text-7xl font-bold leading-tight tracking-tight text-[#2D1B44]">

            <span className="text-black-500">G</span>

            <span className="text-red-500">o</span>

            <span className="text-green-500">v</span>

            <span className="text-[#7F3FBF]">Bot </span>

            <span>: </span>

            Kenya's Intelligent

            Gateway to Government

            <br />

            <span className="text-[#7F3FBF]">
              Services
            </span>

          </h1>

          <p className="mt-10 mx-auto max-w-3xl text-lg leading-9 text-gray-700">
            Access government services faster, easier, and smarter.
            GovBot is a GovStack-aligned AI chatbot that helps citizens
            discover, understand and navigate public services through
            simple voice and text interactions in English and Kiswahili.
            Recognized among IRCAI Top 100 AI Solutions in Africa,
            GovBot represents trusted, scalable innovation in GovTech.
          </p>

          <div className="mt-10">
            <Link href="https://chatbot.ecitizen.go.ke">
            <Button
              className="
              h-14
              rounded-lg
              px-10
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#7F3FBF]
              to-[#003A88]
              hover:opacity-90
            "
            >
              Explore GovBot

              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>

          </div>

        </div>

        {/* ================= CHAT PREVIEW ================= */}

        <div className="mt-24">

          <div className="overflow-hidden rounded-3xl border bg-white shadow-2xl">

            <Image
              src="/images/govbotchat.svg"
              alt="GovBot Preview"
              width={1800}
              height={1000}
              className="w-full object-cover"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}