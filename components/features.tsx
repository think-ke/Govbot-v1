'use client'

import {
  MessageCircle,
  Globe,
  Zap,
  BarChart3,
  FileText,
  Shield,
} from 'lucide-react'

const features = [
  {
    title: 'Multi-Language Support',
    description: 'English & Swahili support',
    icon: Globe,
  },
  {
    title: 'Voice & Text Interface',
    description: 'WhatsApp, SMS compatible',
    icon: MessageCircle,
  },
  {
    title: 'Fast Response',
    description: 'Instant service discovery',
    icon: Zap,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time insights & metrics',
    icon: BarChart3,
  },
  {
    title: 'Document Support',
    description: 'Handle various document types',
    icon: FileText,
  },
  {
    title: 'System Integrations',
    description: 'Seamless API connectivity',
    icon: Shield,
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#341A5A]">
            Key Features
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6B5A88]">
            Comprehensive capabilities designed to simplify citizen
            access to government services through intelligent,
            secure and accessible technology.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border
                  border-purple-100
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-purple-300
                  hover:shadow-xl
                "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 transition group-hover:bg-purple-600">

                  <Icon className="h-8 w-8 text-[#6E3CBC] group-hover:text-white" />

                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#341A5A]">
                  {feature.title}
                </h3>

                <p className="leading-7 text-[#6B5A88]">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}