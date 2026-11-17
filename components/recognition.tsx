import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const recognitions = [
  {
    category: "Infrastructure",
    title: "Published GovStack Interoperability Use Case",
    description:
      "GovStack published GovBot as a conversational AI use case demonstrating streamlined citizen access to eCitizen services.",
    image: "/recognition/Govstack.svg",
    link: "https://govstack.gitbook.io/use-cases/use-cases/ai-chatbot-discoverability-government-services",
    linkLabel: "Learn More",
  },
  {
    category: "Awards",
    title: "NMWSO Safety by Design Challenge",
    description:
      "Awarded by the National Models for Women’s Safety Online for its safety-by-design approach from inception.",
    image: "/recognition/NMWSO.svg",
    link: "https://www.irex.org/project/national-models-womens-safety-online-nmwso",
    linkLabel: "Learn More",
  },
  {
    category: "Recognition",
    title: "IRCAI Top 100 AI Solutions in Africa",
    description:
      "Recognized by UNESCO IRCAI among Africa’s Top 100 AI solutions driving sustainable development.",
    image: "/recognition/IRCAI.svg",
    link: "https://ircai.org/gt_category/kenya/",
    linkLabel: "Learn More",
  },
];

export function Recognition() {
  return (
    <section id="recognition" className="section-padding bg-[#fbfaf7]">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <span className="think-eyebrow">Recognition &amp; ecosystem</span>

          <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-[#201c28] md:text-5xl">
            Part of a wider conversation.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6f6975]">
            GovBot sits within a wider ecosystem of work on digital public
            infrastructure, responsible technology and AI for public benefit.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recognitions.map((item) => (
            <article
              key={item.title}
              className="think-card flex h-full flex-col overflow-hidden p-6"
            >
              <div className="mb-8 flex h-24 w-full items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={120}
                  className="h-full w-auto max-w-full object-contain object-left"
                />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6a96]">
                {item.category}
              </span>

              <h3 className="mt-3 font-heading text-xl font-semibold text-[#201c28]">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#6f6975]">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#70427e] transition-colors hover:text-[#593466] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70427e] focus-visible:ring-offset-4"
              >
                {item.linkLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}