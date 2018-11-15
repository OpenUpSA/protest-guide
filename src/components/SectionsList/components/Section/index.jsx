import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import ViewList from '@material-ui/icons/ViewList';
import CheckBox from '@material-ui/icons/CheckBox';
import Info from '@material-ui/icons/Info';
import CheatSheet from '../../../../documents/Protest_Toolkit_RGA_Cheatsheet.pdf';
import Section3 from '../../../../documents/Protest_Toolkit_Section-3-Checklist.pdf';
import Timeline from '../../../../documents/Protest_Toolkit_Timeline.pdf';
import Example from '../../../../documents/Protest_Toolkit_RGA_Cheatsheet.pdf';
import ChecklistCBefore from '../../../../documents/Protest_Toolkit_Convener_Checklist_Before.pdf';
import ChecklistC from '../../../../documents/Protest_Toolkit_Convener_Checklist_During.pdf';
import ChecklistM from '../../../../documents/Protest_Toolkit_Marshal_Checklist_During.pdf';
import Conduct from '../../../../documents/Protest_Toolkit_Conduct.pdf';
import SAPS from '../../../../documents/Protest_Toolkit_SAPS_National_Instruction.pdf';
import Force from '../../../../documents/Protest_Toolkit_Using_Force.pdf';
import Rights from '../../../../documents/Protest_Toolkit_Rights_Arrest.pdf';
import Arrested from '../../../../documents/Protest_Toolkit_Being_Arrested.pdf';
import Reporting from '../../../../documents/Protest_Toolkit_Police_Brutality.pdf';


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