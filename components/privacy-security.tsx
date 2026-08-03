'use client'

import {
  Lock,
  ShieldCheck,
  FileCheck,
} from 'lucide-react'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export function PrivacySecurity() {
  return (
    <section className="bg-[#633B82] py-28 px-6 lg:px-8" id="privacy">
      <div className="mx-auto max-w-7xl">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="rounded-full border border-white/40 px-6 py-2 text-white font-semibold">
            Security
          </span>

        </div>

        {/* Heading */}

        <div className="mt-10 mb-20">

          <h2 className="text-6xl font-light text-white leading-tight">
            Privacy & Security
          </h2>

        </div>

        {/* Layout */}

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Card */}

          <div className="lg:col-span-4">

            <div className="h-full rounded-[38px] bg-[#F4E8FA] p-10 shadow-xl">

              <div className="mb-10 flex h-44 w-44 items-center justify-center rounded-full bg-white">

                <ShieldCheck className="h-20 w-20 text-[#6C3EA0]" />

              </div>

              <h3 className="text-5xl font-bold text-[#231728] leading-tight">
                THiNK Lab
                <br />
                Assessed
              </h3>

              <p className="mt-8 text-2xl leading-10 text-gray-600">
                Get your AI systems assessed using our trusted evaluation
                frameworks.
              </p>


            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Card */}

            <div className="rounded-[38px] bg-[#F4E8FA] p-8 shadow-xl">

              <div className="flex items-center justify-between gap-8">

                <div className="flex items-center gap-8">

                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white">

                    <Lock className="h-16 w-16 text-[#6C3EA0]" />

                  </div>

                  <h3 className="text-4xl font-bold text-[#231728]">
                    DPA
                    <br />
                    Assessment
                  </h3>

                </div>

                <p className="max-w-md text-xl text-gray-600">
                  Ensuring compliance with the Kenyan Data Protection Act.
                </p>


              </div>

            </div>

            {/* Card */}

            <div className="rounded-[38px] bg-[#F4E8FA] p-8 shadow-xl">

              <div className="flex items-center justify-between gap-8">

                <div className="flex items-center gap-8">

                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white">

                    <FileCheck className="h-16 w-16 text-[#6C3EA0]" />

                  </div>

                  <h3 className="text-4xl font-bold text-[#231728]">
                    ETICAS
                    <br />
                    Assessment
                  </h3>

                </div>

                <p className="max-w-md text-xl text-gray-600">
                Ensuring trustworthy AI systems through independent
                evaluation and continuous monitoring.
                </p>

              </div>

            </div>

          </div>

        </div>
        <div className="mt-16 flex justify-center">
          
        </div>
        <Link href="http://thinkit-bot-of-bot-xviqck-7bc702-144-91-120-217.sslip.io/">
            <Button
              className="
        h-14
        rounded-xl
        bg-white
        px-10
        text-lg
        font-semibold
        text-[#633B82]
        shadow-lg
        hover:bg-[#F4E8FA]
      "
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

      </div>
    </section>
  )
}