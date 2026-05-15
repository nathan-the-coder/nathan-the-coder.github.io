import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
  faGithub,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons'
import { Badge } from '@/components/ui/badge'

const skills = [
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'TypeScript', icon: faCode },
  { name: 'Python', icon: faPython },
  { name: 'Docker', icon: faDocker },
  { name: 'Git', icon: faGitAlt },
  { name: 'GitHub', icon: faGithub },
  { name: 'Databases', icon: faDatabase },
  { name: 'Cloud', icon: faCloud },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/50 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-3">
          <FontAwesomeIcon icon={faCode} className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <FontAwesomeIcon icon={skill.icon} className="h-4 w-4" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
