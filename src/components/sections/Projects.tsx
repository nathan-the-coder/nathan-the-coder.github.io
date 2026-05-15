import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faArrowUpRightFromSquare, faClipboard, faBus, faCalendarCheck, faRobot, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons'
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
    title: 'Survey Profiling Tool',
    description:
      'A comprehensive data collection and demographic profiling platform built to streamline community surveys and handle administrative data handling with security and precision.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    icon: faClipboard,
    repo: 'https://github.com/nathan-the-coder/survey-profiling-tool',
    demo: 'https://survey-profiling-tool.vercel.app',
  },
  {
    title: 'E-Barker',
    description:
      'A localized web utility for managing digital dispatching, route updates, and terminal management for local transport, optimizing commuter coordination.',
    tags: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js'],
    icon: faBus,
    repo: 'https://github.com/nathan-the-coder/e-barker',
    demo: 'https://e-barker-app.vercel.app',
  },
  {
    title: 'College Staff AMS',
    description:
      'A dedicated administrative dashboard to log, monitor, and manage attendance records for college staff, replacing manual paperwork with automated tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    icon: faCalendarCheck,
    repo: 'https://github.com/nathan-the-coder/college-staff-ams-client',
    demo: 'https://ams-sigma-snowy.vercel.app',
  },
  {
    title: 'Grox Chatbot',
    description:
      'An automated Facebook Messenger chatbot designed to handle instant messaging inquiries and provide automated contextual responses via webhooks.',
    tags: ['Node.js', 'Meta Graph API', 'Webhooks'],
    icon: faRobot,
    repo: 'https://github.com/nathan-the-coder/grox-ai',
  },
  {
    title: 'Todo API (Flask)',
    description:
      'A production-ready, lightweight backend RESTful API designed to manage task workflows, user authentication, and data operations.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL'],
    icon: faCheckCircle,
    repo: 'https://github.com/nathan-the-coder/todo-api-flask',
  },
  {
    title: 'Attendance Tracker',
    description:
      'A QR code-based attendance checking system for precise check-in/check-out timestamp logging and historical attendance report generation.',
    tags: ['Flutter', 'Dart', 'QR Code'],
    icon: faClock,
    repo: 'https://github.com/nathan-the-coder/attendance-tracker',
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
                  <FontAwesomeIcon icon={project.icon} className="h-4 w-4 text-primary" />
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
