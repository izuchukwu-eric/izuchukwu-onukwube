import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoSwiperyt from '@/images/logos/logoSwiperyt.png'
import logoGofree from '@/images/logos/logoGofree.svg'
import logoWalletChat from '@/images/logos/walletchat-logo.png'
import logoFundme from '@/images/logos/fundme-logo.png'
import logoGofreeBiz from '@/images/logos/logoGofreeBiz.png'

export const projects = [
  {
    name: 'WalletChat',
    description:
      'The NFT social layer 💬',
    link: { href: 'https://walletchat.fun', label: 'walletchat.fun' },
    logo: logoWalletChat,
  },
  {
    name: 'GoFree - #1 Social Neo Bank',
    description:
      'Social Neobank for Digital Natives - Chat, Payments, Virtual Cards & more for instant borderless payments in real-time.',
    link: {
      href: 'https://download.joingofree.com',
      label: 'download.joingofree.com',
    },
    logo: logoGofree,
  },
  {
    name: 'GoFree Business - #1 Banking for Startups',
    description:
      'Social Banking for Startups and SME businesses accross the globe.',
    link: {
      href: 'https://joingofree.com',
      label: 'joingofree.com',
    },
    logo: logoGofreeBiz,
  },
  {
    name: 'FundMe - #1 Rapyd Hackathon Winner',
    description:
      'This is the GoFundMe for Africa. It helps users recieve donations and perform transactions seamlessly.',
    link: { href: 'https://help-fd14d.web.app/', label: 'fundme.com.ng' },
    logo: logoFundme,
  },
  {
    name: 'Swiperyt',
    description: 'The Tinder for Africa with over 500+ downloads',
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.swiperyt.app',
      label: 'swiperyt.app',
    },
    logo: logoSwiperyt,
  },
]

export function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Products - Izuchukwu</title>
        <meta
          name="description"
          content="Have a look at some products I've contributed to."
        />
      </Head>
      <SimpleLayout
        title="Have a look at some products I've contributed to."
        intro="The products that are listed below are currently in production. These products are used by a wide range of users accross the globe."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
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
    </>
  )
}
