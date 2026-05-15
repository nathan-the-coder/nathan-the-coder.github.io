import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { buttonVariants } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4"
    >
      <div className="flex flex-col items-center text-center">
        <Avatar className="mb-6 h-32 w-32 border-4 border-primary/20">
          <AvatarImage src="https://github.com/nathan-the-coder.png" alt="Avatar" />
          <AvatarFallback className="text-3xl">NTC</AvatarFallback>
        </Avatar>

        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I'm{' '}
          <span className="text-primary">Nathaniel Ramos</span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Full-stack developer building modern web applications with React,
          TypeScript, and Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className={buttonVariants()}>
            View Projects
          </a>
          <a href="#contact" className={buttonVariants({ variant: 'outline' })}>
            Contact Me
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        >
          <FontAwesomeIcon icon={faArrowDown} className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
