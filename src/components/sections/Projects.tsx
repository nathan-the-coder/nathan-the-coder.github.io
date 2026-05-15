import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'

const projects = [
  {
    title: 'Project Alpha',
    description: 'A modern web application built with React and Node.js.',
    tags: ['React', 'TypeScript', 'Node.js'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Project Beta',
    description: 'An open-source tool for developers to streamline workflows.',
    tags: ['Python', 'Docker', 'CLI'],
    repo: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A real-time dashboard with data visualization features.',
    tags: ['React', 'D3.js', 'WebSocket'],
    repo: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-3">
          <FontAwesomeIcon icon={faFolderOpen} className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCode} className="h-4 w-4 text-primary" />
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: 'outline', size: 'sm' })}
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" />
                  Repo
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: 'sm' })}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
