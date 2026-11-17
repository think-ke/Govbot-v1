"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  IdCard,
  Landmark,
  MapPinned,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

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

function CarouselControls({
  onPrevious,
  onNext,
  isPaused,
  onTogglePause,
  label,
}: {
  onPrevious: () => void;
  onNext: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrevious}
        aria-label={`Previous ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eae3eb] bg-white text-[#70427e] transition-colors hover:bg-[#f5eafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70427e] focus-visible:ring-offset-2"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label={`Next ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eae3eb] bg-white text-[#70427e] transition-colors hover:bg-[#f5eafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70427e] focus-visible:ring-offset-2"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={onTogglePause}
        aria-label={
          isPaused ? `Play ${label} autoplay` : `Pause ${label} autoplay`
        }
        className="ml-1 rounded-full px-3 py-2 text-xs font-semibold text-[#70427e] transition-colors hover:bg-[#f5eafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70427e] focus-visible:ring-offset-2"
      >
        {isPaused ? "Play" : "Pause"}
      </button>
    </div>
  );
}

export function Agencies() {
  const kenyaAutoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: false,
    })
  );

  const globalAutoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: false,
    })
  );

  const [kenyaEmblaRef, kenyaEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [kenyaAutoplay.current]
  );

  const [globalEmblaRef, globalEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [globalAutoplay.current]
  );

  const [kenyaPaused, setKenyaPaused] = useState(false);
  const [globalPaused, setGlobalPaused] = useState(false);

  useEffect(() => {
    if (!kenyaEmblaApi || !globalEmblaApi) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const kenyaPlugin = kenyaEmblaApi.plugins().autoplay;
    const globalPlugin = globalEmblaApi.plugins().autoplay;

    const updateAutoplay = () => {
      if (mediaQuery.matches) {
        kenyaPlugin?.stop();
        globalPlugin?.stop();
        setKenyaPaused(true);
        setGlobalPaused(true);
      } else {
        kenyaPlugin?.play();
        globalPlugin?.play();
        setKenyaPaused(false);
        setGlobalPaused(false);
      }
    };

    updateAutoplay();
    mediaQuery.addEventListener("change", updateAutoplay);

    return () => {
      mediaQuery.removeEventListener("change", updateAutoplay);
      kenyaPlugin?.stop();
      globalPlugin?.stop();
    };
  }, [kenyaEmblaApi, globalEmblaApi]);

  const toggleKenyaAutoplay = () => {
    const plugin = kenyaEmblaApi?.plugins().autoplay;
    if (!plugin) return;

    if (kenyaPaused) {
      plugin.play();
      setKenyaPaused(false);
    } else {
      plugin.stop();
      setKenyaPaused(true);
    }
  };

  const toggleGlobalAutoplay = () => {
    const plugin = globalEmblaApi?.plugins().autoplay;
    if (!plugin) return;

    if (globalPaused) {
      plugin.play();
      setGlobalPaused(false);
    } else {
      plugin.stop();
      setGlobalPaused(true);
    }
  };

  return (
    <section id="deployments" className="overflow-hidden">
      <div id="agencies" className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="think-eyebrow">
                <CheckCircle2 className="mr-2 inline h-3.5 w-3.5" />
                Kenya implementation
              </span>

              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-[#201c28] md:text-5xl">
                Government institutions and services.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#6f6975]">
                GovBot is a THiNK product with an implementation within
                Kenya&apos;s digital government ecosystem. The institutions
                below reflect the government service areas represented in
                the current GovBot experience.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-[#eae3eb] bg-[#fbfaf7] px-4 py-2 text-sm text-[#6f6975] md:self-auto">
              <span className="h-2 w-2 rounded-full bg-[#70427e]" />
              eCitizen ecosystem
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-[#6f6975]">
              Government institutions
            </p>

            <CarouselControls
              label="Kenya institutions"
              onPrevious={() => kenyaEmblaApi?.scrollPrev()}
              onNext={() => kenyaEmblaApi?.scrollNext()}
              isPaused={kenyaPaused}
              onTogglePause={toggleKenyaAutoplay}
            />
          </div>

          <div className="overflow-hidden" ref={kenyaEmblaRef}>
            <div className="-ml-4 flex">
              {agencies.map((agency) => (
                <div
                  key={agency.name}
                  className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                >
                  <article className="think-card group flex min-h-[275px] flex-col p-6">
                    <div className="mb-8 flex h-16 items-center">
                      <Image
                        src={agency.logo}
                        alt={`${agency.name} logo`}
                        width={200}
                        height={64}
                        className="h-full w-auto max-w-full object-contain object-left"
                      />
                    </div>

                    <h3 className="font-heading text-base font-semibold leading-snug text-[#201c28]">
                      {agency.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6f6975]">
                      {agency.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-medium text-[#70427e]">
                      <span className="h-2 w-2 rounded-full bg-[#9a70a8]" />
                      Kenya implementation
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-[#8a818e]">
            The Kenya implementation demonstrates GovBot&apos;s ability to
            support information discovery across different government
            services and institutions.
          </p>
        </div>
      </div>

      <div
        id="use-cases"
        className="section-padding border-t border-[#eae3eb] bg-[#f5f1f5]"
      >
        <div className="section-container">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="think-eyebrow">Where GovBot can help</span>

              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-[#201c28] md:text-5xl">
                Built for different layers of government.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#6f6975]">
                Every country has a different government structure, service
                catalogue, language landscape and digital infrastructure.
                GovBot is designed to adapt to these different contexts.
              </p>
            </div>

            <CarouselControls
              label="government domains"
              onPrevious={() => globalEmblaApi?.scrollPrev()}
              onNext={() => globalEmblaApi?.scrollNext()}
              isPaused={globalPaused}
              onTogglePause={toggleGlobalAutoplay}
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-[#6f6975]">
              Government domains and communities that can benefit from GovBot
            </p>
          </div>

          <div className="overflow-hidden" ref={globalEmblaRef}>
            <div className="-ml-4 flex">
              {governmentAreas.map(({ name, description, icon: Icon }) => (
                <div
                  key={name}
                  className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                >
                  <article className="think-card group flex min-h-[285px] flex-col p-6">
                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5eafa] text-[#70427e] transition-colors group-hover:bg-[#70427e] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-heading text-lg font-semibold leading-snug text-[#201c28]">
                      {name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#6f6975]">
                      {description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-[#6f6975]">
            From national digital services to local administration, GovBot
            can be configured around the institutions, services, languages
            and communities of each deployment.
          </p>
        </div>
      </div>
    </section>
  );
}