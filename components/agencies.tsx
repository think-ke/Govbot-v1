"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Building2,
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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef } from "react";
/* =========================================================
   KENYA IMPLEMENTATION
   ========================================================= */

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

/* =========================================================
   GOVERNMENT DOMAINS AND USER BASES
   ========================================================= */

const governmentAreas = [
  {
    name: "Public Administration",
    description:
      "Help citizens navigate government information, procedures, applications, and public services through one conversational interface.",
    icon: Landmark,
  },
  {
    name: "Civil Registration & Identity",
    description:
      "Guide people through identity, birth, death, population registration, and other foundational public services.",
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
      "Help people find public health information, services, facilities, requirements, and government programmes.",
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
      "Provide accessible information about public services, travel requirements, immigration, and government processes.",
    icon: Plane,
  },
  {
    name: "Underserved Communities",
    description:
      "Extend access to government information for people facing language, literacy, accessibility, or digital barriers.",
    icon: Accessibility,
  },
];

export function Agencies() {
  /* =========================================================
     KENYA CAROUSEL
     ========================================================= */

  const kenyaAutoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [kenyaEmblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [kenyaAutoplay.current]
  );

  /* =========================================================
     GLOBAL USE CASE CAROUSEL
     ========================================================= */

  const globalAutoplay = useRef(
    Autoplay({
      delay: 2800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [globalEmblaRef, globalEmblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    if (!globalEmblaApi) return;

    const interval = setInterval(() => {
      globalEmblaApi.scrollPrev();
    }, 2800);

    return () => clearInterval(interval);
  }, [globalEmblaApi]);

  return (
    <section
      id="deployments"
      className="overflow-hidden bg-[#F6F0FB]"
    >

      {/* =====================================================
          SECTION 1: PROVEN IN PRACTICE
          ===================================================== */}

      <div className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7B4BB7]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7B4BB7] shadow-sm">

              <CheckCircle2 className="h-4 w-4" />

              Proven in Practice

            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#341A5A] md:text-5xl">
              Already deployed in Kenya
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              GovBot is a THiNK product with a proven implementation within
              Kenya's digital government ecosystem. Its deployment provides
              a real-world demonstration of how an intelligent conversational
              interface can help people navigate public services.
            </p>

          </div>


          {/* Kenya Implementation Label */}

          <div className="mb-7 flex flex-col items-center justify-between gap-4 sm:flex-row">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7B4BB7]">
                Kenya Implementation
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#341A5A]">
                Government institutions and services
              </h3>

            </div>

            <div className="rounded-full border border-[#7B4BB7]/10 bg-white px-4 py-2 text-sm text-[#6B5A88] shadow-sm">
              eCitizen ecosystem
            </div>

          </div>


          {/* Kenya Carousel */}

          <div
            className="overflow-hidden"
            ref={kenyaEmblaRef}
          >

            <div className="-ml-5 flex">

              {agencies.map((agency) => (

                <div
                  key={agency.name}
                  className="
                    min-w-0
                    flex-[0_0_100%]
                    pl-5
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_33.333%]
                    xl:flex-[0_0_25%]
                  "
                >

                  <div
                    className="
                      group
                      flex
                      min-h-[300px]
                      flex-col
                      rounded-3xl
                      border
                      border-[#2D1B44]/5
                      bg-white
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >

                    {/* Logo */}

                    <div
                      className="
                        mb-7
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#F6F0FB]
                        p-3
                        transition-all
                        duration-300
                        group-hover:bg-[#EEE3F8]
                      "
                    >

                      <Image
                        src={agency.logo}
                        alt={agency.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />

                    </div>


                    {/* Name */}

                    <h4 className="text-lg font-bold leading-snug text-[#341A5A]">
                      {agency.name}
                    </h4>


                    {/* Description */}

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {agency.description}
                    </p>


                    {/* Status */}

                    <div className="mt-auto pt-6">

                      <div className="flex items-center gap-2 text-xs font-medium text-[#6B5A88]">

                        <span className="h-2 w-2 rounded-full bg-green-500" />

                        Kenya implementation

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Kenya Footer */}

          <div className="mx-auto mt-10 max-w-3xl text-center">

            <p className="text-sm leading-7 text-[#6B5A88]">
              The Kenya implementation demonstrates GovBot's ability to
              operate across diverse government services and institutions.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          SECTION 2: GLOBAL APPLICABILITY
          ===================================================== */}

      <div
        id="use-cases"
        className="border-t border-white/60 bg-[#EEE3F8] py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7B4BB7]/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7B4BB7]">

              Where GovBot Can Help

            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#341A5A] md:text-5xl">
              Built for every layer of government
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Every country has a different government structure, service
              catalog, language landscape, and digital infrastructure.
              GovBot is designed to adapt to them.
            </p>

          </div>


          {/* Small explanatory line */}

          <div className="mb-8 flex items-center justify-between">

            <p className="text-sm font-medium text-[#5F4B82]">
              Government domains and communities that can benefit from GovBot
            </p>

            <ArrowRight className="hidden h-5 w-5 text-[#7B4BB7] sm:block" />

          </div>


          {/* Global Carousel */}

          <div
            className="overflow-hidden"
            ref={globalEmblaRef}
          >

            <div className="-ml-5 flex">

              {governmentAreas.map((area) => {

                const Icon = area.icon;

                return (
                  <div
                    key={area.name}
                    className="
                      min-w-0
                      flex-[0_0_100%]
                      pl-5
                      sm:flex-[0_0_50%]
                      lg:flex-[0_0_33.333%]
                      xl:flex-[0_0_25%]
                    "
                  >

                    <div
                      className="
                        group
                        flex
                        min-h-[330px]
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
                          transition-all
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


          {/* Global Footer */}

          <div className="mx-auto mt-12 max-w-3xl text-center">

            <p className="text-base leading-7 text-[#5F4B82]">
              From national digital services to local administration, GovBot
              can be configured around the institutions, services, languages,
              and communities of each deployment.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

