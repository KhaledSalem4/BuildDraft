import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Mail, Facebook, Linkedin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo-hd.png.asset.json";
import heroElevation from "@/assets/hero-elevation.png.asset.json";
import project4plex from "@/assets/project-4plex.png.asset.json";
import projectSheets from "@/assets/project-sheets.png.asset.json";
import projectCustom from "@/assets/project-custom.png.asset.json";
import projectElectrical from "@/assets/project-electrical.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildDraft | Residential Permit Drawings & Drafting Support" },
      {
        name: "description",
        content:
          "Remote drafting studio delivering permit-ready residential drawing packages for Canadian and US builders. Fast turnaround, competitive pricing, reliable revisions.",
      },
      { property: "og:title", content: "BuildDraft | Permit Drawings for Builders" },
      {
        property: "og:description",
        content:
          "Permit-ready residential drafting: site plans, floor plans, elevations, sections and revisions. 6+ years supporting Canadian builders remotely.",
      },
    ],
  }),
  component: Landing,
});

const PHONE = "+15879666026";
const WHATSAPP = "00201508665565";
const WHATSAPP_URL = "https://wa.me/201508665565";
const EMAIL = "builddraft.ca@gmail.com";
const FACEBOOK = "https://www.facebook.com/share/19MHwULWVc/";
const LINKEDIN = "https://www.linkedin.com/in/khaled-elmogy-builddraft";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: FACEBOOK, label: "Facebook", Icon: Facebook, external: true },
  { href: LINKEDIN, label: "LinkedIn", Icon: Linkedin, external: true },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle, external: true },
  { href: `tel:${PHONE}`, label: "Call", Icon: Phone, external: false },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail, external: false },
];

const services = [
  "Custom Homes",
  "Single Family Homes",
  "Duplexes",
  "Basement Suites",
  "Garage Suites",
  "Backyard Suites (ADUs)",
  "Home Additions",
  "Renovations",
  "Permit Revisions",
  "Drafting Production Support",
  "Architectural Drawing Packages",
];

const deliverables = [
  "Site Plans",
  "Floor Plans",
  "Roof Plans",
  "Exterior Elevations",
  "Building Sections",
  "Permit Drawing Packages",
  "Drafting Revisions",
  "Existing Conditions Drawings",
];

const process = [
  {
    step: "01",
    title: "Initial Contact",
    body: "Send your project description, existing drawings, sketches, site information and design requirements. We review and reply with an estimated price range and timeline.",
  },
  {
    step: "02",
    title: "Project Approval",
    body: "We confirm scope, agree on pricing, define deliverables and set the timeline. Pricing depends on scope, building size, complexity, municipal requirements and revisions.",
  },
  {
    step: "03",
    title: "Drafting Phase",
    body: "We prepare the initial drawing package and submit it for review. You send comments and markups — clear written feedback keeps the project moving fast.",
  },
  {
    step: "04",
    title: "Revisions",
    body: "Drawings are updated based on your feedback. Multiple revision cycles can be completed so the final package reflects exactly what you need before submission.",
  },
  {
    step: "05",
    title: "Final Delivery",
    body: "Final PDF drawing package delivered, additional formats on request, and ongoing support if permit comments or revisions come back.",
  },
];

const pricing = [
  { name: "Single Family Home", price: "400" },
  { name: "Duplex", price: "550" },
  { name: "Garage Suite", price: "300" },
  { name: "Backyard Suite / ADU", price: "300" },
  { name: "Modification Only", price: "100" },
  { name: "Modification + New Site Plan", price: "200" },
];

const reasons = [
  "6+ Years of Remote Experience",
  "Canadian Residential Permit Experience",
  "Competitive Pricing",
  "Fast Turnaround",
  "Clear Communication",
  "Reliable Revision Support",
  "Permit-Focused Drawings",
  "Flexible Project Capacity",
  "Long-Term Drafting Partnership",
];

const projects = [
  {
    img: project4plex.url,
    tag: "Multi-Family",
    title: "High-Efficiency 4-Plex Development",
    place: "Calgary, Alberta",
  },
  {
    img: projectSheets.url,
    tag: "Permit Sheets",
    title: "Technical Plans & Building Sections",
    place: "NBC 2023 / Part 9",
  },
  {
    img: projectCustom.url,
    tag: "Custom Residential",
    title: "Ground-Up Single-Family Residence",
    place: "Calgary, Alberta",
  },
  {
    img: projectElectrical.url,
    tag: "Documentation",
    title: "Main Floor Electrical & Layout Plans",
    place: "Edmonton, Alberta",
  },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-accent">{kicker}</p>
      <h2 className="mt-3 text-4xl uppercase text-steel-gradient sm:text-5xl">{title}</h2>
      <div className="hairline mt-5 max-w-xs" />
    </div>
  );
}

function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={logo.url}
              alt="BuildDraft logo"
              className="h-10 w-10 object-contain bg-transparent"
              width={40}
              height={40}
            />
            <span className="font-display text-xl uppercase tracking-[0.25em] text-steel-bright">
              BuildDraft
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {navLinks.slice(1, 6).map((l) => (
              <a key={l.href} className="transition-colors hover:text-foreground" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex">
              {socials.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 sm:inline-block"
            >
              Get a Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-md border border-border p-2 text-foreground transition-colors hover:bg-surface-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl px-5 py-4">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 font-display text-lg uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
              {socials.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden deep-panel">
        <img
          src="/background.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute right-0 top-1/2 transform -translate-y-1/2 max-w-[520px] w-[35%] object-contain"
        />
        <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <Reveal>
              <img
                src={logo.url}
                alt="BuildDraft logo"
                width={140}
                height={140}
                loading="eager"
                className="mb-6 h-28 w-28 object-contain bg-transparent sm:h-32 sm:w-32"
              />
            </Reveal>
            <Reveal>
              <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">
                Reliable permit drawings
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 text-5xl uppercase leading-[0.95] text-steel-gradient sm:text-6xl lg:text-7xl">
                Your vision.
                <br />
                Our drawings.
                <br />
                Permits approved.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                BuildDraft is a remote drafting and design support studio specializing in
                residential permit drawings, drafting production and technical drawing packages for
                builders, contractors, developers and design firms across Canada and the United
                States.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-md bg-primary px-6 py-3 font-display text-base uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a Project
                </a>
                <a
                  href="#pricing"
                  className="rounded-md border border-border px-6 py-3 font-display text-base uppercase tracking-widest text-foreground transition-colors hover:bg-surface-2"
                >
                  View Pricing
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                {[
                  ["6+", "Years remote"],
                  ["ABC / NBC", "Code aligned"],
                  ["CAD $400", "Homes from"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-2xl text-steel-bright">{v}</dt>
                    <dd className="text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-panel)]">
              <img
                src={heroElevation.url}
                alt="Residential front elevation permit drawing by BuildDraft"
                className="w-full rounded-lg object-contain"
                loading="eager"
              />
              <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Front Elevation · Permit Set
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionTitle kicker="What we do" title="Drafting & Permit Services" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 40}>
                <div className="lift rounded-md border border-border bg-surface px-4 py-3 text-sm">
                  {s}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-surface p-7">
              <h3 className="font-display text-2xl uppercase text-steel-bright">
                Packages include
              </h3>
              <div className="hairline my-5" />
              <ul className="space-y-3 text-sm text-muted-foreground">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Drawings prepared with permit submission in mind — accurate, clearly annotated and
                ready for municipal review.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <SectionTitle kicker="Selected work" title="Permit Sets We've Produced" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 90}>
                <div className="lift group overflow-hidden rounded-xl border border-border bg-background">
                  <div className="overflow-hidden bg-surface-2 p-3">
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.tag} drawing sheet`}
                      loading="lazy"
                      className="h-56 w-full rounded object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="border-t border-border p-5">
                    <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                      {p.tag}
                    </p>
                    <h3 className="mt-2 text-xl text-steel-bright">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.place}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionTitle kicker="How it works" title="From Sketch to Permit" />
        </Reveal>
        <ol className="relative space-y-4 border-l border-border pl-6">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 70}>
              <div className="lift rounded-lg border border-border bg-surface p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-steel-gradient">{p.step}</span>
                  <h3 className="text-xl uppercase text-steel-bright">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Pricing removed per request */}

      {/* Why + Mission */}
      <section id="why" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionTitle kicker="Why builders choose us" title="A Drafting Partner, Not a Vendor" />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 40}>
                <div className="lift flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm">
                  <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
                  {r}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="h-full rounded-xl border border-border deep-panel p-8">
              <h3 className="font-display text-2xl uppercase text-steel-bright">Our Mission</h3>
              <div className="hairline my-5" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                We are not trying to replace your team. We help builders, contractors and design
                firms increase production capacity, reduce drafting bottlenecks and keep projects
                moving forward without the overhead of expanding an internal drafting department.
              </p>
              <p className="mt-5 font-display text-xl uppercase text-steel-gradient">
                BuildDraft is your remote drafting partner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border deep-panel">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <SectionTitle kicker="Let's get started" title="Discuss Your Next Project" />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-xl border border-border bg-surface p-7">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Send your project description, sketches, existing drawings and site information —
                  we'll reply with an estimated price range and timeline.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    className="lift flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm"
                    href={`tel:${PHONE}`}
                  >
                    <span className="uppercase tracking-widest text-muted-foreground">Phone</span>
                    <span className="text-steel-bright">+1 587 966-6026</span>
                  </a>
                  <a
                    className="lift flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm"
                    href={`https://wa.me/${WHATSAPP.replace(/^00/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="uppercase tracking-widest text-muted-foreground">
                      WhatsApp
                    </span>
                    <span className="text-steel-bright">00201508665565</span>
                  </a>
                  <a
                    className="lift flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm"
                    href={`mailto:${EMAIL}`}
                  >
                    <span className="uppercase tracking-widest text-muted-foreground">Email</span>
                    <span className="text-steel-bright">{EMAIL}</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-7">
                <div>
                  <h3 className="font-display text-2xl uppercase text-steel-bright">
                    What to expect
                  </h3>
                  <div className="hairline my-5" />
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>Flexible, project-based collaboration</li>
                    <li>Permit-focused, code-aligned drawings (ABC / NBC)</li>
                    <li>Reliable delivery on schedule</li>
                    <li>Clear communication and revision support</li>
                  </ul>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/share/19MHwULWVc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface-2"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khaled-elmogy-builddraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface-2"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt=""
              aria-hidden="true"
              className="h-9 w-9 object-contain"
              width={36}
              height={36}
            />
            <div>
              <p className="font-display uppercase tracking-[0.25em] text-steel-bright">
                BuildDraft
              </p>
              <p className="text-xs text-muted-foreground">
                Khaled Elmogy · Founder & Architectural Designer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Remote drafting support across Canada & the United States
          </p>
        </div>
      </footer>
    </div>
  );
}
