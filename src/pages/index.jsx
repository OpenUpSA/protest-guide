import React from 'react'

import BaseLayout from '../components/BaseLayout';
import Hero from '../components/Hero';
import SectionsList from '../components/SectionsList';
import Footer from '../components/Footer';


const Homepage = () => (
  <BaseLayout>
    <Hero
      image
      title='Guide to'
      main={{
        content: 'the eviction process',
        class: 'largeText'
      }}
      buttonContent={{
        text: 'Download the Guide',
        text: 'Provide Feedback',
        url: '/ProtestGuide.pdf',
        target: '_blank'
      }}
    />
    <SectionsList />
    <Footer />
  </BaseLayout>
);

export default Homepage;