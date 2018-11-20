import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import ViewList from '@material-ui/icons/ViewList';
import CheckBox from '@material-ui/icons/CheckBox';
import Info from '@material-ui/icons/Info';
import CheatSheet from '../../../../documents/cheatsheet.pdf';
import Section3 from '../../../../documents/section-3.pdf';
import Timeline from '../../../../documents/timeline.pdf';
import Example from '../../../../documents/cheatsheet.pdf';
import ChecklistCBefore from '../../../../documents/convener-checklist-before.pdf';
import ChecklistC from '../../../../documents/convener-checklist-during.pdf';
import ChecklistM from '../../../../documents/marshal-checklist-during.pdf';
import Conduct from '../../../../documents/conduct.pdf';
import SAPS from '../../../../documents/national-instruction.pdf';
import Force from '../../../../documents/using-force.pdf';
import Rights from '../../../../documents/rights-arrest.pdf';
import Arrested from '../../../../documents/being-arrested.pdf';
import Reporting from '../../../../documents/police-brutality.pdf';
import Badges from '../../../../documents/police-badges.pdf';

import addStyles from './styles';


const calcIcon = (type) => {
  switch (type) {
    case 'list': return <ViewList color="primary" />;
    case 'info': return <Info color="primary" />;
    case 'checks': return <CheckBox color="primary" />;
    default: return null;
  }
}

const calcPDF = (short) => {
  switch(short) {
    case 'cheat' : return CheatSheet;
    case 'section-3' : return Section3;
    case 'timeline' : return Timeline;
    case 'example' : return Example;
    case 'checklistCBefore' : return ChecklistCBefore;
    case 'checklistC' : return ChecklistC;
    case 'checklistM' : return ChecklistM;
    case 'conduct' : return Conduct;
    case 'SAPS' : return SAPS;
    case 'force' : return Force;
    case 'rights' : return Rights;
    case 'arrested' : return Arrested;
    case 'reporting' : return Reporting;
    case 'badges' : return Badges;
    default: return null;
  }
}


const Section = ({ heading, cards, classes }) => {
  const {
    title,
    titleMain,
    line,
    linkWrapper,
    cardHeading,
    cardText,
    cardHeadingWrapper ,
    callToAction,
  } = classes;
  

  const CardWrapper = ({ type, text, link, title, short }) => (
    <a href={calcPDF(short)} className={linkWrapper} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardActionArea>
          <CardContent>
            <div className={cardHeadingWrapper}>
              <Typography gutterBottom variant="h5" component="h3" className={cardHeading}>
                {title}
              </Typography>
              {calcIcon(type)}
            </div>
            
            <Typography component="p" className={cardText}>{text}</Typography>
            <Typography color="primary" className={callToAction}>Click to download</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );


  return (
    <section>
      <div className={title}>
        <h2 className={titleMain}>{heading}</h2>
        <div className={line} />
      </div>

      <Grid container spacing={24}>
        {cards.map(({ title, type, text, link, short }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <CardWrapper {...{ title, type, text, link, short }} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
};


export default addStyles(Section);