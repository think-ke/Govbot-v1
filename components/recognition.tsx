'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const recognitions = [
  {
    category: 'Infrastructure',
    title: 'Published GovStack Interoperability Use Case',
    description:
      'GovStack published GovBot as a conversational AI use case demonstrating streamlined citizen access to eCitizen services.',
    image: '/recognition/Govstack.svg',
    link: 'https://govstack.gitbook.io/use-cases/use-cases/ai-chatbot-discoverability-government-services',
  },
  {
    category: 'Awards',
    title: 'NMWSO Safety by Design Challenge',
    description:
      'Awarded by the National Models for Women’s Safety Online for its safety-by-design approach from inception.',
    image: '/recognition/NMWSO.svg',
    link: 'https://www.irex.org/project/national-models-womens-safety-online-nmwso',
  },
  {
    category: 'Recognition',
    title: 'IRCAI Top 100 AI Solutions in Africa',
    description:
      'Recognized by UNESCO IRCAI among Africa’s Top 100 AI solutions driving sustainable development.',
    image: '/recognition/IRCAI.svg',
    link: 'https://ircai.org/gt_category/kenya/',
  },
]

export function Recognition() {
  return (
    <section className="bg-white py-28 px-6 lg:px-8" id="recognition">
      <div className="mx-auto max-w-7xl">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="rounded-full border border-purple-300 px-5 py-2 text-sm font-semibold text-[#341A5A]">
            Proven Impact
          </span>

        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-4xl text-center">

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-[#341A5A]">
            Recognized by leaders in AI
            <br />
            and digital infrastructure
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            GovBot is trusted by innovators, regulators, and builders shaping
            Kenya's digital future.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {recognitions.map((item, index) => (

            <article
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-purple-100
                bg-[#F8F3FC]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Image */}

              <div className="relative h-60">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="text-sm font-semibold uppercase tracking-wide text-[#6E3CBC]">
                  {item.category}
                </span>

                <h3 className="mt-4 text-4xl font-semibold leading-tight text-[#341A5A]">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-700">
                  {item.description}
                </p>

                <Link
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    font-semibold
    text-[#341A5A]
    transition
    hover:text-purple-700
  "
>
  Learn More
  <ArrowRight className="h-5 w-5" />
</Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}