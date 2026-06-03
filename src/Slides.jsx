import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Search, Share2, Video,
  Megaphone, Target, Users, PlayCircle,
  Briefcase, Mail, ArrowRight, Layout, CheckCircle, Code, Phone, X
} from 'lucide-react';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};


const CatchyHeroText = () => {
  const [index, setIndex] = useState(0);
  const quotes = [
    { text: '"Jo Dikhega, Wahi Bikega!"', author: 'The Golden Rule' },
    { text: '"Content is King."', author: 'Bill Gates' },
    { text: '"The best marketing doesn\'t feel like marketing."', author: 'Tom Fishburne' },
    { text: '"If your business is not on the internet, then your business will be out of business."', author: 'Bill Gates' },
    { text: '"Marketing is about the stories you tell."', author: 'Seth Godin' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={fadeIn} style={{ minHeight: '100px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '700px' }}
        >
          <div style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            fontWeight: 500,
            color: 'var(--text-muted)',
            lineHeight: 1.4,
            marginBottom: '0.5rem'
          }}>
            {(quotes[index] || quotes[0]).text}
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
            — {(quotes[index] || quotes[0]).author}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export const CoverPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div className="center-content" initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
      <h2 className="sr-only">Best Digital Marketing Agency in Patiala</h2>
      <motion.h1
        variants={fadeIn}
        style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1.1 }}
      >
        GRUBIX MEDIA
      </motion.h1>
      <motion.h2
        variants={fadeIn}
        style={{ fontSize: '2.5rem', fontWeight: 500, marginBottom: '2rem' }}
      >
        Turning Ideas Into Growing Brands
      </motion.h2>

      <CatchyHeroText />

      <motion.button
        variants={fadeIn}
        onClick={() => setIsModalOpen(true)}
        className="hero-glow-btn"
        style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        <Target size={24} /> Book your free consultation now
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: 'var(--bg-main)', padding: '3rem', borderRadius: '20px',
                width: '90%', maxWidth: '500px', position: 'relative', border: '1px solid var(--border-color)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Thank You!</h3>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>We will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)', textAlign: 'left' }}>Book Consultation</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'left' }}>Fill out the form below and we'll get back to you.</p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontSize: '1rem', boxSizing: 'border-box' }} />
                    <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontSize: '1rem', boxSizing: 'border-box' }} />
                    <input type="tel" placeholder="Phone Number" required style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontSize: '1rem', boxSizing: 'border-box' }} />
                    <button type="submit" className="hero-glow-btn" style={{ width: '100%', marginTop: '1rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                      Submit Request
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const AboutUs = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '2rem' }}>WHO WE ARE</motion.h2>

    <motion.div variants={fadeIn} style={{ maxWidth: '800px', textAlign: 'center' }}>
      <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
        <strong style={{ color: 'var(--text-main)' }}>Grubix Media</strong> is a growth-focused digital marketing agency helping businesses build a stronger online presence through strategic marketing, creative content, SEO, and paid advertising.
      </p>
      <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '3rem', color: 'var(--text-muted)' }}>
        Our dedicated team has years of proven experience in <strong>web development</strong>, <strong>digital marketing</strong>, <strong>video editing</strong>, and <strong>graphic designing</strong> to help your brand succeed.
      </p>
      <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid var(--primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem', color: 'var(--text-main)' }}>Our Mission</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Helping businesses attract, engage, and convert customers through data-driven marketing strategies.
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export const OurServices = () => {
  const services = [
    { title: 'Social Media Management', icon: <Share2 size={32} /> },
    { title: 'Content Creation & Branding', icon: <Layout size={32} /> },
    { title: 'Search Engine Optimization', icon: <Search size={32} /> },
    { title: 'Reels & Video Editing', icon: <Video size={32} /> },
    { title: 'Meta Ads (FB & IG)', icon: <Users size={32} /> },
    { title: 'Google Ads Management', icon: <Target size={32} /> },
    { title: 'Lead Generation', icon: <TrendingUp size={32} /> },
    { title: 'Web Development', icon: <Code size={32} /> },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '3rem', textAlign: 'center' }}>WHAT WE DO</motion.h2>

      <div className="grid-4">
        {services.map((service, i) => (
          <motion.div key={i} variants={fadeIn} className="service-card">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', lineHeight: 1.4 }}>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  const points = [
    { title: 'Creative & Data-Driven Approach', desc: 'We combine creativity with analytics to deliver campaigns that look good and perform better.' },
    { title: 'Growth-Focused Marketing', desc: 'Our strategies are designed with one goal: scalable and sustainable growth for your brand.' },
    { title: 'Team of Experienced Professionals', desc: 'Work with industry experts who have years of experience in scaling digital brands.' },
    { title: 'High-Quality Lead Generation', desc: 'We focus on bringing you leads that actually convert into paying customers.' },
    { title: 'Conversion-Focused Content', desc: 'Every piece of content we create is optimized to drive action and engagement.' }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '3rem' }}>WHY GRUBIX?</motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {points.map((point, i) => (
          <motion.div key={i} variants={fadeIn} style={{
            display: 'flex',
            gap: '2rem',
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: '16px',
            borderLeft: '4px solid var(--primary)',
            alignItems: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              width: '60px', height: '60px',
              borderRadius: '50%', background: 'rgba(20, 131, 59, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700,
              flexShrink: 0
            }}>
              0{i + 1}
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{point.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{point.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const OurTeam = () => {
  const team = [
    { name: 'Krishna', role: 'E-commerce Executive', img: '/Team/krishna_ecom_creator.png' },
    { name: 'Shubham', role: 'Digital Marketing Executive', img: '/Team/Shubham_dm_executive.jpeg' },
    { name: 'Davinder', role: 'Video Editor', img: '/Team/davinder_videoeditor.png' },
    { name: 'Parish', role: 'Graphic Designer', img: '/Team/parish_graphicdesigner.jpg' },
    { name: 'Tarik', role: 'Video Editor', img: '/Team/Tarik_Video_Editor.png' },
    { name: 'Sahil', role: 'Paid Ads Specialist', img: '/Team/sahil_paid_adsspecialist.jpg' }
  ];

  return (
    <motion.div className="center-content" initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '4rem', textAlign: 'center' }}>MEET OUR TEAM</motion.h2>

      <div className="team-grid">
        {team.map((member, i) => (
          <motion.div key={i} variants={fadeIn} className="team-card">
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} className="team-img" style={member.imgStyle || {}} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{member.name}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 600 }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const TeamExperience = () => {
  const logos = [
    '/clients Logos/Bluesky_immigration.png',
    '/clients Logos/carl_jr.png',
    '/clients Logos/chai_nagri.png',
    '/clients Logos/js motors and tyres (2).png',
    '/clients Logos/pro_ultimate_gym logo.png',
    '/clients Logos/rescom_logo.png',
    '/clients Logos/uitfx.png'
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>OUR TEAM'S EXPERIENCE</motion.h2>
        <motion.p variants={fadeIn} style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Brands Our Team Members Have Worked With</motion.p>
      </div>

      <motion.div variants={fadeIn} className="marquee-container" style={{ marginBottom: '3rem' }}>
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, i) => {
            const isResCom = logo.includes('rescom_logo');
            return (
              <div key={i} className="marquee-item">
                <img
                  src={logo}
                  alt="Client Logo"
                  style={isResCom ? { transform: 'scale(1.5)' } : {}}
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div variants={fadeIn} style={{ background: 'rgba(20, 131, 59, 0.05)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p><em>Note: Selected brands showcased represent previous professional experience of team members and are included to demonstrate team capabilities.</em></p>
      </motion.div>
    </motion.div>
  );
};

export const PortfolioShowcase = () => {
  const items = [
    { image: '/results/image.png' },
    { image: '/results/image (1).png' },
    { image: '/results/image (2).png' }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '3rem' }}>CLIENT RESULTS & WORK</motion.h2>

      <div className="grid-3">
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeIn} className="portfolio-card" style={{ background: 'transparent', boxShadow: 'none' }}>
            <img
              src={item.image}
              alt={`Result ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const LetGrow = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <motion.div variants={fadeIn} style={{ width: '120px', height: '120px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 20px 40px rgba(20, 131, 59, 0.3)' }}>
      <TrendingUp size={64} color="white" />
    </motion.div>

    <motion.h2 variants={fadeIn} style={{ fontSize: '4rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
      READY TO SCALE <span style={{ color: 'var(--primary)' }}>YOUR BRAND?</span>
    </motion.h2>

    <motion.p variants={fadeIn} style={{ fontSize: '1.5rem', color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '3rem', lineHeight: 1.6 }}>
      Let's create marketing strategies that generate visibility, leads, and growth. Partner with Grubix Media today.
    </motion.p>

    <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
      <div className="cta-button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'default' }}>
        <Mail size={20} /> Contact Us
      </div>
      <a href="tel:+917508099535" className="cta-button" style={{ background: 'var(--bg-card)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Phone size={20} color="var(--primary)" /> +91 7508099535
      </a>
      <a href="https://www.instagram.com/grubix.in?igsh=MWt5ZW41Zm1qbmZ1MQ==" target="_blank" className="cta-button" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none' }}>
        <InstagramIcon size={20} /> Instagram
      </a>
    </motion.div>
  </motion.div>
);
