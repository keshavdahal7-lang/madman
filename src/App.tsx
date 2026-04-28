import { useMemo, useState, type ReactNode } from "react";

const palette = {
  bg: "#040404",
  panel: "#0A0A0A",
  panelSoft: "#111111",
  olive: "#AAB36A",
  oliveDeep: "#7F874B",
  cyan: "#40E3EE",
  white: "#F5F5F5",
  muted: "#B8B8B8",
};

const media = {
  portraitA:
    "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/627855802_17948785821097468_3428068473493695521_n.jpg",
  portraitB:
    "https://instagram.fdxb2-1.fna.fbcdn.net/v/t51.82787-15/626766526_17948242542097468_6733489749515280849_n.jpg",
  heroGym:
    "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/590420814_17941833045097468_2402557387160774974_n.jpg",
  heroDark:
    "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.82787-15/598918578_17941829964097468_574593401407540340_n.jpg",
  weightLoss:
    "https://instagram.fdxb2-1.fna.fbcdn.net/v/t51.82787-15/631161491_17950059198097468_8504194840808914380_n.jpg",
  strength:
    "https://instagram.fdxb5-1.fna.fbcdn.net/v/t51.82787-15/622377670_17946982614097468_10727209201603792_n.jpg",
  martial:
    "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/632139596_17950060383097468_5078082928691893956_n.jpg",
  swim:
    "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.82787-15/627686827_17949010476097468_3649156848634196517_n.jpg",
  kids:
    "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/627465306_17947966269097468_5754362166246242560_n.jpg",
  philosophy:
    "https://instagram.fshj1-1.fna.fbcdn.net/v/t51.82787-15/628953789_17950061466097468_1888332831191563847_n.jpg",
  energy:
    "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.82787-15/622056241_17947007211097468_7187480197685636806_n.jpg",
};

const skillItems = [
  { title: "Weight Loss", text: "Sustainable fat loss with structured coaching.", image: media.weightLoss },
  { title: "Strength Training", text: "Build muscle, posture, and confidence.", image: media.strength },
  { title: "Martial Arts", text: "Krav Maga and kickboxing for self-defense.", image: media.martial },
  { title: "Swimming", text: "Technique and confidence in water.", image: media.swim },
  { title: "Kids Training", text: "Discipline and focus for young champions.", image: media.kids },
];

type Demo = {
  id: number;
  name: string;
  heading: string;
  subheading: string;
  heroBg: string;
  portrait: string;
  layout: "split" | "center" | "leftPortrait" | "stacked" | "framed";
  sectionOrder: Array<"hero" | "skills" | "about" | "gallery" | "cta">;
};

const demos: Demo[] = [
  {
    id: 1,
    name: "Demo 1 | Signature Split",
    heading: "MESSAGE ME TO START TODAY",
    subheading: "Discipline-led private coaching for Dubai professionals and families.",
    heroBg: media.heroGym,
    portrait: media.portraitA,
    layout: "split",
    sectionOrder: ["hero", "skills", "about", "gallery", "cta"],
  },
  {
    id: 2,
    name: "Demo 2 | Focused Statement",
    heading: "YOUR BODY ISN'T THE PROBLEM. YOUR APPROACH IS.",
    subheading: "Get a personalized system you can maintain for years, not weeks.",
    heroBg: media.heroDark,
    portrait: media.portraitA,
    layout: "center",
    sectionOrder: ["hero", "about", "skills", "cta", "gallery"],
  },
  {
    id: 3,
    name: "Demo 3 | Portrait Left",
    heading: "13+ YEARS OF REAL TRANSFORMATION COACHING",
    subheading: "Weight loss, strength, martial arts, swimming, and kids coaching under one system.",
    heroBg: media.energy,
    portrait: media.portraitB,
    layout: "leftPortrait",
    sectionOrder: ["hero", "gallery", "skills", "about", "cta"],
  },
  {
    id: 4,
    name: "Demo 4 | Stacked Hero",
    heading: "ONE COACH. MULTIPLE SKILLS. COMPLETE TRANSFORMATION.",
    subheading: "Custom coaching without generic templates or short-term fixes.",
    heroBg: media.philosophy,
    portrait: media.portraitA,
    layout: "stacked",
    sectionOrder: ["hero", "skills", "cta", "about", "gallery"],
  },
  {
    id: 5,
    name: "Demo 5 | Framed Premium",
    heading: "PRIVATE TRAINING IN DUBAI | LIMITED CLIENT SLOTS",
    subheading: "I coach with accountability, education, and a plan built around your life.",
    heroBg: media.heroGym,
    portrait: media.portraitB,
    layout: "framed",
    sectionOrder: ["hero", "about", "gallery", "skills", "cta"],
  },
];

function App() {
  const [activeDemoId, setActiveDemoId] = useState(1);
  const demo = demos.find((d) => d.id === activeDemoId) ?? demos[0];
  const gallery = useMemo(
    () => [media.weightLoss, media.strength, media.martial, media.swim, media.kids, media.heroDark, media.energy, media.portraitA, media.philosophy],
    [],
  );

  const sectionMap: Record<Demo["sectionOrder"][number], ReactNode> = {
    hero: <Hero demo={demo} />,
    skills: <SkillsSection />,
    about: <AboutSection portrait={demo.portrait} />,
    gallery: <GallerySection items={gallery} />,
    cta: <CtaSection />,
  };

  return (
    <div style={{ backgroundColor: palette.bg, color: palette.white }}>
      <MotionStyles />
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ borderColor: `${palette.olive}55`, backgroundColor: "rgba(4,4,4,0.88)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-black tracking-[0.18em]">MADMAN FORM</p>
          <div className="flex flex-wrap gap-2">
            {demos.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveDemoId(item.id)}
                className="border px-3 py-1.5 text-xs font-bold tracking-wider"
                style={{
                  borderColor: activeDemoId === item.id ? palette.cyan : `${palette.olive}55`,
                  color: activeDemoId === item.id ? palette.cyan : palette.muted,
                  backgroundColor: activeDemoId === item.id ? `${palette.cyan}12` : "transparent",
                }}
              >
                {`DEMO ${item.id}`}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pt-6">
        <p className="text-xs tracking-[0.2em]" style={{ color: palette.olive }}>
          {demo.name}
        </p>
      </section>

      {demo.sectionOrder.map((key) => (
        <div key={`${demo.id}-${key}`}>{sectionMap[key]}</div>
      ))}

      <footer className="border-t px-4 py-8 text-center text-sm" style={{ borderColor: `${palette.olive}44`, color: palette.muted }}>
        Developed by Qed FullStacks Keshav
      </footer>
    </div>
  );
}

function Hero({ demo }: { demo: Demo }) {
  if (demo.layout === "center") {
    return (
      <section className="relative px-4 py-20">
        <HeroBackground image={demo.heroBg} />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="rise max-w-5xl text-4xl font-black leading-tight md:text-7xl">
            <span style={{ color: palette.olive }}>YOUR BODY</span> ISN'T THE PROBLEM.
            <br />
            <span style={{ color: palette.cyan }}>YOUR APPROACH</span> IS.
          </h1>
          <p className="rise mt-5 max-w-3xl text-lg" style={{ color: palette.muted }}>
            {demo.subheading}
          </p>
          <img src={demo.portrait} alt="Trainer portrait" className="floatImage mt-8 h-[420px] w-full max-w-md object-cover" loading="eager" />
          <CtaButtons />
        </div>
      </section>
    );
  }

  if (demo.layout === "leftPortrait") {
    return (
      <section className="relative px-4 py-20">
        <HeroBackground image={demo.heroBg} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <img src={demo.portrait} alt="Trainer portrait" className="floatImage h-[560px] w-full object-cover" loading="eager" />
          <div className="space-y-5">
            <p className="rise text-xs tracking-[0.23em]" style={{ color: palette.cyan }}>
              DUBAI TRANSFORMATION COACH
            </p>
            <h1 className="rise text-4xl font-black leading-tight md:text-6xl">{demo.heading}</h1>
            <p className="rise text-lg" style={{ color: palette.muted }}>
              {demo.subheading}
            </p>
            <CtaButtons />
          </div>
        </div>
      </section>
    );
  }

  if (demo.layout === "stacked") {
    return (
      <section className="relative px-4 py-20">
        <HeroBackground image={demo.heroBg} />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="rise max-w-5xl text-4xl font-black leading-tight md:text-7xl">{demo.heading}</h1>
          <p className="rise mt-4 max-w-3xl text-lg" style={{ color: palette.muted }}>
            {demo.subheading}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <img src={demo.portrait} alt="Trainer portrait" className="floatImage h-80 w-full object-cover" loading="eager" />
            <img src={media.martial} alt="Martial arts" className="h-80 w-full object-cover" loading="lazy" />
            <img src={media.swim} alt="Swimming" className="h-80 w-full object-cover" loading="lazy" />
          </div>
          <CtaButtons />
        </div>
      </section>
    );
  }

  if (demo.layout === "framed") {
    return (
      <section className="relative px-4 py-20">
        <HeroBackground image={demo.heroBg} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <div className="border p-6 md:p-10" style={{ borderColor: `${palette.olive}77`, backgroundColor: "rgba(4,4,4,0.62)" }}>
            <p className="rise text-xs tracking-[0.23em]" style={{ color: palette.olive }}>
              MADMAN FORM
            </p>
            <h1 className="rise mt-3 text-4xl font-black leading-tight md:text-6xl">{demo.heading}</h1>
            <p className="rise mt-4 text-lg" style={{ color: palette.muted }}>
              {demo.subheading}
            </p>
            <CtaButtons />
          </div>
          <div className="border p-3" style={{ borderColor: `${palette.cyan}77` }}>
            <img src={demo.portrait} alt="Trainer portrait" className="floatImage h-[520px] w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 py-20">
      <HeroBackground image={demo.heroBg} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <p className="rise text-xs tracking-[0.25em]" style={{ color: palette.olive }}>
            PRIVATE TRAINING IN DUBAI
          </p>
          <h1 className="rise text-5xl font-black leading-tight md:text-7xl">
            MESSAGE ME TO
            <br />
            START
            <br />
            <span style={{ color: palette.olive }}>TODAY</span>
          </h1>
          <p className="rise text-lg" style={{ color: palette.muted }}>
            {demo.subheading}
          </p>
          <CtaButtons />
        </div>
        <img src={demo.portrait} alt="Trainer portrait" className="floatImage h-[560px] w-full object-cover" loading="eager" />
      </div>
    </section>
  );
}

function HeroBackground({ image }: { image: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(110deg, ${palette.oliveDeep}44, transparent 35%, transparent 65%, ${palette.oliveDeep}44)` }} />
    </>
  );
}

function CtaButtons() {
  return (
    <div className="rise mt-6 flex flex-wrap gap-3">
      <a
        href="https://wa.me/971569200467"
        target="_blank"
        rel="noreferrer"
        className="pulseCta px-6 py-3 text-sm font-black"
        style={{ backgroundColor: palette.olive, color: palette.bg }}
      >
        WHATSAPP +971 56 920 0467
      </a>
      <a href="#cta" className="border px-6 py-3 text-sm font-black" style={{ borderColor: palette.cyan, color: palette.white }}>
        GET STARTED
      </a>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="text-4xl font-black md:text-6xl" style={{ color: palette.olive }}>
        SPECIALTIES
      </h2>
      <p className="mt-3 max-w-2xl text-lg" style={{ color: palette.muted }}>
        Portrait-led personal coaching plus symbolic training across core fitness skills.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillItems.map((item) => (
          <article key={item.title} className="border p-4" style={{ borderColor: `${palette.olive}66`, backgroundColor: palette.panelSoft }}>
            <div className="flex items-start gap-4">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-cover" loading="lazy" />
              <div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm" style={{ color: palette.muted }}>
                  {item.text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ portrait }: { portrait: string }) {
  return (
    <section className="px-4 py-20" style={{ backgroundColor: palette.panel }}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.22em]" style={{ color: palette.cyan }}>
            HERE IS THE TRUTH
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-6xl">I BUILD YOU A SYSTEM YOU CAN MAINTAIN</h2>
          <ul className="mt-6 space-y-3 text-lg" style={{ color: palette.muted }}>
            <li>13+ years of real coaching experience in Dubai.</li>
            <li>Custom programs built around your body and schedule.</li>
            <li>Technique-first coaching to avoid injuries.</li>
            <li>Accountability and support beyond sessions.</li>
            <li>Limited clients for complete attention.</li>
          </ul>
          <p className="mt-6 text-xl font-semibold" style={{ color: palette.olive }}>
            Because what is the point of transformation if it disappears in 3 months?
          </p>
        </div>
        <img src={portrait} alt="Coach portrait" className="h-[560px] w-full object-cover" loading="lazy" />
      </div>
    </section>
  );
}

function GallerySection({ items }: { items: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="text-4xl font-black md:text-6xl">TRAINING PICTURES</h2>
      <p className="mt-3 max-w-3xl text-lg" style={{ color: palette.muted }}>
        Portrait of trainer plus symbolic visuals covering strength, martial arts, swimming, fat loss, and youth training.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, index) => (
          <img
            key={`${item}-${index}`}
            src={item}
            alt={`Training picture ${index + 1}`}
            loading="lazy"
            className={`w-full object-cover transition duration-500 hover:scale-[1.04] ${index % 4 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
          />
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="px-4 py-20" style={{ backgroundColor: palette.panel }}>
      <div
        className="mx-auto max-w-7xl border p-8 md:p-12"
        style={{ borderColor: `${palette.olive}77`, background: `linear-gradient(120deg, ${palette.oliveDeep}44, ${palette.bg})` }}
      >
        <h2 className="text-4xl font-black md:text-6xl">READY TO START YOUR TRANSFORMATION?</h2>
        <p className="mt-4 max-w-3xl text-lg" style={{ color: palette.muted }}>
          Dubai private training at your home or select gym. WhatsApp now to claim an available slot.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://wa.me/971569200467"
            target="_blank"
            rel="noreferrer"
            className="pulseCta px-7 py-3 text-sm font-black"
            style={{ backgroundColor: palette.olive, color: palette.bg }}
          >
            WHATSAPP NOW
          </a>
          <a
            href="https://www.instagram.com/madman.form"
            target="_blank"
            rel="noreferrer"
            className="border px-7 py-3 text-sm font-black"
            style={{ borderColor: palette.cyan }}
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
      .rise { animation: rise .8s ease both; }
      .rise:nth-child(2){ animation-delay: .1s; }
      .rise:nth-child(3){ animation-delay: .2s; }
      .rise:nth-child(4){ animation-delay: .3s; }
      .pulseCta { animation: pulseCta 2.2s ease-in-out infinite; }
      .floatImage { animation: floatImage 4.6s ease-in-out infinite; }
      @keyframes rise {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulseCta {
        0%, 100% { transform: translateY(0); filter: brightness(1); }
        50% { transform: translateY(-2px); filter: brightness(1.08); }
      }
      @keyframes floatImage {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
    `}</style>
  );
}

export default App;
