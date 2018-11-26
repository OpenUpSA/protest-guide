import React from 'react'

import BaseLayout from '../components/BaseLayout';
import Hero404 from '../components/Hero404';
import SectionsList from '../components/SectionsList';
import Footer from '../components/Footer';


const notFound = () => (
  <BaseLayout>
    <Hero404 />
    <SectionsList />
    <Footer />
  </BaseLayout>
);


export default notFound;