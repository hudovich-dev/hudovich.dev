import Container from '@/components/layout/Container.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'

const data = [
  {
    heading: 'Design',
    list: [
      {
        label: 'App',
        value: 'Figma',
        link: 'https://figma.com',
      },
      {
        label: 'Font Family',
        value: 'Outfit',
        link: 'https://fonts.google.com/specimen/Outfit',
      },
      {
        label: 'Icons',
        value: 'Font Awesome',
        link: 'https://fontawesome.com',
      },
    ],
  },
  {
    heading: 'Development',
    list: [
      {
        label: 'Front-end',
        value: 'React',
        link: 'https://react.dev',
      },
      {
        label: 'Back-end',
        value: 'Next.js',
        link: 'https://nextjs.org',
      },
      {
        label: 'CSS',
        value: 'Tailwind',
        link: 'https://tailwindcss.com',
      },
    ],
  },
  {
    heading: 'Infrastructure',
    list: [
      {
        label: 'Domain Registrar',
        value: 'Cloudflare',
        link: 'https://cloudflare.com',
      },
      {
        label: 'DNS',
        value: 'Cloudflare',
        link: 'https://cloudflare.com',
      },
      {
        label: 'Cloud Provider',
        value: 'Vercel',
        link: 'https://vercel.com',
      },
      {
        label: 'Web Analytics',
        value: 'Umami',
        link: 'https://umami.is',
      },
      {
        label: 'Sources',
        value: 'GitHub',
        link: 'https://github.com',
      },
    ],
  },
]

export default function TechStackPage() {
  return (
    <Container>
      <section className="mb-8">
        <h1 className="mb-1 font-bold text-heading-2 md:text-heading-1">Tech Stack</h1>
        <p className="mb-4 text-body-2 md:mb-5 md:text-body-1">
          The set of tools under the hood of this website.
        </p>
        <BaseSeparator />
      </section>

      <section className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {data.map(({ heading, list }) => (
          <section
            key={heading}
            className="px-6 pt-4 pb-6 bg-orange-500/15 rounded-xl dark:bg-dark-blue-950/50 sm:last:col-span-2"
          >
            <h2 className="mb-3 font-semibold text-heading-5 md:text-heading-4">{heading}</h2>
            <ul className="grid gap-y-3 md:gap-y-1.5">
              {list.map(({ label, link, value }) => (
                <li key={label} className="font-medium text-caption md:text-body-3">
                  {label}
                  <span className="font-normal md:font-[350]"> - </span>
                  <BaseTextLink
                    className="font-[375] md:font-[350]"
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {value}
                  </BaseTextLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </Container>
  )
}