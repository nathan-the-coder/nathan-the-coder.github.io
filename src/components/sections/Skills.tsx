import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faVuejs,
  faNodeJs,
  faPython,
  faPhp,
  faGitAlt,
  faJs,
} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faServer, faBolt, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Badge } from '@/components/ui/badge'

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: faReact },
      { name: 'Vue.js', icon: faVuejs },
      { name: 'Next.js', icon: faCode },
      { name: 'Tailwind CSS', icon: faBolt },
      { name: 'TypeScript', icon: faCode },
      { name: 'JavaScript', icon: faJs },
    ],
  },
  {
    label: 'Backend & API',
    skills: [
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Python', icon: faPython },
      { name: 'Flask', icon: faServer },
      { name: 'PHP', icon: faPhp },
      { name: 'Laravel', icon: faServer },
      { name: 'REST APIs', icon: faCode },
      { name: 'Webhooks', icon: faBolt },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MongoDB', icon: faDatabase },
      { name: 'MySQL', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: faGitAlt },
      { name: 'Vercel', icon: faServer },
      { name: 'MERN Stack', icon: faReact },
      { name: 'Flutter', icon: faMobile },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/50 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-3">
          <FontAwesomeIcon icon={faCode} className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
