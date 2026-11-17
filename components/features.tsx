
"use client";

import {
  MessageCircle,
  Globe,
  Zap,
  BarChart3,
  FileText,
  Shield,
} from "lucide-react";

const features = [
  {
    title: "Multi-Language Support",
    description: "Communicate and discover services in supported languages.",
    icon: Globe,
    number: "01",
  },
  {
    title: "Voice & Text Interface",
    description: "Interact naturally through conversational voice and text.",
    icon: MessageCircle,
    number: "02",
  },
  {
    title: "Intelligent Responses",
    description: "Understand requests and find relevant government information.",
    icon: Zap,
    number: "03",
  },
  {
    title: "Analytics Dashboard",
    description: "Generate insights into engagement and service interactions.",
    icon: BarChart3,
    number: "04",
  },
  {
    title: "Document Support",
    description: "Make government documentation and requirements easier to navigate.",
    icon: FileText,
    number: "05",
  },
  {
    title: "System Integrations",
    description: "Connect with government systems through API-based architecture.",
    icon: Shield,
    number: "06",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="section-container">

        <div className="mb-16 max-w-2xl">
          <span className="think-eyebrow">Capabilities</span>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#201c28] md:text-5xl">
            Key
            <span className="text-[#70427e]"> Features</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#6f6975]">
            Comprehensive capabilities designed to simplify citizen access to government services through intelligent, secure and accessible technology.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon, number }) => (
            <article
              key={number}
              className="think-card group relative overflow-hidden p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5eafa] text-[#70427e] transition-colors group-hover:bg-[#70427e] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="font-heading text-sm text-[#c4b8c8]">
                  {number}
                </span>
              </div>

              <h3 className="mt-8 font-heading text-xl font-bold text-[#201c28]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6f6975]">
                {description}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
