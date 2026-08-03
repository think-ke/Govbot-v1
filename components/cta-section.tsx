'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-white py-28 px-6 lg:px-8">

      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[28px]
          border
          border-gray-200
          bg-white
          px-8
          py-24
          shadow-sm
        "
      >
        <div className="mx-auto max-w-5xl text-center">

          {/* Heading */}

          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black leading-tight">

            Start building smarter
            <br />
            service access

          </h2>

          {/* Description */}

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-gray-700">

            Join developers, agencies, and citizens scaling the future of
            Kenya's digital infrastructure.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Button
              className="
                h-16
                rounded-xl
                bg-gradient-to-r
                from-[#6A3EA0]
                to-[#123D7A]
                px-12
                text-xl
                font-medium
                text-white
                hover:opacity-90
              "
            >
              Launch
            </Button>

            <Button
              variant="outline"
              className="
                h-16
                rounded-xl
                border-2
                border-gray-300
                bg-white
                px-12
                text-xl
                font-medium
                text-black
                hover:bg-gray-50
              "
            >
              Integrate
            </Button>

          </div>

        </div>
      </div>

    </section>
  )
}