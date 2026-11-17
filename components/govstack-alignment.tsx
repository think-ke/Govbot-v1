import Image from "next/image";
import Link from "next/link";
import {
  MessagesSquare,
  ArrowLeftRight,
  Workflow,
  Fingerprint,
  ArrowUpRight,
} from "lucide-react";

const alignmentAreas = [
  {
    icon: MessagesSquare,
    title: "Messaging",
    description: "Chatbot communication channels.",
  },
  {
    icon: ArrowLeftRight,
    title: "Data Exchange",
    description: "Secure interoperability between government platforms.",
  },
  {
    icon: Workflow,
    title: "Workflow Engine",
    description: "Automated service delivery and process orchestration.",
  },
  {
    icon: Fingerprint,
    title: "Identity",
    description: "Trusted digital identity and citizen verification.",
  },
];

const GOVSTACK_URL = "https://www.govstack.global/";

export function GovStackAlignment() {
  return (
    <section
      id="govstack"
      className="section-padding bg-[#fbfaf7]"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Illustration */}
          <div className="think-card overflow-hidden p-4 sm:p-6">
            <div className="relative aspect-[5/4] w-full">
              <Image
                src="/images/DPI.png"
                alt="Digital public infrastructure illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="think-eyebrow">
              Standards &amp; Compliance
            </span>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-[#201c28] md:text-5xl">
              GovStack Alignment
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6f6975]">
              GovBot is designed in accordance with international GovStack
              standards, ensuring interoperability, scalability, and secure
              digital public infrastructure across government institutions.
            </p>

            <div className="mt-8 divide-y divide-[#eae3eb]">
              {alignmentAreas.map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9c5e1] text-[#70427e]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-xs font-bold text-[#a58aaf]">
                        0{index + 1}
                      </span>
                      <h3 className="font-heading text-base font-semibold text-[#201c28]">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[#6f6975]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={GOVSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#70427e] transition-colors hover:text-[#593466] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70427e] focus-visible:ring-offset-4"
            >
              Explore GovStack
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}