import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, BarChart3, Database, Github, Linkedin, Mail, Menu, Sparkles } from 'lucide-react';
import './style.css';

const projects = [
  {
    number: '01',
    type: 'BUSINESS ANALYSIS · SAMPLE PROJECT',
    title: 'Retail Sales Performance',
    description: 'Explore revenue patterns, product performance, and regional sales to identify where a business could focus its next growth opportunity.',
    tags: ['Excel', 'Data cleaning', 'Business insights'],
    color: 'mint',
    metric: 'Sales trends',
    bars: [35, 52, 43, 68, 55, 78, 62, 91, 73, 84, 67, 96]
  },
  {
    number: '02',
    type: 'DASHBOARD · CONCEPT',
    title: 'Customer Behaviour Snapshot',
    description: 'A dashboard concept for turning customer activity into clear segments, retention questions, and practical next steps.',
    tags: ['Power BI', 'Segmentation', 'Storytelling'],
    color: 'violet',
    metric: 'Customer patterns',
    bars: [72, 48, 64, 38, 58, 76, 54, 86, 61, 74, 49, 90]
  },
  {
    number: '03',
    type: 'PYTHON · LEARNING PROJECT',
    title: 'Data Quality Explorer',
    description: 'A planned analysis workflow for spotting missing values, duplicates, and inconsistent fields before analysis begins.',
    tags: ['Python', 'Pandas', 'Data quality'],
    color: 'amber',
    metric: 'Data readiness',
    bars: [42, 63, 51, 73, 59, 81, 68, 87, 72, 92, 78, 96]
  }
];

function MiniChart({ bars, color }) {
  return <div className={`mini-chart ${color}`} aria-label="Illustrative chart">
    {bars.map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Excel', 'Power BI', 'Python'];
  const visibleProjects = projects.filter(p => filter === 'All' || p.tags.some(t => t.toLowerCase() === filter.toLowerCase()));

  return <div className="site-shell">
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Richard Ainiegbe home"><span className="brand-mark">R.</span><span>RICHARD AINIEGBE<span className="brand-sub">DATA & BUSINESS INSIGHTS</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={21}/></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#toolkit" onClick={() => setMenuOpen(false)}>Toolkit</a>
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> BUILDING · LEARNING · ANALYSING</div>
          <h1>Turning raw data into <em>clear decisions.</em></h1>
          <p className="hero-lede">I'm Richard Ainiegbe, an aspiring data analyst interested in the space where data, technology, and business meet.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
            <a className="text-link" href="#about">A little about me <ArrowUpRight size={15}/></a>
          </div>
          <div className="hero-footnote"><span className="foot-line"></span> Based in Nigeria · Open to learning and collaboration</div>
        </div>
        <div className="hero-visual">
          <div className="visual-top"><span>ANALYTICS / 001</span><span className="live-label"><span className="status-dot"></span> IN PROGRESS</span></div>
          <div className="visual-heading"><div><span className="micro-label">THE BIG PICTURE</span><h2>Find the signal.</h2></div><div className="visual-icon"><BarChart3 size={23}/></div></div>
          <div className="chart-card">
            <div className="chart-card-head"><span>Illustrative trend line</span><span className="chart-period">12 PERIODS</span></div>
            <div className="line-chart">
              <div className="chart-grid"><i></i><i></i><i></i><i></i></div>
              <svg viewBox="0 0 420 150" preserveAspectRatio="none" role="img" aria-label="Illustrative upward trend">
                <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#70e1bd" stopOpacity=".26"/><stop offset="100%" stopColor="#70e1bd" stopOpacity="0"/></linearGradient></defs>
                <path d="M0 123 C22 116 24 98 47 105 S77 122 96 91 S129 88 145 94 S176 60 193 74 S223 88 242 55 S273 67 289 49 S322 65 340 35 S372 48 391 24 L420 12 L420 150 L0 150 Z" fill="url(#areaFill)"/>
                <path d="M0 123 C22 116 24 98 47 105 S77 122 96 91 S129 88 145 94 S176 60 193 74 S223 88 242 55 S273 67 289 49 S322 65 340 35 S372 48 391 24 L420 12" fill="none" stroke="#70e1bd" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="420" cy="12" r="5" fill="#70e1bd" stroke="#0b1220" strokeWidth="3"/>
              </svg>
            </div>
            <div className="chart-axis"><span>START</span><span>OBSERVE</span><span>INSIGHT</span><span>ACTION</span></div>
          </div>
          <div className="visual-note"><Sparkles size={15}/><span>Good analysis doesn't stop at a chart. It asks what to do next.</span></div>
          <div className="floating-number">01 <span>/ 03</span></div>
        </div>
      </section>

      <section className="proof-strip">
        <div><span className="strip-label">MY FOCUS</span><strong>Curiosity over assumptions</strong></div>
        <div><span className="strip-label">MY APPROACH</span><strong>Clean · Explore · Explain</strong></div>
        <div><span className="strip-label">MY GOAL</span><strong>Insights that move work forward</strong></div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Learning to ask<br/> <em>better questions.</em></h2>
          <div className="about-copy">
            <p>I'm building my skills in data analytics with a practical, business-first mindset. I want to understand not only what the numbers say, but why they matter and how people can use them.</p>
            <p>This portfolio will document that journey through projects, experiments, and lessons learned as I develop my analytical toolkit.</p>
            <div className="principles"><span>01 <b>Stay curious</b></span><span>02 <b>Show the process</b></span><span>03 <b>Make insights useful</b></span></div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="projects-header">
            <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects with a <em>purpose.</em></h2></div>
            <p>Practice projects and case studies designed to connect analysis with real-world questions.</p>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map(f => <button key={f} className={filter === f ? 'filter active' : 'filter'} onClick={() => setFilter(f)}>{f}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map(p => <article className="project-card" key={p.number}>
              <div className="project-visual"><div className="project-visual-top"><span>CASE STUDY / {p.number}</span><span className="project-type">{p.type}</span></div><div className="project-chart-label">{p.metric}<span>↗</span></div><MiniChart bars={p.bars} color={p.color}/><div className="project-axis"><span>PERIOD 01</span><span>PERIOD 12</span></div></div>
              <div className="project-content"><div className="project-number">{p.number} <span>— FEATURED PROJECT</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div><span className="coming-soon">CASE STUDY IN DEVELOPMENT</span></div>
            </article>)}
          </div>
          <p className="project-disclaimer">Note: These are portfolio concepts with illustrative visuals, not verified business results. Detailed analyses will be published as the projects are completed.</p>
        </div>
      </section>

      <section className="section-wrap toolkit-section" id="toolkit">
        <div className="section-kicker">03 / TOOLKIT</div>
        <div className="toolkit-heading"><h2>Building my <em>analytical toolkit.</em></h2><p>Skills will be updated as I learn and complete projects. No inflated claims—just visible progress.</p></div>
        <div className="toolkit-grid">
          <div className="tool-item"><span className="tool-icon"><BarChart3 size={20}/></span><div><h3>Excel & spreadsheets</h3><p>Cleaning, formulas, pivots, and exploratory analysis.</p></div><span className="tool-stage">LEARNING PATH</span></div>
          <div className="tool-item"><span className="tool-icon"><Database size={20}/></span><div><h3>SQL & databases</h3><p>Querying, filtering, joins, and aggregations.</p></div><span className="tool-stage">LEARNING PATH</span></div>
          <div className="tool-item"><span className="tool-icon"><BarChart3 size={20}/></span><div><h3>Power BI & visualisation</h3><p>Building dashboards and communicating patterns.</p></div><span className="tool-stage">LEARNING PATH</span></div>
          <div className="tool-item"><span className="tool-icon"><Database size={20}/></span><div><h3>Python for analysis</h3><p>Working with data using Python and Pandas.</p></div><span className="tool-stage">LEARNING PATH</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-grid">
          <div><div className="section-kicker">04 / CONTACT</div><h2>Let's make data<br/><em>make sense.</em></h2><p>Open to connecting with analysts, mentors, recruiters, and people building useful things with data.</p></div>
          <div className="contact-panel"><span className="micro-label">START A CONVERSATION</span><h3>Have a project, question, or opportunity?</h3><a className="contact-link" href="mailto:Richainiegbe@gmail.com"><Mail size={18}/> Richainiegbe@gmail.com <ArrowUpRight size={16}/></a><div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> Find me on LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> Explore GitHub <ArrowUpRight size={14}/></a></div><p className="edit-note">Replace the generic social links with your profile URLs before sharing.</p></div>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">R.</span><span>RICHARD AINIEGBE<span className="brand-sub">DATA & BUSINESS INSIGHTS</span></span></a><span>Built with curiosity. Updated with every project.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
