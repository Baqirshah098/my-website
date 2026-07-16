import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Sparkles, BrainCircuit, Rocket, Cpu, ShieldCheck, Workflow, ArrowRight } from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { ThemeToggle } from './components/ThemeToggle';
import { projects } from './data/projects';
import { experience } from './data/experience';
import { skillGroups } from './data/skills';
import { education } from './data/education';
import { achievements, about, certifications, extracurriculars, profile } from './data/content';

function App() {
  const capabilities = [
    {
      title: 'AI systems',
      description: 'Designing practical ML pipelines that move from experimentation to production-ready delivery.',
      icon: Cpu,
    },
    {
      title: 'Secure architecture',
      description: 'Building resilient services with a strong foundation in quality engineering and security.',
      icon: ShieldCheck,
    },
    {
      title: 'Product-minded execution',
      description: 'Bridging technical rigor with communication, strategy, and clean user experience.',
      icon: Workflow,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-slate-900 transition-colors dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="mesh-bg absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.16),transparent_24%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="font-display text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-50">Baqir Shah</a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-accent">About</a>
            <a href="#experience" className="transition hover:text-accent">Experience</a>
            <a href="#projects" className="transition hover:text-accent">Projects</a>
            <a href="#contact" className="transition hover:text-accent">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              <Sparkles size={16} />
              Available for impactful product and AI work
            </div>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-semibold text-slate-800 dark:text-slate-200">{profile.tagline}</p>
            <p className="mt-6 max-w-xl text-xl text-slate-800 dark:text-slate-300">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
              >
                Download Resume
              </a>
              <Button href="#contact" variant="secondary">Contact Me</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full border border-slate-300 bg-white/80 p-3 text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                <Mail size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-300 bg-white/80 p-3 text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                <Linkedin size={18} />
              </a>
              <a href={`tel:${profile.phone}`} aria-label="Phone" className="rounded-full border border-slate-300 bg-white/80 p-3 text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                <Phone size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950/95 p-7 text-white shadow-[0_30px_100px_-20px_rgba(2,8,23,0.65)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_30%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Signal Layer</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">Built for intelligent products, not just prototypes.</h2>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 text-sky-300"><BrainCircuit size={28} /></div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {achievements.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-200 backdrop-blur">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/15 text-sky-300">0{index + 1}</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live inference stack
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl bg-slate-800/70 p-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Latency</p>
                    <p className="mt-1 font-semibold text-white">Sub-250ms</p>
                  </div>
                  <div className="rounded-xl bg-slate-800/70 p-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Focus</p>
                    <p className="mt-1 font-semibold text-white">Applied AI</p>
                  </div>
                  <div className="rounded-xl bg-slate-800/70 p-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Delivery</p>
                    <p className="mt-1 font-semibold text-white">Fast iteration</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="rounded-[32px] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-2xl dark:border-slate-800">
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <p className="text-3xl font-semibold">3+</p>
                <p className="mt-2 text-sm text-slate-300">Applied AI & ML internships</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">100+</p>
                <p className="mt-2 text-sm text-slate-300">Poems performed live</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">32%</p>
                <p className="mt-2 text-sm text-slate-300">Average resume score lift</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">100%</p>
                <p className="mt-2 text-sm text-slate-300">ATS pass rate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-slate-900 dark:text-slate-50">{item.title}</h3>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="About" title="A technologist with depth, curiosity, and a strong communication edge." description="I build with rigor, but I also care about how ideas are articulated and experienced." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-lg leading-8 text-slate-800 dark:text-slate-300">{about[0]}</p>
              <p className="mt-5 text-lg leading-8 text-slate-800 dark:text-slate-300">{about[1]}</p>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <div className="flex items-center gap-3 text-accent">
                <Rocket size={20} />
                <p className="font-semibold">What defines my profile</p>
              </div>
              <ul className="mt-4 space-y-4 text-slate-800 dark:text-slate-300">
                {about.slice(1).map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" /> <span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Experience" title="Hands-on work across AI, data systems, and applied engineering." description="Each role sharpened my ability to ship useful solutions under real constraints." />
          <div className="mt-10 space-y-6">
            {experience.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50">{item.title}</h3>
                    <p className="mt-1 text-lg font-medium text-accent">{item.company}</p>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-slate-800 dark:text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" /> <span>{bullet}</span></li>
                  ))}
                </ul>
                {item.rating ? <p className="mt-5 inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">Performance rating: {item.rating}</p> : null}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Projects" title="Selected work that blends AI, product thinking, and engineering discipline." description="These projects are designed to demonstrate depth as much as execution." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{project.role}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
                <p className="mt-4 text-slate-800 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">{tag}</span>
                  ))}
                </div>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-400">
                  {project.impact}
                  <ArrowRight size={16} />
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading eyebrow="Education" title="A strong academic foundation in software engineering and applied systems." description="My studies have been rooted in modern software design, security, and quantitative reasoning." />
              <div className="mt-8 space-y-5">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                    <p className="font-semibold text-slate-900 dark:text-slate-50">{item.degree}</p>
                    <p className="mt-1 text-sm text-accent">{item.institution} • {item.period}</p>
                    <p className="mt-2 text-sm text-slate-800 dark:text-slate-300">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <SectionHeading eyebrow="Skills" title="A versatile toolkit spanning AI, engineering, and communication." description="I prefer building practical systems that are maintainable and understandable." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">{group.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading eyebrow="Certifications" title="Credibility across modern AI, cloud, and security paths." description="I continue to sharpen my skills through structured learning and practical application." />
              <ul className="mt-8 space-y-3 text-slate-800 dark:text-slate-300">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" /> <span>{cert}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <SectionHeading eyebrow="Extracurriculars" title="Creativity and teamwork extend beyond the technical stack." description="I value leadership, storytelling, and community engagement as much as technical craft." />
              <ul className="mt-8 space-y-3 text-slate-800 dark:text-slate-300">
                {extracurriculars.map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" /> <span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-8 text-white shadow-2xl dark:border-slate-800">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Let’s build something useful.</h2>
              <p className="mt-4 text-slate-300">I’m interested in opportunities where AI, data, and thoughtful product design can create meaningful impact.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-white"><Mail size={18} /> {profile.email}</a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-3 transition hover:text-white"><Phone size={18} /> {profile.phone}</a>
                <div className="flex items-center gap-3"><MapPin size={18} /> {profile.location}</div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white"><Linkedin size={18} /> LinkedIn Profile</a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <form action={`https://formspree.io/f/${(import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_FORMSPREE_ID ?? 'your-id'}`} method="POST" className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="name">Name</label>
                  <input id="name" name="name" required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/75 py-8 text-center text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row lg:px-8">
          <p>© 2026 Syed Mohammad Baqir Shah. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="transition hover:text-accent">About</a>
            <a href="#projects" className="transition hover:text-accent">Projects</a>
            <a href="#contact" className="transition hover:text-accent">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
