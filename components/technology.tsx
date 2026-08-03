'use client'
import Image from 'next/image'
export function Technology() {
  const stack = [
    'NLP/NLU + RAG',
    'Open-source STT/TTS',
    'Microservices backend',
    'API-first design',
    'GovStack sandbox',
  ]

  return (
    <section
      id="technology"
      className="bg-gradient-to-r from-[#A581B9] to-[#653C7C] py-24 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div
  className="
    overflow-hidden
    rounded-3xl
    bg-white
    border
    border-purple-200
    shadow-[0_25px_80px_rgba(0,0,0,0.18)]
    transition-all
    duration-300
    hover:scale-[1.01]
  "
>
  <Image
    src="/images/gov-stack.png"
    alt="GovStack Technology Architecture"
    width={1400}
    height={1000}
    className="w-full h-auto object-contain"
  />
</div>

          {/* Content */}

          <div>

            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Technology
            </h2>

            <p className="mb-10 text-lg leading-8 text-gray-300">
              GovBot is built on a modern, scalable architecture that powers
              Kenya&apos;s digital government services. It provides enterprise-grade
              security, high availability, seamless integrations, and reliable
              performance across multiple platforms.
            </p>

            <div className="space-y-5">

              {stack.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">

                    <div className="h-3 w-3 rounded-full bg-[#6A3AA8]" />

                  </div>

                  <span className="text-lg text-gray-200">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}