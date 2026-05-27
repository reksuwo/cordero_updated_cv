import Image from "next/image";
import { Boot } from "./_components/Boot";
import { ClientProjectCard } from "./_components/ClientProjectCard";
import { LiveClock } from "./_components/LiveClock";
import { Nav } from "./_components/Nav";
import { ProjectRow } from "./_components/ProjectRow";
import { Reveal } from "./_components/Reveal";
import { StatusBar } from "./_components/StatusBar";
import { TypedText } from "./_components/TypedText";

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  type?: "freelance";
};

const experience: ExperienceEntry[] = [
  {
    role: "Web Developer / IT Tech Support",
    company: "Justine's Cargo Services",
    period: "Jul 1 2025 — Mar 10 2026",
    location: "Iloilo City, PH",
    bullets: [
      "Build and maintain internal systems supporting cargo operations.",
      "Provide IT support across teams — hardware, software, and network.",
      "Iterate on the Information & Operation System I built during OJT.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Keating Media",
    period: "2026",
    location: "Remote",
    type: "freelance",
    bullets: [
      "Build and ship full-stack features for client projects using React, Next.js, and Node.",
      "Collaborate on iterative releases — design, code review, and deployment.",
    ],
  },
  {
    role: "AI Automation / Website Developer",
    company: "Identity Nails",
    period: "2026",
    location: "Remote",
    type: "freelance",
    bullets: [
      "Design and maintain the salon's website end-to-end.",
      "Set up AI automation for text-to-speech and visual transcription via frame analysis.",
    ],
  },
  {
    role: "AI Implementation Assistant",
    company: "Dragonfly AI",
    period: "2026",
    location: "Remote",
    type: "freelance",
    bullets: [
      "Help implement AI workflows and integrations across client engagements.",
      "Take AI proofs-of-concept into reliable, production-ready setups.",
    ],
  },
  {
    role: "On-the-Job Trainee",
    company: "Justine's Cargo Services",
    period: "Feb 2025 — May 2025",
    location: "Iloilo City, PH",
    bullets: [
      "Completed BSIT on-the-job training as a junior developer.",
      "Shipped the company's first internal information & operation system end-to-end.",
      "Awarded Certificate of Completion in May 2025.",
    ],
  },
  {
    role: "Image & Text Annotator",
    company: "Remotask",
    period: "2021",
    location: "Remote",
    bullets: [
      "Annotated images to help train AI for visual recognition tasks.",
      "Transcribed text from a variety of sources to detailed instructions.",
    ],
  },
];

const projects = [
  {
    index: "01",
    name: "justine's cargo system",
    year: "2025",
    stack: "MERN · Chakra UI",
    blurb:
      "End-to-end information & operation system for Justine's Cargo Services. Built during OJT and now maintained in production as part of my full-time role.",
    href: "#",
  },
];

const clientWork = [
  {
    index: "01",
    name: "next level electrix",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Marketing site for an electrical contractor in Oldham & Manchester — domestic, commercial, EV chargers, and renewables.",
    href: "https://next-level-electrix.vercel.app/",
  },
  {
    index: "02",
    name: "reliable roofing services",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Lead-gen site for a Coventry roofing company. New roofs, repairs, fascias, soffits, and guttering.",
    href: "https://reliableroofingservices.net/",
  },
  {
    index: "03",
    name: "city of london hypnotherapy",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Multi-location service site for a Clerkenwell-based cognitive hypnotherapy clinic — anxiety, depression, stress.",
    href: "https://cityoflondonhypnotherapy.vercel.app/hypnotherapy-london/city-of-london",
  },
  {
    index: "04",
    name: "a&t landscapes",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Portfolio site and project gallery for a landscaping company serving Hampshire, Dorset, and Wiltshire.",
    href: "https://at-landscapes.vercel.app/gallery",
  },
  {
    index: "05",
    name: "ec vehicle repairs",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Site for a mobile mechanic in Waterlooville covering servicing, MOTs, diagnostics, and 24/7 breakdown across Hampshire & West Sussex.",
    href: "https://ecvehiclerepairs.co.uk/",
  },
  {
    index: "06",
    name: "bradgate heights mortgages",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "UAE mortgage brokerage site covering Dubai, Abu Dhabi, and the other emirates.",
    href: "https://bradgateheights.vercel.app/",
  },
  {
    index: "07",
    name: "atkinson decor & spray",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Lead-gen site for a Northampton painting & decorating company — interior, exterior, wallpaper, kitchen and furniture spraying.",
    href: "https://atkinson-decor.vercel.app/",
  },
  {
    index: "08",
    name: "1st mobile tyres",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "24/7 emergency mobile tyre fitting service across South Wales — Cardiff, Newport, Pontypridd, Caerphilly, and Barry.",
    href: "https://1stmobiletyres.co.uk/",
  },
  {
    index: "09",
    name: "home me mortgages",
    year: "2025",
    stack: "Next.js · React",
    blurb:
      "Whole-of-market mortgage broker serving Berkshire & Buckinghamshire — first-time buyers, remortgages, buy-to-let, and protection.",
    href: "https://homememortgages.vercel.app/",
  },
];

const stack = {
  web: ["TypeScript", "React", "Next.js", "Node.js", "Express.js", "Chakra UI"],
  database: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  mobile: ["Flutter", "Dart"],
  desktop: ["C#", ".NET Framework"],
  ai: ["ChatGPT", "Claude Code", "Cursor", "API Integration", "Prompt Design"],
  design: ["Figma", "Wix", "Excalidraw", "Lucidchart"],
  tools: ["GitHub", "MongoDB Compass", "Vercel", "RunPod", "Railway"],
  soft: ["Adaptability", "Teamwork", "System Analysis", "Problem Solving"],
};

const education = [
  {
    title: "Bachelor of Science in Information Technology",
    org: "Central Philippine University",
    period: "Graduated · Cum Laude",
  },
];

const certifications = [
  {
    title: "Certificate of Completion · On-the-Job Training",
    org: "Justine's Cargo Services",
    period: "May 2025",
  },
  {
    title: "Cisco IT Essentials",
    org: "Cisco Academy",
    period: "Jun 2023",
  },
];

export default function Home() {
  return (
    <>
      <Boot />
      <div className="crt-vignette" aria-hidden />
      <div className="crt-scanlines" aria-hidden />

      <StatusBar />
      <Nav />

      <div id="top" />

      {/* HERO */}
      <section className="relative px-4 pt-40 pb-24 sm:px-8 sm:pt-48 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            {/* LEFT: identity */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                <TypedText text="$ whoami" delay={300} speed={40} />
              </p>

              <h1 className="mt-6 text-[clamp(2rem,6.5vw,5rem)] leading-[1.05] tracking-tight">
                <span className="block">
                  <TypedText
                    text="Derek Robbie D. Cordero"
                    delay={900}
                    speed={38}
                    caret
                  />
                </span>
                <span className="mt-2 block text-[clamp(1rem,2.5vw,1.5rem)] leading-snug text-muted">
                  <TypedText
                    text="// web developer · ai automation & implementation"
                    delay={2100}
                    speed={22}
                  />
                </span>
              </h1>

              <Reveal delay={3000}>
                <p className="mt-10 max-w-xl text-sm leading-7 text-foreground/80 sm:text-base">
                  <span className="text-muted">&gt; cat ./about.txt</span>
                  <br />
                  Full-stack developer with a strong passion for design and
                  user experience. I build internal systems, ship client
                  websites with React and Next.js, and integrate AI tooling to
                  automate the boring parts of real businesses.
                </p>
              </Reveal>

              <Reveal delay={3200}>
                <div className="mt-10 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em]">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2 text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    <span>./hire-me.sh</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="#clients"
                    className="group inline-flex items-center gap-2 border border-rule-strong px-4 py-2 text-muted transition-colors hover:border-foreground hover:text-foreground"
                  >
                    <span>cat ./client-work.log</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    >
                      ↓
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: photo card + meta */}
            <Reveal delay={2800}>
              <div className="lg:max-w-xs lg:justify-self-end">
                <div className="group overflow-hidden border border-rule-strong bg-background transition-colors hover:border-foreground">
                  <div className="flex items-center gap-3 border-b border-rule-strong bg-rule/40 px-3 py-2">
                    <span className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full border border-rule-strong" />
                      <span className="h-2 w-2 rounded-full border border-rule-strong" />
                      <span className="h-2 w-2 rounded-full border border-rule-strong" />
                    </span>
                    <span className="flex flex-1 items-center truncate rounded-sm border border-rule-strong bg-background px-2 py-0.5 text-[10px] tracking-wider text-muted">
                      ~/derek_cordero.jpg
                    </span>
                    <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
                      id
                    </span>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-rule">
                    <Image
                      src="/derek.jpg"
                      alt="Derek Robbie D. Cordero"
                      fill
                      priority
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className="object-cover grayscale contrast-110 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)",
                      }}
                    />
                    <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 border border-rule-strong bg-background/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted backdrop-blur">
                      <span className="h-1 w-1 rounded-full bg-foreground" />
                      verified
                    </span>
                  </div>
                  <div className="border-t border-rule-strong px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted">
                    bsit · cum laude · 2025
                  </div>
                </div>

                <ul className="mt-5 grid gap-1.5 text-[11px] uppercase tracking-[0.18em] text-muted">
                  <li>
                    <span className="text-subtle">loc:</span> iloilo city, ph
                  </li>
                  <li>
                    <span className="text-subtle">edu:</span> bsit · cum laude
                  </li>
                  <li>
                    <span className="text-subtle">role:</span>{" "}
                    <span className="text-foreground">
                      web dev · ai automation
                    </span>
                  </li>
                  <li>
                    <span className="text-subtle">stack:</span> mern / next / ai
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader index="01" command="cat ./about.md" />
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-[2fr_1fr]">
            <Reveal delay={120}>
              <div className="space-y-5 text-sm leading-7 text-foreground/80 sm:text-base">
                <p>
                  I&apos;m Derek Robbie D. Cordero — a dedicated full-stack
                  developer with a strong passion for design and user
                  experience.
                </p>
                <p>
                  I hold a Bachelor of Science in Information Technology from
                  Central Philippine University, graduated Cum Laude. Day to
                  day I build internal systems, ship client websites with
                  React and Next.js, and design <em>AI automation &amp;
                  implementation</em> workflows that take the repetitive parts
                  off people&apos;s plates.
                </p>
                <p className="text-muted">
                  <span className="text-subtle">&gt;</span> currently open to
                  full-stack and AI automation work — remote or on-site.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="border border-rule-strong p-5 text-sm">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-muted">
                  ./mottos
                </p>
                <ul className="space-y-2 leading-7">
                  <li>
                    <span className="text-muted">01</span> Code with coffee.
                  </li>
                  <li>
                    <span className="text-muted">02</span> MERN stack enjoyer.
                  </li>
                  <li>
                    <span className="text-muted">03</span> Bug detector.
                  </li>
                  <li>
                    <span className="text-muted">04</span> Design before you build.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader index="02" command="ls ./experience/" count={`${experience.length} entries`} />
          </Reveal>

          <ol className="mt-10 divide-y divide-rule-strong border-y border-rule-strong">
            {experience.map((item, i) => (
              <Reveal as="li" key={`${item.company}-${item.period}`} delay={i * 80}>
                <div className="group grid gap-4 py-8 sm:grid-cols-[10rem_1fr_8rem] sm:gap-8">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="text-xl tracking-tight sm:text-2xl">
                      {item.role}
                      <span className="text-muted"> @ {item.company}</span>
                      {item.type === "freelance" && (
                        <span className="ml-2 inline-block border border-foreground px-1.5 py-px align-middle text-[9px] uppercase tracking-[0.2em] text-foreground">
                          freelance
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-subtle">
                      {item.location}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm leading-7 text-foreground/80">
                      {item.bullets.map((b) => (
                        <li key={b} className="grid grid-cols-[1.25rem_1fr] gap-2">
                          <span className="text-subtle">&gt;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted sm:block sm:text-right">
                    [0{i + 1} / 0{experience.length}]
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader index="03" command="ls ./projects/" count={`${projects.length} entr${projects.length === 1 ? "y" : "ies"}`} />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <ProjectRow {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section id="clients" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader
              index="04"
              command="ls ./client-work/"
              count={`${clientWork.length} sites`}
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/70">
              <span className="text-muted">&gt; cat ./README.md</span>
              <br />
              Freelance & client websites built with React and Next.js — design,
              implementation, and deployment. Hover a card to see the live
              screenshot in color.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {clientWork.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <ClientProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader index="05" command="cat ./stack.toml" />
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-rule-strong bg-rule-strong sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(stack).map(([group, items], i) => (
              <Reveal key={group} delay={i * 70}>
                <StackCell group={group} items={items} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTIFICATIONS */}
      <section id="education" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader index="06" command="cat ./education.md" />
          </Reveal>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <Reveal>
              <h3 className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted">
                [degree]
              </h3>
              <ul className="space-y-5">
                {education.map((e) => (
                  <li key={e.title} className="border border-rule-strong p-5">
                    <p className="text-base sm:text-lg">{e.title}</p>
                    <p className="mt-1 text-sm text-muted">{e.org}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-foreground">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted">
                [certifications]
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-baseline justify-between gap-4 border-b border-rule-strong pb-3 text-sm"
                  >
                    <div>
                      <p>{c.title}</p>
                      <p className="text-muted">{c.org}</p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      {c.period}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-rule-strong px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionHeader index="07" command="./mail.sh --new" />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-12 text-[11px] uppercase tracking-[0.18em] text-muted">
              &gt; subject:
            </p>
            <h2 className="mt-3 text-[clamp(2rem,7vw,5rem)] leading-[1.05] tracking-tight">
              let&apos;s build something
              <br />
              <span className="text-muted">useful together_</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  &gt; to:
                </p>
                <a
                  href="mailto:derekcordero046@gmail.com"
                  className="mt-2 inline-block text-2xl tracking-tight underline underline-offset-[6px] decoration-rule-strong transition-colors hover:decoration-foreground sm:text-3xl"
                >
                  derekcordero046@gmail.com
                </a>
                <p className="mt-4 text-sm text-muted">
                  <span className="text-subtle">&gt; whatsapp:</span>{" "}
                  <a
                    className="hover:text-foreground"
                    href="https://wa.me/639950577204"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +63 995 057 7204
                  </a>
                </p>
                <p className="mt-6 max-w-md text-sm leading-7 text-foreground/70">
                  Available for full-stack web roles, freelance projects, and
                  the occasional collaboration. Iloilo-based · open to remote.
                </p>
              </div>
              <ul className="grid gap-3 text-sm sm:justify-self-end">
                <li>
                  <a className="t-link" href="https://github.com/reksuwo" target="_blank" rel="noopener noreferrer">
                    github.com/reksuwo
                  </a>
                </li>
                <li>
                  <a className="t-link" href="https://www.facebook.com/derek.diangco" target="_blank" rel="noopener noreferrer">
                    facebook.com/derek.diangco
                  </a>
                </li>
                <li>
                  <a className="t-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    instagram
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 w-full max-w-6xl border-t border-rule-strong px-0 pt-6 sm:px-0">
          <div className="flex flex-col items-start justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center">
            <span>
              <span className="text-subtle">[ok]</span> 0 errors · 0 warnings
            </span>
            <LiveClock label="MNL" timeZone="Asia/Manila" />
            <span>derek@cordero · 2026 ©</span>
          </div>
        </div>
      </section>
    </>
  );
}

function StackCell({ group, items }: { group: string; items: string[] }) {
  return (
    <div className="h-full bg-background p-5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
        [{group}]
        {group === "ai" && (
          <span className="ml-2 inline-block border border-foreground px-1.5 py-px text-[9px] tracking-[0.2em] text-foreground">
            new
          </span>
        )}
      </p>
      <ul className="mt-3 space-y-1 text-sm">
        {items.map((it) => (
          <li key={it}>
            <span className="text-subtle">&gt; </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeader({
  index,
  command,
  count,
}: {
  index: string;
  command: string;
  count?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-rule-strong pb-4">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
        ({index}) <span className="text-foreground">{command}</span>
        <span className="caret" />
      </p>
      {count && (
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
          {count}
        </span>
      )}
    </div>
  );
}
