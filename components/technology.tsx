'use client'

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

          {/* Visualization */}

          <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm shadow-2xl">

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <div className="h-7 w-7 rounded-md bg-[#6A3AA8]" />
                </div>

              </div>

              <p className="text-sm tracking-wide text-gray-300">
                Technology Stack Visualization
              </p>

            </div>

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