import React from 'react';
import Hero from './Hero';
import CourseCards from './CourseCards';
import JourneyTimeline from './JourneyTimeline';
import NewsSection from './NewsSection';
import Showcase from './Showcase';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import WhyUs from './WhyUs';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <CourseCards />
      <JourneyTimeline />
      <NewsSection />
      <Showcase />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home; 