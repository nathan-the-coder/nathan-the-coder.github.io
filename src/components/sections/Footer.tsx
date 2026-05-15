import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <Separator className="mb-6" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nathaniel Ramos. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
