'use client'

const agencies = [
  {
    name: "ICT Authority of Kenya",
    description: "Digital government and ICT services",
  },
  {
    name: "Kenya Film Classification Board",
    description: "Film classification and content regulation",
  },
  {
    name: "Business Registration Service",
    description: "Business registration and company services",
  },
  {
    name: "Integrated Population Registration Services",
    description: "National identity and population records",
  },
  {
    name: "Department of Immigration Services",
    description: "Passports, visas, and immigration services",
  },
  {
    name: "National Registration Bureau",
    description: "National identification services",
  },
  {
    name: "Department of Refugee Services",
    description: "Refugee registration and management",
  },
  {
    name: "Konza Technopolis Development Authority",
    description: "Smart city and digital innovation",
  },
  {
    name: "Civil Registration Services",
    description: "Birth and death registration services",
  },
]

export function Agencies() {
  return (
    <section className="bg-[#EEE3F8] py-24 px-6 lg:px-8" id="agencies">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Connected Services
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#341A5A]">
            Supported Agencies
          </h2>

          <p className="mt-5 text-lg text-gray-700">
            GovBot integrates with Kenya's leading government institutions,
            making it easier for citizens to access services from one place.
          </p>

        </div>

        {/* Carousel */}

        <div
          className="
            flex
            gap-6
            overflow-x-auto
            pb-6
            snap-x
            snap-mandatory
            scrollbar-thin
            scrollbar-thumb-purple-300
            scrollbar-track-transparent
          "
        >

          {agencies.map((agency, index) => (

            <div
              key={index}
              className="
                snap-start
                min-w-[280px]
                flex-shrink-0
                rounded-3xl
                bg-white
                p-8
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-100">

                {/* Replace with agency logo */}

                <div className="h-10 w-10 rounded-lg bg-purple-600" />

              </div>

              <h3 className="text-xl font-semibold text-[#341A5A]">
                {agency.name}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {agency.description}
              </p>

            </div>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-12 text-center">

          <p className="text-lg text-[#5F4B82]">
            More government agencies are continuously being integrated into the
            GovBot ecosystem.
          </p>

        </div>

      </div>
    </section>
  )
}