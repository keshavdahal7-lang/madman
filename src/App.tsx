import { useMemo, useState, type ReactNode } from "react";

const colors = {
  bg: "#040404",
  panel: "#0B0B0B",
  panelSoft: "#121212",
  olive: "#AAB36A",
  oliveDeep: "#7F874B",
  cyan: "#40E3EE",
  text: "#F5F5F5",
  muted: "#B8B8B8",
};

const media = {
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

const skillItems = [
  { name: "Weight Loss", image: media.weightLoss, text: "Science-led fat loss built for real schedules." },
  { name: "Strength Training", image: media.strength, text: "Progressive strength and form-based coaching." },
  { name: "Martial Arts", image: media.martial, text: "Krav Maga and kickboxing for confidence." },
  { name: "Swimming", image: media.swim, text: "Technique, stamina, and confidence in water." },
  { name: "Kids Training", image: media.kids, text: "Discipline and self-belief for young champions." },
];

type Demo = {
  id: number;
  title: string;
  kicker: string;
  headline: string;
  subline: string;
  heroBg: string;
  portrait: string;
  layout: "split" | "center" | "portraitLeft" | "galleryHero" | "framed";
};

const demos: Demo[] = [
  {
    id: 1,
    title: "Demo 1",
    kicker: "Private Dubai Coaching",
    headline: "Train With A System That Lasts",
    subline: "Personalized coaching for weight loss, strength, martial arts, swimming, and kids training.",
    heroBg: media.heroDark,
    portrait: media.trainerA,
    layout: "split",
  },
  {
    id: 2,
    title: "Demo 2",
    kicker: "Transformation Partner",
    headline: "Your Body Is Not The Problem",
    subline: "Your approach needs structure, accountability, and sustainable progression.",
    heroBg: media.heroGym,
    portrait: media.trainerA,
    layout: "center",
  },
  {
    id: 3,
    title: "Demo 3",
    kicker: "13+ Years Experience",
    headline: "Results Built On Discipline",
    subline: "No templates, no guesswork. Just a plan tailored to your body and your life.",
    heroBg: media.energy,
    portrait: media.trainerB,
    layout: "portraitLeft",
  },
  {
    id: 4,
    title: "Demo 4",
    kicker: "Multi-Disciplinary",
    headline: "One Coach. Multiple Skills.",
    subline: "Fitness, martial arts, and swimming integrated into one complete system.",
    heroBg: media.philosophy,
    portrait: media.trainerA,
    layout: "galleryHero",
  },
  {
    id: 5,
    title: "Demo 5",
    kicker: "Limited Slots",
    headline: "Private Training In Dubai",
    subline: "Home or select gym sessions with full attention and long-term focus.",
    heroBg: media.heroDark,
    portrait: media.trainerB,
    layout: "framed",
  },
];

export default function App() {
  const [activeDemo, setActiveDemo] = useState(1);
  const demo = demos.find((item) => item.id === activeDemo) ?? demos[0];

  const gallery = useMemo(
    () => [media.trainerA, media.weightLoss, media.strength, media.martial, media.swim, media.kids, media.philosophy, media.energy],
    [],
  );

  const sectionOrder: Record<Demo["layout"], Array<"hero" | "skills" | "method" | "gallery" | "cta">> = {
    split: ["hero", "skills", "method", "gallery", "cta"],
    center: ["hero", "method", "skills", "gallery", "cta"],
    portraitLeft: ["hero", "gallery", "skills", "method", "cta"],
    galleryHero: ["hero", "skills", "cta", "method", "gallery"],
    framed: ["hero", "method", "gallery", "skills", "cta"],
  };

  const sectionMap: Record<"hero" | "skills" | "method" | "gallery" | "cta", ReactNode> = {
    hero: <Hero demo={demo} />,
    skills: <SkillsSection />,
    method: <MethodSection portrait={demo.portrait} />,
    gallery: <GallerySection images={gallery} />,
    cta: <CtaSection />,
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text }}>
      <MotionStyles />

      <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: `${colors.olive}44`, backgroundColor: "rgba(4,4,4,0.88)" }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-base font-black tracking-[0.2em] md:text-lg">MADMAN FORM</p>
          <div className="flex flex-wrap gap-2">
            {demos.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveDemo(item.id)}
                className="border px-3 py-1.5 text-xs font-black tracking-wider"
                style={{
                  borderColor: activeDemo === item.id ? colors.cyan : `${colors.olive}55`,
                  color: activeDemo === item.id ? colors.cyan : colors.muted,
                  backgroundColor: activeDemo === item.id ? `${colors.cyan}12` : "transparent",
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </header>

      {sectionOrder[demo.layout].map((section) => (
        <div key={`${demo.id}-${section}`}>{sectionMap[section]}</div>
      ))}

      <footer className="border-t px-4 py-8 text-center text-sm" style={{ borderColor: `${colors.olive}44`, color: colors.muted }}>
        Developed by Qed FullStacks Keshav
      </footer>
    </div>
  );
}

function Hero({ demo }: { demo: Demo }) {
  const background = (
    <>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${demo.heroBg})` }} />
      <div className="absolute inset-0 bg-black/78" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(110deg, ${colors.oliveDeep}44, transparent 40%, transparent 70%, ${colors.oliveDeep}33)` }} />
    </>
  );

  if (demo.layout === "center") {
    return (
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {background}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          <p className="rise text-xs uppercase tracking-[0.24em]" style={{ color: colors.olive }}>
            {demo.kicker}
          </p>
          <h1 className="rise mt-3 text-4xl font-black leading-tight md:text-7xl">
            <span style={{ color: colors.olive }}>YOUR BODY</span> ISN'T THE PROBLEM.
            <br />
            <span style={{ color: colors.cyan }}>YOUR APPROACH</span> IS.
          </h1>
          <p className="rise mt-4 max-w-3xl text-lg" style={{ color: colors.muted }}>
            {demo.subline}
          </p>
          <img src={demo.portrait} alt="Trainer portrait" className="floatSlow mt-8 h-[430px] w-full max-w-md object-cover" loading="eager" />
          <HeroButtons />
        </div>
      </section>
    );
  }

  if (demo.layout === "portraitLeft") {
    return (
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {background}
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <img src={demo.portrait} alt="Trainer portrait" className="floatSlow h-[560px] w-full object-cover" loading="eager" />
          <div>
            <p className="rise text-xs uppercase tracking-[0.24em]" style={{ color: colors.cyan }}>
              {demo.kicker}
            </p>
            <h1 className="rise mt-3 text-4xl font-black leading-tight md:text-7xl">{demo.headline}</h1>
            <p className="rise mt-4 max-w-2xl text-lg" style={{ color: colors.muted }}>
              {demo.subline}
            </p>
            <HeroButtons />
          </div>
        </div>
      </section>
    );
  }

  if (demo.layout === "galleryHero") {
    return (
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {background}
        <div className="relative mx-auto max-w-7xl">
          <p className="rise text-xs uppercase tracking-[0.24em]" style={{ color: colors.olive }}>
            {demo.kicker}
          </p>
          <h1 className="rise mt-3 max-w-5xl text-4xl font-black leading-tight md:text-7xl">{demo.headline}</h1>
          <p className="rise mt-4 max-w-3xl text-lg" style={{ color: colors.muted }}>
            {demo.subline}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <img src={demo.portrait} alt="Trainer portrait" className="floatSlow h-72 w-full object-cover" loading="eager" />
            <img src={media.martial} alt="Martial arts" className="h-72 w-full object-cover" loading="lazy" />
            <img src={media.swim} alt="Swimming" className="h-72 w-full object-cover" loading="lazy" />
          </div>
          <HeroButtons />
        </div>
      </section>
    );
  }

  if (demo.layout === "framed") {
    return (
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {background}
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="border p-6 md:p-10" style={{ borderColor: `${colors.olive}77`, backgroundColor: "rgba(10,10,10,0.72)" }}>
            <p className="rise text-xs uppercase tracking-[0.24em]" style={{ color: colors.olive }}>
              {demo.kicker}
            </p>
            <h1 className="rise mt-3 text-4xl font-black leading-tight md:text-6xl">{demo.headline}</h1>
            <p className="rise mt-4 text-lg" style={{ color: colors.muted }}>
              {demo.subline}
            </p>
            <HeroButtons />
          </div>
          <div className="border p-3" style={{ borderColor: `${colors.cyan}66` }}>
            <img src={demo.portrait} alt="Trainer portrait" className="floatSlow h-[520px] w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      {background}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="rise text-xs uppercase tracking-[0.24em]" style={{ color: colors.olive }}>
            {demo.kicker}
          </p>
          <h1 className="rise mt-3 text-4xl font-black leading-tight md:text-7xl">{demo.headline}</h1>
          <p className="rise mt-4 max-w-3xl text-lg" style={{ color: colors.muted }}>
            {demo.subline}
          </p>
          <HeroButtons />
        </div>
        <img src={demo.portrait} alt="Trainer portrait" className="floatSlow h-[560px] w-full object-cover" loading="eager" />
      </div>
    </section>
  );
}

function HeroButtons() {
  return (
    <div className="rise mt-8 flex flex-wrap gap-3">
      <a
        href="https://wa.me/971569200467"
        target="_blank"
        rel="noreferrer"
        className="pulseAction px-6 py-3 text-sm font-black"
        style={{ backgroundColor: colors.olive, color: colors.bg }}
      >
        WHATSAPP +971 56 920 0467
      </a>
      <a href="#cta" className="border px-6 py-3 text-sm font-black" style={{ borderColor: colors.cyan }}>
        START NOW
      </a>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <p className="text-xs uppercase tracking-[0.24em]" style={{ color: colors.cyan }}>
        Specialties
      </p>
      <h2 className="mt-2 text-4xl font-black md:text-6xl">Programs Built For Results</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillItems.map((item) => (
          <article key={item.name} className="border p-3" style={{ borderColor: `${colors.olive}66`, backgroundColor: colors.panelSoft }}>
            <img src={item.image} alt={item.name} className="h-44 w-full object-cover" loading="lazy" />
            <h3 className="mt-3 text-2xl font-black">{item.name}</h3>
            <p className="mt-2 text-sm" style={{ color: colors.muted }}>
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MethodSection({ portrait }: { portrait: string }) {
  return (
    <section className="px-4 py-20" style={{ backgroundColor: colors.panel }}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <img src={portrait} alt="Coach portrait" className="h-[560px] w-full object-cover" loading="lazy" />
        <div>
          <p className="text-xs uppercase tracking-[0.24em]" style={{ color: colors.olive }}>
            Method
          </p>
          <h2 className="mt-2 text-4xl font-black leading-tight md:text-6xl">
            Discipline
            <br />
            Motion
            <br />
            <span style={{ color: colors.cyan }}>Freedom</span>
          </h2>
          <ul className="mt-6 space-y-3 text-lg" style={{ color: colors.muted }}>
            <li>Custom programming that fits your body and schedule.</li>
            <li>Form-first coaching to reduce injury risk.</li>
            <li>Accountability support to maintain consistency.</li>
            <li>13+ years of multi-disciplinary coaching in Dubai.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function GallerySection({ images }: { images: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="text-4xl font-black md:text-6xl">Portrait + Training Pictures</h2>
      <p className="mt-3 max-w-3xl text-base" style={{ color: colors.muted }}>
        Symbolic visuals for strength, martial arts, swimming, kids coaching, and transformation.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((image, idx) => (
          <img
            key={`${image}-${idx}`}
            src={image}
            alt={`Training visual ${idx + 1}`}
            className={`w-full object-cover transition duration-500 hover:scale-[1.03] ${idx % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="px-4 py-20" style={{ backgroundColor: colors.panel }}>
      <div
        className="mx-auto max-w-7xl border p-8 md:p-12"
        style={{ borderColor: `${colors.olive}77`, background: `linear-gradient(120deg, ${colors.oliveDeep}38, ${colors.bg})` }}
      >
        <h2 className="text-4xl font-black md:text-6xl">Start Your Transformation This Week</h2>
        <p className="mt-4 max-w-3xl text-lg" style={{ color: colors.muted }}>
          Private training at your home or select gym in Dubai. Limited slots available.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://wa.me/971569200467"
            target="_blank"
            rel="noreferrer"
            className="pulseAction px-7 py-3 text-sm font-black"
            style={{ backgroundColor: colors.olive, color: colors.bg }}
          >
            BOOK ON WHATSAPP
          </a>
          <a
            href="https://www.instagram.com/madman.form"
            target="_blank"
            rel="noreferrer"
            className="border px-7 py-3 text-sm font-black"
            style={{ borderColor: colors.cyan }}
          >
            OPEN INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}

function MotionStyles() {
  return (
    <style>{`
      .rise { animation: rise .75s ease both; }
      .rise:nth-child(2) { animation-delay: .08s; }
      .rise:nth-child(3) { animation-delay: .16s; }
      .rise:nth-child(4) { animation-delay: .24s; }
      .floatSlow { animation: floatSlow 5s ease-in-out infinite; }
      .pulseAction { animation: pulseAction 2.2s ease-in-out infinite; }
      @keyframes rise {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
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
