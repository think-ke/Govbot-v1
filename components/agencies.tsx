"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const agencies = [
  {
    name: "ICT Authority of Kenya",
    description: "Digital government and ICT services",
    logo: "/logo/ict.png",
  },
  {
    name: "Kenya Film Classification Board",
    description: "Film classification and content regulation",
    logo: "/logo/kfcb.png",
  },
  {
    name: "Business Registration Service",
    description: "Business registration and company services",
    logo: "/logo/brs.png",
  },
  {
    name: "Integrated Population Registration Services",
    description: "National identity and population records",
    logo: "/logo/iprs.png",
  },
  {
    name: "Department of Immigration Services",
    description: "Passports, visas and immigration services",
    logo: "/logo/imm.png",
  },
  {
    name: "National Registration Bureau",
    description: "National identification services",
    logo: "/logo/nrb.png",
  },
  {
    name: "Department of Refugee Services",
    description: "Refugee registration and management",
    logo: "/logo/rs.png",
  },
  {
    name: "Konza Technopolis Development Authority",
    description: "Smart city and digital innovation",
    logo: "/logo/konza.png",
  },
  {
    name: "Civil Registration Services",
    description: "Birth and death registration services",
    logo: "/logo/crs.png",
  },
];

export function Agencies() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay.current]
  );

  return (
    <section
      id="agencies"
      className="bg-[#EEE3F8] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
            Connected Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#341A5A] md:text-5xl">
            Supported Agencies
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            GovBot integrates with Kenya's leading government institutions,
            allowing citizens to access public services from one trusted,
            intelligent platform.
          </p>

        </div>

        {/* Carousel */}

        <div className="overflow-hidden" ref={emblaRef}>

          <div className="-ml-6 flex">

            {agencies.map((agency) => (

              <div
                key={agency.name}
                className="
                  min-w-0
                  flex-[0_0_100%]
                  pl-6
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                  xl:flex-[0_0_25%]
                "
              >

                <div
                  className="
                    flex
                    h-full
                    flex-col
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >

                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-purple-50">

                    <Image
                      src={agency.logo}
                      alt={agency.name}
                      width={90}
                      height={120}
                      className="h-30 w-30 object-contain"
                    />

                  </div>

                  <h3 className="text-xl font-bold leading-snug text-[#341A5A]">
                    {agency.name}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {agency.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="mt-16 text-center">

          <p className="text-lg text-[#5F4B82]">
            More government agencies continue to be integrated into the
            GovBot ecosystem as Kenya expands its digital public services.
          </p>

        </div>

      </div>
    </section>
  );
}