import { BrowserRouter, Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import type { CSSProperties, ComponentType } from "react";
import {
  BarbellIcon,
  BottleIcon,
  DumbbellIcon,
  HeartPulseIcon,
  JumpRopeIcon,
  KettlebellIcon,
  RunningIcon,
  StopwatchIcon,
  TapeIcon,
  TrophyIcon,
  YogaIcon,
} from "./components/FitnessIcons";

const palette = {
  bg: "#040404",
  panel: "#0B0B0B",
  panelSoft: "#121212",
  olive: "#AAB36A",
  oliveDeep: "#7F874B",
  cyan: "#40E3EE",
  text: "#F5F5F5",
  muted: "#B8B8B8",
};

const images = {
  trainerA: "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/627855802_17948785821097468_3428068473493695521_n.jpg",
  trainerB: "https://instagram.fdxb2-1.fna.fbcdn.net/v/t51.82787-15/626766526_17948242542097468_6733489749515280849_n.jpg",
  heroGym: "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.82787-15/598918578_17941829964097468_574593401407540340_n.jpg",
  heroDark: "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/590420814_17941833045097468_2402557387160774974_n.jpg",
  strength: "https://instagram.fdxb5-1.fna.fbcdn.net/v/t51.82787-15/622377670_17946982614097468_10727209201603792_n.jpg",
  martial: "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/632139596_17950060383097468_5078082928691893956_n.jpg",
  swim: "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.82787-15/627686827_17949010476097468_3649156848634196517_n.jpg",
  kids: "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/627465306_17947966269097468_5754362166246242560_n.jpg",
  weightLoss: "https://instagram.fdxb2-1.fna.fbcdn.net/v/t51.82787-15/631161491_17950059198097468_8504194840808914380_n.jpg",
  philosophy: "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/628953789_17950061466097468_1888332831191563847_n.jpg",
  energy: "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.82787-15/622056241_17947007211097468_7187480197685636806_n.jpg",
};

type IconType = ComponentType<{ size?: number; className?: string; title?: string; style?: CSSProperties }>;

const features: Array<{ title: string; body: string; icon: IconType; image: string }> = [
  { title: "Weight Loss", body: "Fat loss strategy with sustainable habits.", icon: TapeIcon, image: images.weightLoss },
  { title: "Strength", body: "Progressive overload and form-first coaching.", icon: DumbbellIcon, image: images.strength },
  { title: "Cardio", body: "Conditioning blocks to improve stamina fast.", icon: RunningIcon, image: images.energy },
  { title: "Martial Arts", body: "Krav Maga and kickboxing confidence sessions.", icon: BarbellIcon, image: images.martial },
  { title: "Swimming", body: "Technique and endurance coaching in water.", icon: StopwatchIcon, image: images.swim },
  { title: "Mobility", body: "Flexibility and mobility for pain-free movement.", icon: YogaIcon, image: images.philosophy },
];

const badges: Array<{ label: string; icon: IconType }> = [
  { label: "Strength", icon: KettlebellIcon },
  { label: "Cardio", icon: HeartPulseIcon },
  { label: "Mobility", icon: YogaIcon },
  { label: "Recovery", icon: BottleIcon },
];

function App() {
  return (
    <BrowserRouter>
      <MotionStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/demos" replace />} />
        <Route path="/demos" element={<DemosIndex />} />
        <Route path="/demos/:id" element={<DemoRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

function DemosIndex() {
  return (
    <div style={{ backgroundColor: palette.bg, color: palette.text }} className="min-h-screen">
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.cyan }}>
          Demo Navigation
        </p>
        <h1 className="mt-2 text-4xl font-black md:text-6xl">5 Premium Fitness Symbol Demos</h1>
        <p className="mt-4 max-w-3xl text-lg" style={{ color: palette.muted }}>
          Same color palette, different composition styles. Each demo enhances the existing content with a consistent fitness icon system.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["1", "Icon-Pattern Hero"],
            ["2", "Feature Grid"],
            ["3", "Performance Dashboard"],
            ["4", "Premium Landing"],
            ["5", "Minimal Luxe"],
          ].map(([id, name]) => (
            <Link
              key={id}
              to={`/demos/${id}`}
              className="group border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${palette.olive}66`, backgroundColor: palette.panelSoft }}
              aria-label={`Open demo ${id}: ${name}`}
            >
              <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.olive }}>
                Demo {id}
              </p>
              <h2 className="mt-2 text-2xl font-black">{name}</h2>
              <p className="mt-2 text-sm" style={{ color: palette.muted }}>
                Open variant to preview symbol placement, hover behavior, and section composition.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: palette.cyan }}>
                View Demo <JumpRopeIcon size={18} />
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

function DemoRouter() {
  const { id } = useParams();
  const demoId = Number(id);
  if (![1, 2, 3, 4, 5].includes(demoId)) {
    return <Navigate to="/demos" replace />;
  }
  return <DemoPage demoId={demoId as 1 | 2 | 3 | 4 | 5} />;
}

function DemoPage({ demoId }: { demoId: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div style={{ backgroundColor: palette.bg, color: palette.text }} className="min-h-screen">
      <TopNav active={demoId} />
      {demoId === 1 ? <DemoOne /> : null}
      {demoId === 2 ? <DemoTwo /> : null}
      {demoId === 3 ? <DemoThree /> : null}
      {demoId === 4 ? <DemoFour /> : null}
      {demoId === 5 ? <DemoFive /> : null}
      <footer className="border-t px-4 py-8 text-center text-sm" style={{ borderColor: `${palette.olive}44`, color: palette.muted }}>
        Developed by Qed FullStacks Keshav
      </footer>
    </div>
  );
}

function TopNav({ active }: { active?: number }) {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: `${palette.olive}44`, backgroundColor: "rgba(4,4,4,0.88)" }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link to="/demos" className="text-base font-black tracking-[0.2em] md:text-lg">
          MADMAN FORM
        </Link>
        <nav className="flex flex-wrap gap-2" aria-label="Demo selector">
          {[1, 2, 3, 4, 5].map((id) => (
            <Link
              key={id}
              to={`/demos/${id}`}
              className="border px-3 py-1.5 text-xs font-black tracking-wider"
              style={{
                borderColor: active === id ? palette.cyan : `${palette.olive}55`,
                color: active === id ? palette.cyan : palette.muted,
                backgroundColor: active === id ? `${palette.cyan}12` : "transparent",
              }}
              aria-label={`Open demo ${id}`}
            >
              Demo {id}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionDivider({ icon: Icon }: { icon: IconType }) {
  return (
    <div className="mx-auto my-8 flex max-w-7xl items-center gap-3 px-4" aria-hidden="true">
      <div className="h-px flex-1" style={{ backgroundColor: `${palette.olive}55` }} />
      <Icon size={18} className="text-current" style={{ color: palette.olive }} />
      <div className="h-px flex-1" style={{ backgroundColor: `${palette.olive}55` }} />
    </div>
  );
}

function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href="https://wa.me/971569200467"
        target="_blank"
        rel="noreferrer"
        className="pulseAction inline-flex items-center gap-2 px-6 py-3 text-sm font-black"
        style={{ backgroundColor: palette.olive, color: palette.bg }}
        aria-label="Start on WhatsApp"
      >
        <HeartPulseIcon size={18} /> WhatsApp +971 56 920 0467
      </a>
      <a href="#features" className="inline-flex items-center gap-2 border px-6 py-3 text-sm font-black" style={{ borderColor: palette.cyan }}>
        <StopwatchIcon size={18} /> View Program
      </a>
    </div>
  );
}

function BadgeRow() {
  return (
    <div className="mt-6 flex flex-wrap gap-2" aria-label="Fitness focus badges">
      {badges.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
          style={{ borderColor: `${palette.olive}77`, backgroundColor: `${palette.panelSoft}` }}
        >
          <Icon size={14} style={{ color: palette.cyan }} />
          {label}
        </span>
      ))}
    </div>
  );
}

function DemoOne() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.heroDark})` }} />
        <div className="absolute inset-0 bg-black/80" />
        <IconPattern />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border p-8 backdrop-blur-sm" style={{ borderColor: `${palette.olive}66`, backgroundColor: "rgba(10,10,10,0.58)" }}>
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.olive }}>
              Demo 1 | Icon-Pattern Hero
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-7xl">Train With A System That Lasts</h1>
            <p className="mt-4 max-w-2xl text-lg" style={{ color: palette.muted }}>
              Message me to start today. Custom fitness, martial arts, swimming, and transformation coaching for Dubai clients.
            </p>
            <BadgeRow />
            <HeroButtons />
          </div>
          <img src={images.trainerA} alt="Trainer portrait" className="floatSlow h-[560px] w-full object-cover shadow-2xl" loading="eager" />
        </div>
      </section>
      <SectionDivider icon={DumbbellIcon} />
      <SharedFeatureStrip />
      <SharedGallery />
    </main>
  );
}

function DemoTwo() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.cyan }}>
          Demo 2 | Feature Grid
        </p>
        <h1 className="mt-2 text-4xl font-black md:text-6xl">Every Program Mapped To A Fitness Skill</h1>
        <p className="mt-4 max-w-3xl text-lg" style={{ color: palette.muted }}>
          Consistent iconography, premium spacing, soft borders, and subtle micro-interactions with your existing brand palette.
        </p>
        <div id="features" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, body, icon: Icon, image }) => (
            <article
              key={title}
              className="group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${palette.olive}66`, backgroundColor: palette.panelSoft }}
            >
              <img src={image} alt={`${title} training`} className="h-44 w-full rounded-xl object-cover" loading="lazy" />
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${palette.olive}22` }}>
                  <Icon size={20} style={{ color: palette.cyan }} className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                </span>
                <h2 className="text-xl font-black">{title}</h2>
              </div>
              <p className="mt-3 text-sm" style={{ color: palette.muted }}>
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <SectionDivider icon={KettlebellIcon} />
      <SharedCta />
    </main>
  );
}

function DemoThree() {
  const kpis = [
    { label: "Client Retention", value: "92%", icon: TrophyIcon },
    { label: "Weekly Sessions", value: "120+", icon: StopwatchIcon },
    { label: "Avg. Progress Check", value: "14 Days", icon: TapeIcon },
    { label: "Energy Score Lift", value: "+38%", icon: HeartPulseIcon },
  ];

  const meters = [
    ["Strength", 86, DumbbellIcon],
    ["Cardio", 78, RunningIcon],
    ["Mobility", 72, YogaIcon],
    ["Recovery", 81, BottleIcon],
  ] as const;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.olive }}>
          Demo 3 | Performance Dashboard
        </p>
        <h1 className="mt-2 text-4xl font-black md:text-6xl">Track What Drives Transformation</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {kpis.map(({ label, value, icon: Icon }) => (
            <article key={label} className="rounded-xl border p-4" style={{ borderColor: `${palette.olive}66`, backgroundColor: palette.panelSoft }}>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.15em]" style={{ color: palette.muted }}>
                  {label}
                </p>
                <Icon size={18} style={{ color: palette.cyan }} />
              </div>
              <p className="mt-4 text-3xl font-black">{value}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6" style={{ borderColor: `${palette.olive}66`, backgroundColor: palette.panelSoft }}>
            <h2 className="text-2xl font-black">Performance Mix</h2>
            <div className="mt-5 space-y-4">
              {meters.map(([name, amount, Icon]) => (
                <div key={name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2">
                      <Icon size={14} style={{ color: palette.cyan }} /> {name}
                    </span>
                    <span style={{ color: palette.muted }}>{amount}%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: `${palette.oliveDeep}55` }}>
                    <div className="h-2 rounded-full" style={{ width: `${amount}%`, backgroundColor: palette.olive }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src={images.trainerB} alt="Trainer portrait dashboard" className="h-full min-h-[340px] w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </section>
      <SectionDivider icon={StopwatchIcon} />
      <SharedCta />
    </main>
  );
}

function DemoFour() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-24 md:py-32" style={{ backgroundColor: palette.panel }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 80% 20%, ${palette.oliveDeep}33, transparent 35%), radial-gradient(circle at 20% 80%, ${palette.cyan}22, transparent 35%)` }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.olive }}>
            Demo 4 | Premium Landing
          </p>
          <h1 className="mt-2 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
            Editorial Spacing. Strong Symbol Language. Conversion-Driven Flow.
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <img src={images.trainerA} alt="Trainer premium portrait" className="h-[540px] w-full rounded-2xl object-cover" loading="eager" />
            <div>
              <SectionHeader icon={TrophyIcon} title="What Makes This Premium" />
              <ul className="mt-4 space-y-3 text-base" style={{ color: palette.muted }}>
                <li className="inline-flex gap-2"><DumbbellIcon size={18} style={{ color: palette.cyan }} />Tasteful gradients and subtle depth.</li>
                <li className="inline-flex gap-2"><RunningIcon size={18} style={{ color: palette.cyan }} />Consistent icon style across all sections.</li>
                <li className="inline-flex gap-2"><BottleIcon size={18} style={{ color: palette.cyan }} />Micro-interactions for polish without noise.</li>
                <li className="inline-flex gap-2"><YogaIcon size={18} style={{ color: palette.cyan }} />Balanced white space and section rhythm.</li>
              </ul>
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>
      <SectionDivider icon={TrophyIcon} />
      <SharedFeatureStrip />
      <SharedCta />
    </main>
  );
}

function DemoFive() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.cyan }}>
          Demo 5 | Minimal Luxe
        </p>
        <h1 className="mt-2 text-4xl font-black leading-tight md:text-6xl">Less Elements. More Intent.</h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: palette.muted }}>
          Sparse icon marks, strong typography, and subtle separators keep the design refined and premium.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <img src={images.trainerB} alt="Minimal portrait trainer" className="h-[520px] w-full object-cover" loading="eager" />
          <div className="space-y-5">
            <SectionHeader icon={TapeIcon} title="Training Principles" />
            {[
              ["Consistency", "Small weekly wins over random intensity.", HeartPulseIcon],
              ["Structure", "Clear plan for strength, cardio, and mobility.", BarbellIcon],
              ["Sustainability", "Built for your real calendar and lifestyle.", BottleIcon],
            ].map(([head, body, Icon]) => (
              <div key={head as string} className="border-l-2 pl-4" style={{ borderColor: `${palette.olive}88` }}>
                <p className="inline-flex items-center gap-2 text-lg font-black">
                  <Icon size={17} style={{ color: palette.cyan }} /> {head as string}
                </p>
                <p className="mt-1 text-sm" style={{ color: palette.muted }}>
                  {body as string}
                </p>
              </div>
            ))}
            <HeroButtons />
          </div>
        </div>
      </section>
      <SectionDivider icon={YogaIcon} />
      <SharedGallery minimal />
    </main>
  );
}

function SectionHeader({ title, icon: Icon }: { title: string; icon: IconType }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: `${palette.olive}77` }}>
      <Icon size={16} style={{ color: palette.cyan }} /> {title}
    </div>
  );
}

function SharedFeatureStrip() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {features.slice(0, 3).map(({ title, body, icon: Icon }) => (
          <article key={title} className="group rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${palette.olive}66`, backgroundColor: palette.panelSoft }}>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${palette.olive}22` }}>
              <Icon size={20} style={{ color: palette.cyan }} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="mt-3 text-xl font-black">{title}</h3>
            <p className="mt-2 text-sm" style={{ color: palette.muted }}>
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SharedGallery({ minimal }: { minimal?: boolean }) {
  const items = [images.weightLoss, images.strength, images.martial, images.swim, images.kids, images.philosophy, images.energy, images.trainerA];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-black md:text-5xl">Trainer + Symbolic Fitness Pictures</h2>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item, idx) => (
          <img
            key={`${item}-${idx}`}
            src={item}
            alt={`Fitness visual ${idx + 1}`}
            loading="lazy"
            className={`w-full object-cover transition duration-300 hover:opacity-90 ${minimal ? "aspect-square" : idx % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
          />
        ))}
      </div>
    </section>
  );
}

function SharedCta() {
  return (
    <section className="px-4 py-16" style={{ backgroundColor: palette.panel }}>
      <div className="mx-auto max-w-7xl rounded-2xl border p-8 md:p-12" style={{ borderColor: `${palette.olive}77`, background: `linear-gradient(120deg, ${palette.oliveDeep}30, ${palette.bg})` }}>
        <h2 className="text-3xl font-black md:text-5xl">Ready To Start Your Transformation?</h2>
        <p className="mt-3 max-w-3xl text-base" style={{ color: palette.muted }}>
          Private training in Dubai, at your home or select gym. Limited slots available.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://wa.me/971569200467"
            target="_blank"
            rel="noreferrer"
            className="pulseAction inline-flex items-center gap-2 px-7 py-3 text-sm font-black"
            style={{ backgroundColor: palette.olive, color: palette.bg }}
          >
            <TrophyIcon size={18} /> Book On WhatsApp
          </a>
          <a
            href="https://www.instagram.com/madman.form"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-black"
            style={{ borderColor: palette.cyan }}
          >
            <JumpRopeIcon size={18} /> Open Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function IconPattern() {
  const icons = [DumbbellIcon, KettlebellIcon, RunningIcon, StopwatchIcon, TapeIcon, YogaIcon];
  return (
    <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
      <div className="mx-auto grid max-w-7xl grid-cols-6 gap-10 px-8 py-10">
        {Array.from({ length: 24 }).map((_, idx) => {
          const Icon = icons[idx % icons.length];
          return <Icon key={idx} size={26} style={{ color: idx % 2 ? palette.olive : palette.cyan }} className="blur-[0.2px]" />;
        })}
      </div>
    </div>
  );
}

function MotionStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      .floatSlow { animation: floatSlow 4.8s ease-in-out infinite; }
      .pulseAction { animation: pulseAction 2.2s ease-in-out infinite; }
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      @keyframes pulseAction {
        0%, 100% { transform: translateY(0); filter: brightness(1); }
        50% { transform: translateY(-2px); filter: brightness(1.08); }
      }
    `}</style>
  );
}

export default App;
