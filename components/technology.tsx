import Image from "next/image";
import {
  BrainCircuit,
  AudioLines,
  Server,
  Plug,
  FlaskConical,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "NLP/NLU + RAG",
    description:
      "Conversational understanding and retrieval-augmented responses.",
  },
  {
    icon: AudioLines,
    title: "Open-source STT/TTS",
    description:
      "Speech recognition and synthesis built on open standards.",
  },
  {
    icon: Server,
    title: "Microservices backend",
    description:
      "Modular services that scale independently and reliably.",
  },
  {
    icon: Plug,
    title: "API-first design",
    description:
      "Connect services and platforms through clearly defined interfaces.",
  },
  {
    icon: FlaskConical,
    title: "GovStack sandbox",
    description:
      "Test and validate interoperability in a GovStack environment.",
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="section-padding bg-[#f5f1f5]"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Architecture illustration */}
          <div className="relative">
            <div className="think-card overflow-hidden p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#eae3eb] pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70427e]">
                    Technology overview
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-[#201c28]">
                    GovBot architecture
                  </p>
                </div>

                <span className="rounded-full bg-[#f5eafa] px-3 py-1 text-xs font-medium text-[#70427e]">
                  API-first
                </span>
              </div>

              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/images/gov-stack.png"
                  alt="GovBot technology architecture illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-full bg-[#eadcf0] blur-2xl" />
          </div>

          {/* Explanation */}
          <div>
            <span className="think-eyebrow">Technology</span>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-[#201c28] md:text-5xl">
              Built to connect.
              <span className="block text-[#70427e]">
                Designed to scale.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#6f6975]">
              GovBot is built on a modern, scalable architecture that powers
              digital government services. It provides enterprise-grade
              security, high availability, seamless integrations, and reliable
              performance across multiple platforms.
            </p>

            <div className="mt-9 space-y-5">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5eafa] text-[#70427e]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#201c28]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#6f6975]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}