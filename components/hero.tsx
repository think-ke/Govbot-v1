"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Mic, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F0FB] pt-28 pb-24">
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#7F3FBF]/10 blur-3xl" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#003A88]/10 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7F3FBF]/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HERO CONTENT ================= */}

        <div className="mx-auto max-w-5xl text-center">

          {/* Product label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#7F3FBF]/15 bg-white/70 px-4 py-2 text-sm font-medium text-[#6B5A88] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#7F3FBF]" />
            A THiNK DPI Product
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#2D1B44] md:text-7xl">

            The intelligent interface
            <br />

            <span className="bg-gradient-to-r from-[#7F3FBF] to-[#003A88] bg-clip-text text-transparent">
              for government services.
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B5A88] md:text-xl">
            GovBot helps people discover, understand, and access public
            services through natural voice and text conversations in the
            languages they use.
          </p>

          {/* Capability pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <div className="flex items-center gap-2 rounded-full border border-[#7F3FBF]/10 bg-white px-4 py-2 text-sm text-[#2D1B44] shadow-sm">
              <Globe2 className="h-4 w-4 text-[#7F3FBF]" />
              Multilingual
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#7F3FBF]/10 bg-white px-4 py-2 text-sm text-[#2D1B44] shadow-sm">
              <Mic className="h-4 w-4 text-[#7F3FBF]" />
              Voice + Text
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#7F3FBF]/10 bg-white px-4 py-2 text-sm text-[#2D1B44] shadow-sm">
              <MessageSquare className="h-4 w-4 text-[#7F3FBF]" />
              Built for Governments
            </div>

          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link href="https://chatbot.ecitizen.go.ke">
              <Button
                className="
                  h-14
                  rounded-xl
                  bg-gradient-to-r
                  from-[#7F3FBF]
                  to-[#003A88]
                  px-8
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#7F3FBF]/20
                  transition-all
                  hover:scale-[1.02]
                  hover:opacity-95
                "
              >
                Explore GovBot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

        </div>

        {/* ================= CHAT PREVIEW ================= */}

        <div className="relative mx-auto mt-20 max-w-6xl">

          {/* Glow */}
          <div className="absolute inset-x-20 -bottom-10 h-32 rounded-full bg-[#7F3FBF]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-[#2D1B44]/10 bg-white shadow-[0_30px_80px_rgba(45,27,68,0.15)]">

            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F6F0FB]">
                  <MessageSquare className="h-5 w-5 text-[#7F3FBF]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#2D1B44]">
                    GovBot
                  </p>

                  <p className="text-xs text-[#6B5A88]">
                    Government services assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#6B5A88]">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available
              </div>

            </div>

            <Image
              src="/images/govbotchat.svg"
              alt="GovBot government services assistant interface"
              width={1800}
              height={1000}
              className="w-full object-cover"
              priority
            />

          </div>

        </div>

        {/* ================= PROOF ================= */}

        <div className="mx-auto mt-14 max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F3FBF]">
            Proven in practice
          </p>

          <p className="mt-3 text-base leading-7 text-[#6B5A88]">
            GovBot has been implemented within Kenya's
            <span className="font-semibold text-[#2D1B44]">
              {" "}eCitizen ecosystem
            </span>
            , demonstrating its application in a live digital government
            environment.
          </p>

        </div>

      </div>
    </section>
  );
}