'use client'

import { Check } from 'lucide-react'

export function Collaboration() {
  const points = [
    'Designed for different government agencies to collaborate seamlessly.',
    'Encourages information sharing and institutional capacity building.',
    'Streamlines cross-agency workflows and digital service delivery.',
    'Promotes secure data interoperability and system integration.',
  ]

  return (
    <section className="bg-white py-24 px-6 lg:px-8" id="collaboration">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Partnerships
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#341A5A]">
            Collaboration & Development
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Collaboration is at the heart of GovBot. By bringing together
            government agencies, development partners, and technology providers,
            GovBot creates a unified digital ecosystem that improves public
            service delivery across Kenya.
          </p>

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Illustration */}

          <div className="flex items-center justify-center rounded-[32px] border border-purple-100 bg-[#F7F2FC] p-12 shadow-lg h-[450px]">

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-md">

                <div className="h-14 w-14 rounded-xl bg-[#6E3CBC]" />

              </div>

              <h3 className="text-2xl font-semibold text-[#341A5A]">
                Collaboration Network
              </h3>

              <p className="mt-3 text-lg text-[#6B5A88]">
                Government • Partners • Citizens
              </p>

            </div>

          </div>

          {/* Benefits */}

          <div className="space-y-5">

            {points.map((point, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">

                  <Check className="h-6 w-6 text-purple-700" />

                </div>

                <p className="text-lg leading-8 text-gray-800">
                  {point}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}