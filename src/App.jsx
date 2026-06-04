import React from 'react';
import { 
  CoverPage, AboutUs, OurServices, WhyChooseUs, 
  OurTeam, TeamExperience, LetGrow 
} from './Slides';
import './index.css';

const sections = [
  { id: 'cover', component: CoverPage },
  { id: 'about', component: AboutUs },
  { id: 'services', component: OurServices },
  { id: 'why-choose-us', component: WhyChooseUs },
  { id: 'team', component: OurTeam },
  { id: 'experience', component: TeamExperience },
  { id: 'let-grow', component: LetGrow }
];

function App() {
  return (
    <div className="main-container">
      {/* Animated Background */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Header */}
      <header className="site-header">
        <img src="/grubix_media_logo2.png" alt="Grubix Media" className="logo" />
      </header>

      {/* Page Content */}
      <main className="content">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="page-section">
            <section.component />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
