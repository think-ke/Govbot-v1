"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Building2,
  CreditCard,
  GraduationCap,
  HeartPulse,
  IdCard,
  Landmark,
  MapPinned,
  Plane,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  Accessibility,
} from "lucide-react";
import { useRef } from "react";

const governmentAreas = [
  {
    name: "Public Administration",
    description:
      "Help citizens navigate government information, procedures, applications, and public services from a single conversational interface.",
    icon: Landmark,
  },
  {
    name: "Civil Registration & Identity",
    description:
      "Guide citizens through identity, birth, death, population registration, and other foundational public services.",
    icon: IdCard,
  },
  {
    name: "Immigration & Border Services",
    description:
      "Make passports, visas, residency, permits, and immigration information easier to discover and understand.",
    icon: Plane,
  },
  {
    name: "Business & Investment",
    description:
      "Support entrepreneurs and businesses with registration, licensing, compliance, taxation, and investment information.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Health & Public Services",
    description:
      "Help people find relevant public health information, services, facilities, requirements, and available government programmes.",
    icon: HeartPulse,
  },
  {
    name: "Education",
    description:
      "Connect students, parents, educators, and institutions with education services, programmes, applications, and requirements.",
    icon: GraduationCap,
  },
  {
    name: "Social Protection",
    description:
      "Help people discover social assistance programmes, eligibility requirements, applications, and support services.",
    icon: ShieldCheck,
  },
  {
    name: "Local & Municipal Government",
    description:
      "Bring local government information and services closer to residents through accessible conversational interfaces.",
    icon: MapPinned,
  },
  {
    name: "Citizens & Residents",
    description:
      "Give people a simpler way to ask questions, understand government processes, and find the right service.",
    icon: Users,
  },
  {
    name: "Businesses & Entrepreneurs",
    description:
      "Reduce the complexity of interacting with government for businesses, investors, and entrepreneurs.",
    icon: Building2,
  },
  {
    name: "Visitors & Foreign Nationals",
    description:
      "Provide accessible information about public services, travel requirements, immigration, and other government processes.",
    icon: CreditCard,
  },
  {
    name: "Underserved Communities",
    description:
      "Extend access to government information for people facing language, literacy, accessibility, or digital barriers.",
    icon: Accessibility,
  },
];

export function Agencies() {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
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
      id="use-cases"
      className="bg-[#EEE3F8] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7B4BB7]">
            Where GovBot Can Help
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#341A5A] md:text-5xl">
            Built for every layer of government
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            GovBot can be configured around the services, institutions, and
            people that make up each country's government ecosystem. From
            national services to local administration, it provides a simpler
            conversational interface for accessing public information.
          </p>

        </div>


        {/* ================= CAROUSEL ================= */}

        <div
          className="overflow-hidden"
          ref={emblaRef}
        >

          <div className="-ml-6 flex">

            {governmentAreas.map((area) => {

              const Icon = area.icon;

              return (
                <div
                  key={area.name}
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
                      group
                      flex
                      h-full
                      min-h-[360px]
                      flex-col
                      rounded-3xl
                      border
                      border-white/70
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        mb-8
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#F6F0FB]
                        transition-colors
                        duration-300
                        group-hover:bg-[#7B4BB7]
                      "
                    >

                      <Icon
                        className="
                          h-7
                          w-7
                          text-[#7B4BB7]
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />

                    </div>


                    {/* Content */}

                    <h3 className="text-xl font-bold leading-snug text-[#341A5A]">
                      {area.name}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {area.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* ================= FOOTER ================= */}

        <div className="mx-auto mt-14 max-w-3xl text-center">

          <p className="text-base leading-7 text-[#5F4B82]">
            GovBot is designed to adapt to each country's institutions,
            services, languages, and digital public infrastructure.
          </p>

        </div>

      </div>
    </section>
  );
}