import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Top decorative elements */}
      <div className="pointer-events-none fixed right-8 top-8 z-0 hidden md:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20,25 L28,18 L35,26 L28,33 Z"
            stroke="oklch(0.8 0.06 230)"
            strokeWidth="2"
            opacity="0.4"
            fill="none"
          />
          <circle cx="110" cy="30" r="4" fill="oklch(0.75 0.08 230)" opacity="0.5" />
          <path d="M120,15 Q128,22 135,15" stroke="oklch(0.8 0.06 230)" strokeWidth="2" opacity="0.35" fill="none" />
          <path d="M30,110 L42,105 L38,118" stroke="oklch(0.75 0.08 230)" strokeWidth="2" opacity="0.3" fill="none" />
          <circle cx="130" cy="120" r="3" fill="oklch(0.8 0.06 230)" opacity="0.4" />
        </svg>
      </div>

      {/* Bottom left decorative elements */}
      <div className="pointer-events-none fixed bottom-8 left-8 z-0 hidden md:block">
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20,20 L32,14 M32,14 L38,24"
            stroke="oklch(0.75 0.08 230)"
            strokeWidth="2"
            opacity="0.4"
            fill="none"
          />
          <circle cx="90" cy="25" r="3.5" fill="oklch(0.8 0.06 230)" opacity="0.45" />
          <path
            d="M15,90 Q22,84 29,90 Q36,96 43,90"
            stroke="oklch(0.75 0.08 230)"
            strokeWidth="2"
            opacity="0.35"
            fill="none"
          />
          <path
            d="M100,105 L107,99 L114,106 L107,113 Z"
            stroke="oklch(0.8 0.06 230)"
            strokeWidth="2"
            opacity="0.4"
            fill="none"
          />
          <circle cx="70" cy="110" r="2.5" fill="oklch(0.75 0.08 230)" opacity="0.4" />
        </svg>
      </div>

      {/* Mobile decorative sparkles */}
      <div className="pointer-events-none fixed right-4 top-20 z-0 md:hidden">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="2" fill="oklch(0.75 0.08 230)" opacity="0.5" />
          <circle cx="45" cy="40" r="2.5" fill="oklch(0.8 0.06 230)" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-white via-secondary/40 to-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Sharanya Ghosh
                </h1>
                <p className="text-pretty text-xl text-muted-foreground md:text-2xl lg:text-3xl">
                  Student Developer & Designer
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground md:text-base">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sharanyaghosh2212@gmail.com" className="transition-colors hover:text-foreground">
                    sharanyaghosh2212@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 8777015656</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kolkata, India</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://github.com/espressodrivendevelopment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="lg" asChild>
                  <a href="/resume.pdf" download className="gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight md:text-4xl">Professional Summary</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Dynamic Digital Scrapbooker and Developer with a strong foundation in UI/UX design and graphic
              illustration. Expert in leveraging Canva and Adobe Express to create high-impact visual content that
              enhances brand visibility and community engagement. Specialised in utilizing Vercel for seamless
              deployment and integrating AI chatbots to refine user journeys and elevate UI/UX features. Proven leader
              in hackathon environments, recognized for managing cross-functional teams and delivering innovative,
              user-centric web solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border/50 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-xl font-semibold">Design</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Expert in Canva and Adobe Express for UI/UX prototyping and graphic illustration
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-xl font-semibold">Development</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Python, C, Vercel (Deployment), GitHub, and AI-driven web utilities
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-xl font-semibold">Ambassadorship</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Strategic content creation, visual storytelling, and cross-functional team management
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Bengali (Native)
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  English (Advanced)
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Hindi (Advanced)
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>
            <div className="space-y-12">
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-primary">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-balance text-2xl font-semibold">Team Manager</h3>
                    <span className="text-sm text-muted-foreground">September 2025 - November 2025</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Smart India Hackathon</p>
                  <p className="text-sm text-muted-foreground">Kolkata</p>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    Led a multidisciplinary team to meet 100% of project deadlines through agile risk management and
                    performance evaluation.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-primary">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-balance text-2xl font-semibold">UI/UX Designer</h3>
                    <span className="text-sm text-muted-foreground">October 2025 - December 2025</span>
                  </div>
                  <p className="text-lg text-muted-foreground">MCKV Hackathon</p>
                  <p className="text-sm text-muted-foreground">Kolkata</p>
                  <p className="mt-4 font-medium">Developed: SmartDoc Formatter: AI-Enhanced Text Architect</p>
                  <ul className="mt-4 space-y-2 text-pretty leading-relaxed text-muted-foreground">
                    <li>
                      • Developed user-centric MVPs and integrated Canva and Adobe Express into design workflows to
                      streamline user journeys
                    </li>
                    <li>
                      • Delivered an evolved version of the utility by implementing significant iterative changes based
                      on stakeholder feedback and performance testing
                    </li>
                    <li>
                      • Utilised V0 by Vercel to create high-fidelity prototypes for UI/UX designing, ensuring a
                      seamless transition from design to implementation
                    </li>
                    <li>
                      • Deployed the final architecture using Vercel to demonstrate a high-performance, live web utility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">Education</h2>
            <div className="space-y-12">
              <Card className="border-border/50 shadow-sm">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-balance text-2xl font-semibold">Bachelor of Technology</h3>
                      <span className="text-sm text-muted-foreground">August 2024 - Present</span>
                    </div>
                    <p className="text-lg text-muted-foreground">MCKV Institute of Engineering</p>
                    <p className="text-sm text-muted-foreground">
                      Computer Science & Engineering | Expected 2028 | Kolkata
                    </p>
                    <ul className="mt-4 space-y-2 text-pretty leading-relaxed text-muted-foreground">
                      <li>
                        <strong>Technical Focus:</strong> Developing expertise in Data Structures, Algorithms, and
                        Software Engineering using Python and C
                      </li>
                      <li>
                        <strong>Cloud & AI:</strong> Experienced in deploying full-stack projects via Vercel and
                        integrating AI chatbots for enhanced UI/UX
                      </li>
                      <li>
                        <strong>Coursework:</strong> Completed NPTEL: The Joy of Computing using Python, mastering
                        recursion, cryptography, and image processing
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-balance text-2xl font-semibold">Board Exams [ICSE & ISC]</h3>
                      <span className="text-sm text-muted-foreground">May 2014 - May 2024</span>
                    </div>
                    <p className="text-lg text-muted-foreground">St Agnes Convent School</p>
                    <p className="text-sm text-muted-foreground">Science with Computer | Graduated 05/2024 | Kolkata</p>
                    <ul className="mt-4 space-y-2 text-pretty leading-relaxed text-muted-foreground">
                      <li>
                        <strong>Leadership:</strong> Served as a Senior Member of the Cultural Society and Treasurer of
                        the Nature Club, facilitating photography workshops, exhibitions and many more
                      </li>
                      <li>
                        <strong>Creative:</strong> Received accolades for digital poster making and producing
                        interactive video content for school-wide initiatives
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Certifications & Courses
            </h2>
            <Card className="border-border/50 shadow-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-balance text-2xl font-semibold">Joy of Computing using Python</h3>
                    <span className="text-sm text-muted-foreground">January 2025 - April 2025</span>
                  </div>
                  <p className="text-lg text-muted-foreground">NPTEL</p>
                  <p className="mt-4 font-medium">What I mastered from the Course:</p>
                  <ul className="mt-4 space-y-2 text-pretty leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Variables and Expressions:</strong> Designed basic tools like a calculator
                    </li>
                    <li>
                      <strong>Control Flow:</strong> Mastered loops and conditionals using analogies like "Hopscotch"
                      for repetitive procedures
                    </li>
                    <li>
                      <strong>Data Structures:</strong> Utilized Lists, Tuples, and Dictionaries for organising and
                      retrieving information
                    </li>
                    <li>
                      <strong>Algorithmic Thinking:</strong> Explored Sorting and Searching techniques
                    </li>
                    <li>
                      <strong>Recursion:</strong> Applied complex problem-solving using the "Tower of Hanoi" example
                    </li>
                    <li>
                      <strong>Abstraction:</strong> Learned how computer science principles are applied in everyday
                      smartphone apps
                    </li>
                    <li>
                      <strong>Image Processing:</strong> Manipulated images using Python
                    </li>
                    <li>
                      <strong>Scratch:</strong> Introduced loops and animations visually before transitioning to Python
                    </li>
                    <li>
                      <strong>Game Development:</strong> Built logic for classic games like Tic Tac Toe, Snakes and
                      Ladders, and Rock, Paper, Scissors
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
            <Card className="overflow-hidden border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-balance text-2xl font-semibold">
                      SmartDoc Formatter: AI-Enhanced Text Architect
                    </h3>
                    <span className="text-sm text-muted-foreground">October 2025 - Present</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Lead Developer and Designer</p>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    A high-performance web utility designed to transform raw, unorganised text into professionally
                    structured documents instantly, bridging the gap between rapid development and high-end design. This
                    project features a custom UI generated through V0 by Vercel, seamlessly integrating functionality
                    and aesthetics to produce a streamlined user experience.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="outline" asChild>
                      <a
                        href="https://github.com/espressodrivendevelopment/document-formatter-web-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Git Repo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild>
                      <a
                        href="https://drive.google.com/file/d/1pgIlnL3EZK1YMj3thszfPxRF4Xtkdvft/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        View MVP
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
              <p>© 2025 Sharanya Ghosh. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="mailto:sharanyaghosh2212@gmail.com" className="transition-colors hover:text-foreground">
                  Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/espressodrivendevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
