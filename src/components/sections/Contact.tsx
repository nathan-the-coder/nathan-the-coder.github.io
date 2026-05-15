import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Contact() {
  return (
    <section id="contact" className="bg-muted/50 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>

        <Card>
          <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
            <p className="max-w-md text-muted-foreground">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:hello@example.com" className={buttonVariants()}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
                hello@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline' })}>
                <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline' })}>
                <FontAwesomeIcon icon={faLinkedin} className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline' })}>
                <FontAwesomeIcon icon={faXTwitter} className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
