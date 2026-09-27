import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HireMe from './components/HireMe/HireMe';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import NotFound from './components/NotFound/NotFound';
import { HOME_META, usePageMeta } from './lib/seo';

function Home() {
  usePageMeta(HOME_META);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <Navbar />
      <main className="bg-grid-pattern" style={{ paddingTop: '80px' }}>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <HireMe />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
