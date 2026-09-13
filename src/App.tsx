import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';

const CONTACT_EMAIL = 'kondarasolutions@gmail.com';

function LogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M7 4v24M9 16 21 5M9 16l12 11" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter"/>
      <path d="M18 4.5c5.8.7 10 5.5 10 11.4 0 2.5-.8 4.9-2.3 6.8" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square"/>
      <rect x="23" y="22" width="5" height="5" fill="currentColor"/>
    </svg>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-3 text-white group cursor-pointer transition-colors hover:text-purple-300">
      <LogoMark />
      <span className="font-display font-bold tracking-[0.2em] uppercase text-sm mt-[2px]">Kondara</span>
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Product', '#product'],
    ['Why Now', '#markets'],
    ['Team', '#team'],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030205]/95 backdrop-blur-xl border-b border-white/5">
      <nav className="w-full px-6 sm:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between" aria-label="Primary navigation">
        <a href="#top" aria-label="Kondara home" onClick={() => setOpen(false)} data-testid="link-home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm py-1">
          <Wordmark />
        </a>
        <button 
          className="md:hidden text-white p-3 -mr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
          type="button" 
          aria-label={open ? 'Close navigation' : 'Open navigation'} 
          aria-expanded={open} 
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)} 
          data-testid="button-mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div id="mobile-menu" className={`absolute top-16 left-0 w-full bg-[#030205] border-b border-white/5 p-6 flex flex-col gap-6 md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:flex-row md:items-center md:gap-10 transition-all ${open ? 'block' : 'hidden md:flex'}`}>
          {links.map(([label, href]) => (
            <a 
              key={href} 
              href={href} 
              className="font-display text-sm font-semibold tracking-wide text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm py-1 px-2 -mx-2 md:mx-0 md:px-0"
              onClick={() => setOpen(false)} 
              data-testid={`link-nav-${label.toLowerCase().replace(/\s/g, '-')}`}
            >
              {label}
            </a>
          ))}
          <a 
            href={`mailto:${CONTACT_EMAIL}`} 
            className="inline-flex md:ml-4 items-center justify-center gap-2 px-5 py-2.5 border border-white/20 hover:bg-white/10 text-white font-display text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
            data-testid="link-nav-briefing"
          >
            Request a Briefing
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-[100dvh] pt-16 md:pt-20 border-b border-white/10 bg-[#030205]" id="top" aria-labelledby="hero-title">
      {/* Mobile-first order: image top on mobile, right on desktop */}
      <div className="w-full lg:w-1/2 h-[30vh] min-h-[230px] sm:h-[38vh] lg:h-auto relative order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/10">
        <img src="/images/hero-nebula.jpg" alt="" role="presentation" className="w-full h-full object-cover object-[70%_50%]" />
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-10 sm:py-14 lg:py-12 order-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7">
          <span className="font-mono text-[10px] tracking-widest text-purple-400 uppercase">Huntsville, Alabama</span>
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">— Spacecraft module in development</span>
        </div>

        <h1 id="hero-title" className="text-[42px] sm:text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-display font-semibold text-white leading-[0.96] tracking-tight mb-7 text-balance">
          One module for onboard spacecraft control.
        </h1>

        <p className="text-slate-300 text-base sm:text-lg xl:text-xl leading-relaxed font-light max-w-lg mb-8 xl:mb-10">
          We're developing one module for guidance, navigation, control, and onboard computing. It gives spacecraft teams a starting point for onboard control, with room to integrate the parts unique to their mission.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary" data-testid="link-hero-briefing">
            Request a Briefing <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
          <a href="#product" className="btn-secondary" data-testid="link-hero-product">
            Review the module <ArrowDown className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Bottleneck() {
  return (
    <section className="py-24 md:py-40 bg-[#030205]" id="bottleneck" aria-labelledby="bottleneck-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <h2 id="bottleneck-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-[1.05] tracking-tight text-white text-balance">
            Mission teams repeat the avionics integration work.
          </h2>
          
          <div className="text-slate-300 font-light text-lg sm:text-xl leading-relaxed space-y-6 lg:pt-3">
            <p>
              Mission teams often have to integrate computers, flight software, sensors, interfaces, and control electronics into each vehicle. Much of that work has to be done again on the next program.
            </p>
            <p>
              Radiation-hardened processors add cost and procurement constraints. A custom stack can also require each mission to repeat its integration work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemBoundary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-16 lg:mt-24">
      <div className="flex flex-col">
        <h3 className="text-purple-400 font-display text-xs font-semibold uppercase tracking-[0.14em] mb-8">Input</h3>
        <ul className="space-y-4 font-display text-2xl lg:text-3xl text-white">
          <li>Cameras</li>
          <li>Sensors</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <div className="mb-8">
          <h3 className="text-purple-400 font-display text-xs font-semibold uppercase tracking-[0.14em]">Core architecture</h3>
          <p className="text-slate-500 text-xs mt-2">In development</p>
        </div>
        <ul className="space-y-4 font-display text-3xl lg:text-4xl font-medium text-white mb-6">
          <li>Guidance, Navigation, Control</li>
          <li className="text-purple-300">+ Onboard Computing</li>
        </ul>
        <p className="text-sm text-slate-500 mt-auto pt-8">Targeting Space ROS &amp; cFS</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-purple-400 font-display text-xs font-semibold uppercase tracking-[0.14em] mb-8">Output &amp; oversight</h3>
        <ul className="space-y-4 font-display text-2xl lg:text-3xl text-white">
          <li>Actuator Commands</li>
          <li>Operator Authority</li>
          <li>Operating Limits</li>
        </ul>
      </div>
    </div>
  );
}

function Product() {
  return (
    <section className="py-24 md:py-40 bg-[#07050F] border-y border-white/10" id="product" aria-labelledby="product-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <h2 id="product-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white max-w-3xl text-balance">
          What the module handles.
        </h2>

        <SystemBoundary />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-slate-300 font-light text-lg leading-relaxed mt-20 pt-12 border-t border-white/5">
          <p>
            Guidance, navigation, and control (GNC) plans a path, estimates how the vehicle is moving, and sends commands to its actuators. We're combining those functions with onboard computing. The proposed design also uses cameras to estimate position and motion.
          </p>
          <p>
            We're targeting Space ROS and NASA’s core Flight System (cFS). Mission teams define the operating limits and choose which autonomous modes can run. Operators retain authority to intervene.
          </p>
        </div>
      </div>
    </section>
  );
}

function Model() {
  return (
    <section className="py-32 md:py-48 text-center bg-[#030205]" id="model" aria-labelledby="model-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1000px] mx-auto">
        <h2 id="model-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-display font-medium leading-[1.05] tracking-tight text-white text-balance mb-16">
          An onboard module. Integrated into your vehicle.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left text-slate-300 font-light text-lg sm:text-xl leading-relaxed">
          <p>
            We plan to sell the module to satellite-bus manufacturers, in-space servicing companies, and lunar lander teams.
          </p>
          <p>
            We also plan to run the software on terrestrial drones and robots. Those are development tests, not space-qualification tests.
          </p>
        </div>
      </div>
    </section>
  );
}

const markets = [
  ['National security constellations', 'U.S. defense agencies are procuring larger constellations in low Earth orbit. Each vehicle still needs onboard computing, navigation, and control.'],
  ['Commercial constellations', 'Some satellite makers now build spacecraft on production lines. Rebuilding the stack for each program adds integration work.'],
  ['Lunar vehicles', 'Landers and rovers have to navigate and react with limited real-time support from Earth. Their onboard systems must keep working while communication is delayed.'],
];

function Markets() {
  return (
    <section className="py-24 md:py-40 bg-[#07050F] border-t border-white/10" id="markets" aria-labelledby="markets-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 flex flex-col">
            <h2 id="markets-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-[1.05] text-white text-balance mb-12">
              More vehicles mean more avionics to integrate.
            </h2>
            <div className="aspect-[4/5] relative bg-[#030205] hidden lg:block border border-white/10">
               <img src="/images/launch.jpg" alt="Launch sequence" className="w-full h-full object-cover grayscale opacity-60 mix-blend-lighten" />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col space-y-12 lg:space-y-16 lg:pt-4">
            {markets.map(([title, copy], index) => (
              <article key={title} data-testid={`card-market-${index}`}>
                <h3 className="text-2xl sm:text-3xl font-display font-medium mb-4 text-white">{title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">{copy}</p>
              </article>
            ))}
            
            <div className="pt-12 border-t border-purple-500/30">
               <h3 className="text-purple-400 font-mono text-[11px] uppercase tracking-widest mb-6">Shared Onboard Functions</h3>
               <p className="text-white text-xl sm:text-2xl font-display font-medium leading-relaxed max-w-2xl">
                  Different vehicles still need many of the same onboard functions: estimate motion, follow a path, and command the hardware that steers them.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentiation() {
  const points = [
    ['Open interfaces', "We're designing interfaces for teams to connect their own sensors, actuators, and mission software."],
    ['Terrestrial testing', "We plan to evaluate the software on drones and robots. They're development tests, not space qualification."],
    ['Commercial processors', "We're evaluating commercial processors, shielding, and fault-tolerant software. Radiation and qualification testing are still ahead."],
  ];
  return (
    <section className="py-24 md:py-40 bg-[#030205] border-t border-white/10" id="differentiation" aria-labelledby="difference-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <h2 id="difference-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white text-balance mb-16 lg:mb-24">
          The parts teams keep rebuilding.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {points.map(([title, desc]) => (
            <div key={title}>
              <h3 className="text-2xl font-display font-medium text-white mb-4">{title}</h3>
              <p className="text-slate-300 leading-relaxed font-light text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = ['Huntsville, Alabama', 'Product in development', 'Targeting Space ROS + cFS', 'Space + terrestrial evaluation'];
  return (
    <section className="py-12 bg-[#07050F] border-y border-white/10" aria-label="Kondara facts">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-6">
          {items.map((item, index) => (
            <div key={item} data-testid={`text-credibility-${index}`} className="flex items-center gap-3">
               <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Idea() {
  return (
    <section className="py-32 md:py-48 bg-[#030205]" id="idea" aria-labelledby="idea-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1000px] mx-auto text-center">
        <h2 id="idea-title" className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.05] mb-12 text-white text-balance">
          A module that supports the spacecraft.
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 font-light">
          Kondara takes its name from mitochondria, the small structures that turn fuel into usable energy inside a cell. They support the larger system without being the whole system.
        </p>
        <p className="text-white text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium">
          We want to build one useful part so spacecraft teams can focus on the rest.
        </p>
      </div>
    </section>
  );
}

function HuntsvilleAndTeam() {
  return (
    <section className="py-24 md:py-40 border-t border-white/10 bg-[#07050F]" id="huntsville-team">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div id="huntsville">
            <h2 className="text-4xl sm:text-5xl font-display font-medium mb-8 text-white">
              Based in Huntsville.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 text-lg sm:text-xl font-light">
              Huntsville is home to Redstone Arsenal, NASA’s Marshall Space Flight Center, the Missile Defense Agency, and a large aerospace engineering community.
            </p>
            <p className="font-mono text-[11px] text-purple-400 tracking-widest uppercase">34°43′N / 86°35′W</p>
          </div>
          
          <div id="team" className="md:border-l md:border-white/10 md:pl-16 lg:pl-24">
            <h2 className="text-4xl sm:text-5xl font-display font-medium mb-8 text-white">
              The team is forming.
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg sm:text-xl font-light">
              Xavier Sanders founded Kondara. He is recruiting across GNC and avionics to move the hardware from design toward qualification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-32 md:py-48 bg-[#030205] border-t border-white/10" id="contact" aria-labelledby="contact-title">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8">
          <h2 id="contact-title" className="text-5xl sm:text-6xl lg:text-[84px] font-display font-medium tracking-tight mb-8 text-white text-balance">
            Request a briefing.
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-xl leading-relaxed font-light">
            Kondara is raising a pre-seed round. If you invest in space systems, build spacecraft, or work in GNC and avionics, we'd like to talk.
          </p>
        </div>
        <div className="md:col-span-4 md:flex md:justify-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary" data-testid="link-contact-briefing">
            Request a Briefing <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#07050F]">
      <div className="w-full px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <a href="#top" aria-label="Back to top" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm py-1" data-testid="link-footer-home">
            <Wordmark />
          </a>
        </div>
        <p className="font-mono text-[9px] sm:text-[10px] text-slate-500 tracking-widest uppercase max-w-xs md:max-w-md text-center md:text-right leading-relaxed">
          Concept renderings are illustrative. Kondara is an early-stage company. The flight core is in development.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#030205] text-[#F3F3F8]">
      <Nav />
      <main>
        <Hero />
        <Bottleneck />
        <Product />
        <Model />
        <Markets />
        <Differentiation />
        <Credibility />
        <Idea />
        <HuntsvilleAndTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;