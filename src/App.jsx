import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  CoverPage, AboutUs, OurServices, WhyChooseUs, 
  OurTeam, TeamExperience, LetGrow, OurPricing 
} from './Slides';
import { BlogList, BlogPost1 } from './Blog';
import './index.css';

const homeSections = [
  { id: 'cover', component: CoverPage },
  { id: 'about', component: AboutUs },
  { id: 'services', component: OurServices },
  { id: 'why-choose-us', component: WhyChooseUs },
  { id: 'team', component: OurTeam },
  { id: 'experience', component: TeamExperience },
  { id: 'let-grow', component: LetGrow }
];

function Home() {
  return (
    <main className="content">
      {homeSections.map((section) => (
        <section key={section.id} id={section.id} className="page-section">
          <section.component />
        </section>
      ))}
    </main>
  );
}

function PricingPage() {
  return (
    <main className="content">
      <section className="page-section" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
        <OurPricing />
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="main-container">
      {/* Animated Background */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Header */}
      <header className="site-header" style={{ alignItems: 'flex-start' }}>
        <Link to="/" style={{ pointerEvents: 'auto' }}>
          <img src="/grubix_media_logo2.png" alt="Grubix Media" className="logo" />
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/blog" className="cta-button" style={{ pointerEvents: 'auto', padding: '0.75rem 1.5rem', fontSize: '1rem', marginTop: '1rem', background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border-color)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            Blog
          </Link>
          <Link to="/pricing" className="cta-button" style={{ pointerEvents: 'auto', padding: '0.75rem 1.5rem', fontSize: '1rem', marginTop: '1rem' }}>
            View Pricing
          </Link>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/best-digital-marketing-agency-in-patiala" element={<BlogPost1 />} />
      </Routes>
    </div>
  );
}

export default App;
