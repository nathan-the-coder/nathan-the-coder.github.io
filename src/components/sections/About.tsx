import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-3">
          <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <Card>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none p-6 md:p-8">
            <p>
              I'm a passionate developer with experience building modern web
              applications. I enjoy turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or writing technical blog
              posts.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
