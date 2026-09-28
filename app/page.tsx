import Link from "next/link";
import { PremiumHeroVisual } from "@/components/premium/PremiumHeroVisual";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";

const capabilities = [
  {
    title: "Workflow intake",
    body: "Role, daily tasks, apps, pain points, priorities, and team size tune the generated canvas.",
  },
  {
    title: "Personalized workspace builder",
    body: "Task lanes, KPI widgets, automation cards, and shortcut chips assemble into a cohesive layout.",
  },
  {
    title: "Role templates",
    body: "Opinionated starting points for product, engineering, sales, support, finance, and operations.",
  },
  {
    title: "Automation suggestions",
    body: "Pain-aware playbooks describe triggers and actions you can route to your orchestration layer.",
  },
];

const flow = [
  { step: "01", title: "Intake", body: "Describe the role, tools, and friction. The studio uses that to seed lanes." },
  { step: "02", title: "Compose", body: "Drag widgets, automations, and shortcuts onto a workflow-native board." },
  { step: "03", title: "Review", body: "See a believable operating picture before you wire a real data plane." },
  { step: "04", title: "Hand off", body: "Export the layout and automation notes to the systems you already run." },
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-8">
      <section className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">
            Personalized enterprise software canvas
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Every worker gets a workflow-native interface, not a static SaaS screen
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            WorkflowCanvas ingests how teams actually work, then composes lanes, widgets, automations, and
            shortcuts you can drag into place. Ship a believable operating picture before wiring your real
            data plane.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/studio"
              className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/30"
            >
              Open drag-and-configure studio
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-white/30"
            >
              Team & enterprise pricing
            </Link>
          </div>
        </div>
        <CanvasPreview />
      </section>

      <section className="grid items-start gap-10 lg:grid-cols-2">
        <HeroProductPanel />
        <PremiumHeroVisual className="max-lg:mt-2" />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {capabilities.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
            <h2 className="text-base font-semibold text-white">{c.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">Studio loop</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Intake, then drag the operating picture into place.</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {flow.map((item) => (
            <li key={item.step} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <span className="font-mono text-xs text-sky-300/80">{item.step}</span>
              <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <ProductHonestyNote status="demo" />
    </div>
  );
}

function CanvasPreview() {
  const lanes = [
    { name: "Today", cards: ["Standup notes", "Unblock billing API"] },
    { name: "In motion", cards: ["Q3 intake review", "Support queue"] },
    { name: "Automations", cards: ["Slack → lane", "KPI refresh"] },
  ];

  return (
    <aside
      aria-label="Sample workflow canvas"
      className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-sky-950/40"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-sky-300/70">Studio preview</p>
          <p className="mt-1 text-lg font-semibold text-white">Ops canvas — sample</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">Demo layout</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{lane.name}</p>
            <ul className="mt-3 space-y-2">
              {lane.cards.map((card) => (
                <li key={card} className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-slate-200">
                  {card}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["KPI: cycle time", "Shortcut: /studio", "Widget: blockers"].map((chip) => (
          <span key={chip} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] text-sky-100">
            {chip}
          </span>
        ))}
      </div>
    </aside>
  );
}
