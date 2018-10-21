import React from 'react';

import Section from './components/Section';
import { beforeProtest, duringProtest, afterProtest } from './data.json';
import addStyles from './styles'


const SectionsList = ({ classes }) => {
  const { sectionWrapper, root } = classes;
  return (
    <div className={root}>
      <div className={sectionWrapper}>
        <Section heading="Before the protest" cards={beforeProtest} />
      </div>

      <div className={sectionWrapper}>
        <Section heading="During the protest" cards={duringProtest} />
      </div>

      <div className={sectionWrapper}>
        <Section heading="After the protest" cards={afterProtest} />
      </div>
    </div>
  )
};


export default addStyles(SectionsList);