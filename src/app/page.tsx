import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { Article } from '@/components/home/Article'
import { SocialLink } from '@/components/home/SocialLink'
import { Newsletter } from '@/components/home/Newsletter'
import { Resume } from '@/components/home/Resume'
import { Photos } from '@/components/home/Photos'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I'm Davit
          </h1>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Full Stack Developer and Entrepreneur
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am a Full Stack Developer with a preference for Frontend,
            passionate about creating engaging and functional digital
            experiences. Based in London, ON, I combine design and technology to
            build intuitive and efficient solutions.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/davit_prado/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/davitpra"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/davitprado/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
