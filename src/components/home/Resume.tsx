import { Button } from '@/components/Button'
import { BriefcaseIcon } from '@/components/icons/BriefcaseIcon'
import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon'
import { Role, type Role as RoleType } from './Role'
import logoHorizonPlace from '@/images/logos/horizon.png'
import logoEmcyNegocios from '@/images/logos/emcy.png'
import logoModernoEc from '@/images/logos/moderno.png'

export function Resume() {
  let resume: Array<RoleType> = [
    {
      company: 'Horizon Place',
      title: 'Cooker / IT Support',
      logo: logoHorizonPlace,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Emcy Negocios',
      title: 'Frontend Developer',
      logo: logoEmcyNegocios,
      start: '2022',
      end: '2023',
    },
    {
      company: 'Moderno Ec',
      title: 'Ecommerce Manager',
      logo: logoModernoEc,
      start: '2020',
      end: '2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
