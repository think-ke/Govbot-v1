
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Mic,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fbfaf7] px-6 pb-20 pt-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[25%] h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#d8b1e6]/20 blur-[120px]" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c18cda]/10 blur-[100px]" />

        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-[#70427e]/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#201c28 1px, transparent 1px), linear-gradient(90deg, #201c28 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute left-1/2 top-[35%] h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[50%] border border-[#70427e]/10" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="think-eyebrow mb-7">
            <Sparkles className="h-3.5 w-3.5" />
            A THiNK Digital Public Infrastructure Product
          </div>

          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-[#201c28] md:text-7xl lg:text-[82px]">

            The Intelligent Interface

            <br />

            <span className="text-[#70427e]">
              for Government Services.
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#6f6975] md:text-lg">
            GovBot helps people discover, understand, and access public services
            through natural voice and text conversations in the languages they use.
          </p>

          {/* Capabilities */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              { icon: Globe2, label: "Multilingual" },
              { icon: Mic, label: "Voice enabled" },
              { icon: MessageSquare, label: "Conversational AI" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-[#eae3eb] bg-white/80 px-4 py-2 text-xs font-medium text-[#6f6975] shadow-sm"
              >
                <Icon className="h-4 w-4 text-[#70427e]" />
                {label}
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="https://chatbot.ecitizen.go.ke"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#70427e] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(112,66,126,0.2)] transition hover:-translate-y-1 hover:bg-[#60356d]"
            >
              Explore GovBot

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#70427e]">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

          </div>
        </div>

        {/* Chat interface */}
        <div className="relative mx-auto mt-20 max-w-5xl">

          <div className="absolute inset-x-20 -bottom-10 h-32 rounded-full bg-[#70427e]/10 blur-[70px]" />

          <div className="relative overflow-hidden rounded-[24px] border border-[#eae3eb] bg-white p-2 shadow-[0_30px_90px_rgba(40,25,50,0.10)]">

            <div className="flex items-center justify-between border-b border-[#f0ebf0] px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5eafa]">
                  <MessageSquare className="h-5 w-5 text-[#70427e]" />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-[#201c28]">
                    GovBot
                  </h3>
                  <p className="text-xs text-[#9b929f]">
                    Government services assistant
                  </p>
                </div>

              </div>

              <span className="flex items-center gap-2 text-xs text-[#6f6975]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                eCitizen ecosystem
              </span>

            </div>

            <Image
              src="/images/govbotchat.svg"
              alt="GovBot conversational interface"
              width={1800}
              height={1000}
              priority
              className="h-auto w-full object-contain"
            />

          </div>
        </div>

        {/* Proof */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 text-center">

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b63b5]">
            Proven in practice
          </span>

          <p className="text-sm leading-7 text-[#6f6975]">
            GovBot has been implemented within Kenya's eCitizen ecosystem, demonstrating its application in a live digital government environment.
          </p>

        </div>

      </div>
    </section>
  );
}
