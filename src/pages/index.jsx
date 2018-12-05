import React from 'react'

import BaseLayout from '../components/BaseLayout';
import Hero from '../components/Hero';
import SectionsList from '../components/SectionsList';
import Footer from '../components/Footer';


const Homepage = () => (
  <BaseLayout>
    <Hero
      image
      title='Toolkit & Guide for'
      main = {{
        content: 'organising a protest',
        class: 'largeText'
      }}
      buttonContent = {{
        text: 'Download the Guide',
        url: '/ProtestGuide.pdf',
        target: '_blank'
      }}
    />
    <SectionsList />
    <Footer />
  </BaseLayout>
);

export default Homepage;