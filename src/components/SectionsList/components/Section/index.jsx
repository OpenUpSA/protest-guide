import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import ViewList from '@material-ui/icons/ViewList';
import CheckBox from '@material-ui/icons/CheckBox';
import Info from '@material-ui/icons/Info';

import addStyles from './styles';


const calcIcon = (type) => {
  switch (type) {
    case 'list': return <ViewList color="primary" />;
    case 'info': return <Info color="primary" />;
    case 'checks': return <CheckBox color="primary" />;
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
  

  const CardWrapper = ({ type, text, link, title }) => (
    <a href={link} className={linkWrapper} target="_blank" rel="noopener noreferrer">
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