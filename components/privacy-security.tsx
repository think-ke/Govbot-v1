'use client'

import { Lock, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PrivacySecurity() {
  return (
    <section className="bg-[#633B82] py-16 px-6 lg:px-8" id="privacy">
      <div className="mx-auto max-w-4xl">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-white/40 px-5 py-1.5 text-sm font-semibold text-white">
            Security
          </span>
        </div>

        {/* Heading */}
        <div className="mt-6 mb-12 text-center">
          <h2 className="text-4xl font-light text-white md:text-5xl">
            Privacy & Security
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-12">

          {/* Left Card */}
          <div className="lg:col-span-4">
            <div className="h-full rounded-3xl bg-[#F4E8FA] p-6 shadow-lg">

              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white">
                <ShieldCheck className="h-10 w-10 text-[#6C3EA0]" />
              </div>

              <h3 className="text-3xl font-bold leading-tight text-[#231728]">
                THiNK Lab
                <br />
                Assessed
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Get your AI systems assessed using our trusted evaluation
                frameworks.
              </p>

            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 lg:col-span-8">

            {/* DPA */}
            <div className="rounded-3xl bg-[#F4E8FA] p-6 shadow-lg">

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <Lock className="h-8 w-8 text-[#6C3EA0]" />
                </div>

                <div className="flex-1">

                  <h3 className="text-2xl font-bold text-[#231728]">
                    DPA Assessment
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Ensuring compliance with the Kenyan Data Protection Act.
                  </p>

                </div>

              </div>

            </div>

            {/* ETICAS */}
            <div className="rounded-3xl bg-[#F4E8FA] p-6 shadow-lg">

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <FileCheck className="h-8 w-8 text-[#6C3EA0]" />
                </div>

                <div className="flex-1">

                  <h3 className="text-2xl font-bold text-[#231728]">
                    ETICAS Assessment
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Ensuring trustworthy AI systems through independent
                    evaluation and continuous monitoring.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link href="https://websites-thinklab-rmc6gi-13a19e-144-91-120-217.sslip.io/">
            <Button
              className="
                h-11
                rounded-xl
                bg-white
                px-8
                text-base
                font-semibold
                text-[#633B82]
                shadow-lg
                hover:bg-[#F4E8FA]
              "
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}