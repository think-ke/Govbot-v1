'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export function GovStackAlignment() {
  const alignments = [
    {
      area: 'Messaging',
      details: 'SMS, WhatsApp and chatbot communication channels.',
    },
    {
      area: 'Data Exchange',
      details: 'Secure interoperability between government platforms.',
    },
    {
      area: 'Workflow Engine',
      details: 'Automated service delivery and process orchestration.',
    },
    {
      area: 'Identity',
      details: 'Trusted digital identity and citizen verification.',
    },
  ]

  return (
    <section className="bg-[#F7F2FC] py-24 px-6 lg:px-8" id="govstack">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
              Standards & Compliance
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#341A5A]">
              GovStack Alignment
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              GovBot is designed in accordance with international GovStack
              standards, ensuring interoperability, scalability, and secure
              digital public infrastructure across government institutions.
            </p>

            <div className="mt-10 space-y-5">

              {alignments.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm border border-purple-100"
                >

                  <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-purple-600" />

                  <div>

                    <h3 className="text-lg font-semibold text-[#341A5A]">
                      {item.area}
                    </h3>

                    <p className="mt-1 text-gray-600">
                      {item.details}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <Link href="https://govstack.gitbook.io/use-cases/use-cases/ai-chatbot-discoverability-government-services" target="_blank">
            <Button
              className="
                mt-10
                h-12
                rounded-xl
                bg-gradient-to-r
                from-[#7B3FBF]
                to-[#143C8B]
                px-8
                text-white
                hover:opacity-90
              "
            >
              Learn About GovStack
            </Button>
            </Link>

          </div>

          {/* Illustration */}

          {/* Workflow Illustration */}

<div className="order-2 lg:order-1 overflow-hidden rounded-3xl bg-white border border-purple-200 shadow-xl">

  <Image
    src="/images/DPI.png"
    alt="How GovBot Works"
    width={1400}
    height={1000}
    className="w-full h-auto object-contain"
  />

</div>

        </div>

      </div>
    </section>
  )
}