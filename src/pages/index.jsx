import React from 'react'

import BaseLayout from '../components/BaseLayout';
import Hero from '../components/Hero';
import SectionsList from '../components/SectionsList';
import Footer from '../components/Footer';


const Homepage = () => (
  <BaseLayout>
    <Hero />
    <SectionsList />
    <Footer />
  </BaseLayout>
);


export default Homepage;