import Image from "next/image";
import {
  Building2,
  Share2,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const collaborationPoints = [
  {
    number: "01",
    title:
      "Designed for different government agencies to collaborate seamlessly.",
    icon: Building2,
  },
  {
    number: "02",
    title:
      "Encourages information sharing and institutional capacity building.",
    icon: Share2,
  },
  {
    number: "03",
    title:
      "Streamlines cross-agency workflows and digital service delivery.",
    icon: Workflow,
  },
  {
    number: "04",
    title:
      "Promotes secure data interoperability and system integration.",
    icon: ShieldCheck,
  },
];

export function Collaboration() {
  return (
    <section
      id="collaboration"
      className="section-padding bg-white"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="think-card overflow-hidden bg-[#fbfaf7] p-4 sm:p-6">
            <div className="relative aspect-[5/4] w-full">
              <Image
                src="/images/collab.png"
                alt="Illustration representing collaboration around GovBot"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <span className="think-eyebrow">Partnerships</span>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-[#201c28] md:text-5xl">
              Collaboration &amp; Development
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6f6975]">
              Collaboration is at the heart of GovBot. By bringing together
              government agencies, development partners, and technology
              providers, GovBot creates a unified digital ecosystem that
              improves public service delivery.
            </p>

            <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-[#70427e]">
              How GovBot Works
            </p>

            <div className="mt-3 divide-y divide-[#eae3eb]">
              {collaborationPoints.map(({ number, title, icon: Icon }) => (
                <div key={number} className="flex gap-4 py-5 first:pt-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5eafa] text-[#70427e]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex flex-1 items-start gap-3">
                    <span className="mt-1 font-heading text-xs font-bold text-[#a58aaf]">
                      {number}
                    </span>
                    <h3 className="font-heading text-base font-semibold leading-7 text-[#201c28]">
                      {title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:info@think.ke"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#70427e] transition-colors hover:text-[#593466] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70427e] focus-visible:ring-offset-4"
            >
              Explore collaboration
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}