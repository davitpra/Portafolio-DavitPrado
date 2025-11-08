import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoHorizonPlace from '@/images/logos/horizon.png'
import logoClawPuzzle from '@/images/logos/claw-puzzle.png'
import { LinkIcon } from '@/components/icons/LinkIcon'

const projects = [
  {
    name: 'Horizon Place - culinary App',
    description:
      'The Horizon Place Culinary App streamlines meal ordering, elevating the dining experience for every resident.',
    link: {
      href: 'http://horizon-place-culinary.com',
      label: 'horizon-place-culinary.com',
    },
    logo: logoHorizonPlace,
  },
  {
    name: 'AirBnB Clone',
    description:
      'The Airbnb Clone simplifies travel planning by seamlessly connecting guests with unique, handpicked accommodations for a hassle-free booking experience.',
    link: { href: '#', label: 'github.com' },
    logo: logoAirbnb,
  },
  {
    name: 'Claw Puzzle',
    description:
      'Claw Puzzle transforms pet portraits into unique puzzles and apparel, combining AI creativity with personalized memories.',
    link: { href: '#', label: 'claw-puzzle.com' },
    logo: logoClawPuzzle,
  },
  {
    name: 'ShipReady',
    description:
      'ShipReady is a comprehensive, production-ready template for building Shopify apps using the Remix framework.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Move DB',
    description:
      'The Movie DB is your go-to platform for exploring the cinematic world, offering comprehensive and up-to-date details on movies, series, actors, and directors',
    link: {
      href: 'https://davitpra.github.io/The-Movie-DB/',
      label: 'The-Movie-DB.com',
    },
    logo: logoPlanetaria,
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve built trying to blend code, cuisine, and creativity."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
