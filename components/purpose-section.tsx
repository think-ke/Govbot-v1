import Image from "next/image";
import {
  Accessibility,
  Gauge,
  UserCheck,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    icon: Accessibility,
    title: "Accessibility & Transparency",
    description:
      "Ensuring equal access to government services for every citizen.",
  },
  {
    icon: Gauge,
    title: "Efficient Service Delivery",
    description:
      "Faster responses through one intelligent digital platform.",
  },
  {
    icon: UserCheck,
    title: "Citizen Empowerment",
    description:
      "Giving every Kenyan instant access to reliable government information and services.",
  },
];

const steps = [
  {
    number: "01",
    title: "Ask a question",
    description:
      "A user asks about a government service or process through a conversational interface.",
  },
  {
    number: "02",
    title: "Understand the information",
    description:
      "GovBot interprets the request and helps surface relevant service information.",
  },
  {
    number: "03",
    title: "Service Match",
    description:
      "The user is connected to the correct government service or information.",
  },
];

export function PurposeSection() {
  return (
    <>
      {/* Purpose */}
      <section
        id="purpose"
        className="section-padding bg-[#fbfaf7]"
      >
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="think-eyebrow">Why GovBot</span>

              <h2 className="mt-5 max-w-xl font-heading text-4xl font-bold leading-tight tracking-tight text-[#201c28] md:text-5xl">
                Our purpose.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#6f6975]">
                To simplify access to government services for citizens by
                creating an intelligent digital gateway that reduces
                bureaucracy, improves transparency, and strengthens citizen
                engagement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className={`think-card p-6 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5eafa] text-[#70427e]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-[#201c28]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#6f6975]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="section-padding bg-white"
      >
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="think-eyebrow">Functionality</span>

              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-[#201c28] md:text-5xl">
                How it Works
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#6f6975]">
                Citizens interact with GovBot through the web portal. Artificial intelligence understands each request, identifies the appropriate service, and guides the user through the entire process.
              </p>

              <div className="mt-10">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative flex gap-5 pb-9 last:pb-0">
                    {index !== steps.length - 1 && (
                      <span className="absolute left-[19px] top-11 h-[calc(100%-28px)] w-px bg-[#e7d9ed]" />
                    )}

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5eafa] font-heading text-sm font-bold text-[#70427e]">
                      {step.number}
                    </div>

                    <div className="pt-1">
                      <h3 className="font-heading text-lg font-semibold text-[#201c28]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-7 text-[#6f6975]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="think-card overflow-hidden bg-[#fbfaf7] p-5 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5eafa] text-[#70427e]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#201c28]">
                    Connected service experience
                  </p>
                  <p className="text-xs text-[#8a818e]">
                    GovBot technology overview
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/tech-stack.png"
                  alt="Illustration of the GovBot technology stack"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#eae3eb] pt-4">
                <span className="text-xs text-[#6f6975]">
                  Conversational access to services
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#70427e]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}