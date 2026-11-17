import {
  ShieldCheck,
  LockKeyhole,
  Scale,
  ArrowUpRight,
} from "lucide-react";

const assuranceAreas = [
  {
    icon: ShieldCheck,
    label: "THiNK Lab",
    title: "THiNK Lab Assessed",
    description:
      "Get your AI systems assessed using our trusted evaluation frameworks.",
    detail: "Trusted evaluation frameworks",
  },
  {
    icon: LockKeyhole,
    label: "Data protection",
    title: "DPA Assessment",
    description:
      "Ensuring compliance with the Kenyan Data Protection Act.",
    detail: "Kenyan Data Protection Act",
  },
  {
    icon: Scale,
    label: "Responsible AI",
    title: "ETICAS Assessment",
    description:
      "Ensuring trustworthy AI systems through independent evaluation and continuous monitoring.",
    detail: "Independent evaluation & monitoring",
  },
];

export function PrivacySecurity() {
  return (
    <section
      id="privacy-security"
      className="section-padding overflow-hidden bg-[#201c28] text-white"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Intro */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c18cda]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c18cda]" />
              Security
            </span>

            <h2 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Privacy &amp; Security
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#c7bdcc]">
              Building trustworthy digital services through independent
              assessment, privacy protection and responsible AI practices.
            </p>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#d9b5e8]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="font-heading text-sm font-semibold text-white">
                  THiNK Lab
                </p>
                <p className="mt-1 text-xs text-[#b9adbf]">
                  Independent assurance and assessment
                </p>
              </div>
            </div>
          </div>

          {/* Assurance areas */}
          <div className="grid gap-4 sm:grid-cols-2">
            {assuranceAreas.map(
              ({ icon: Icon, label, title, description, detail }, index) => (
                <article
                  key={title}
                  className={`rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-colors hover:border-[#c18cda]/40 hover:bg-white/[0.07] ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c18cda]/15 text-[#d9b5e8]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c18cda]">
                      {label}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#c7bdcc]">
                    {description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="text-xs font-medium text-[#d9b5e8]">
                      {detail}
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-[#b9adbf]">
            Trust is not a single feature. It is an ongoing commitment to
            responsible design, appropriate safeguards and continuous
            evaluation.
          </p>

          <a
            href="https://lab.think.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#d9b5e8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c18cda] focus-visible:ring-offset-4 focus-visible:ring-offset-[#201c28]"
          >
            Explore THiNK Lab
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}