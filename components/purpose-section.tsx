'use client'

export function PurposeSection() {
  return (
    <section className="bg-white py-24 px-6 lg:px-8" id="purpose">
      <div className="mx-auto max-w-7xl">

        {/* ================= PURPOSE ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2 mb-28">

          {/* Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
              Informatics
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#341A5A]">
              Purpose
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B5A88]">
              To simplify access to government services for Kenyan citizens by
              creating an intelligent digital gateway that reduces bureaucracy,
              improves transparency, and strengthens citizen engagement.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                <h3 className="text-xl font-semibold text-[#341A5A]">
                  Accessibility & Transparency
                </h3>

                <p className="mt-2 text-[#6B5A88]">
                  Ensuring equal access to government services for every citizen.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                <h3 className="text-xl font-semibold text-[#341A5A]">
                  Efficient Service Delivery
                </h3>

                <p className="mt-2 text-[#6B5A88]">
                  Faster responses through one intelligent digital platform.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                <h3 className="text-xl font-semibold text-[#341A5A]">
                  Citizen Empowerment
                </h3>

                <p className="mt-2 text-[#6B5A88]">
                  Giving every Kenyan instant access to reliable government
                  information and services.
                </p>
              </div>

            </div>

          </div>

          {/* Image */}

          <div className="flex items-center justify-center rounded-3xl border border-purple-100 bg-purple-50 h-[450px] shadow-lg">

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">

                <div className="h-12 w-12 rounded-xl bg-[#6E3CBC]" />

              </div>

              <p className="text-lg text-[#6B5A88]">
                Team Photo
              </p>

            </div>

          </div>

        </div>

        {/* ================= HOW IT WORKS ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="order-2 lg:order-1 flex items-center justify-center rounded-3xl border border-purple-100 bg-purple-50 h-[450px] shadow-lg">

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">

                <div className="h-12 w-12 rounded-xl bg-[#6E3CBC]" />

              </div>

              <p className="text-lg text-[#6B5A88]">
                Workflow Illustration
              </p>

            </div>

          </div>

          {/* Content */}

          <div className="order-1 lg:order-2">

            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
              Functionality
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#341A5A]">
              How It Works
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B5A88]">
              Citizens interact with GovBot through WhatsApp, SMS, or the
              web portal. Artificial intelligence understands each request,
              identifies the appropriate service, and guides the user through the
              entire process.
            </p>

            <div className="mt-10 space-y-6">

              {[
                {
                  step: 1,
                  title: 'User Initiates',
                  text: 'Citizen submits a request through their preferred communication channel.',
                },
                {
                  step: 2,
                  title: 'AI Processing',
                  text: 'GovBot interprets the request using natural language understanding.',
                },
                {
                  step: 3,
                  title: 'Service Match',
                  text: 'The user is connected to the correct government service or information.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#341A5A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#6B5A88]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}