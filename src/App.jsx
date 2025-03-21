import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/Gallery';
import AboutPage from './pages/About';
import TermsAndConditions from './pages/TermsAndConditions';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFound';
import Loading from './components/Loading';
import GalleryItemDetail from './components/GalleryItemDetails';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate a delay for loading
    setLoading(true);
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(delay);
  }, [location.pathname]);

  return (
    <>
      <SiteHeadingAndNav />
      <main>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/archive" element={<GalleryPage />} />
            <Route path="/archive/:id" element={<GalleryItemDetail />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
      <Footer />
    </>
  );
}
