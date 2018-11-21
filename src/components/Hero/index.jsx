import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Header from '../Header';
import protestImage from '../../images/protest-illustration.svg';
import ProtestGuide from '../../ProtestGuide.pdf';

import addStyles from './styles';
import Button from "@material-ui/core/Button/Button";


const Hero = ({ classes }) => {
  const {
    root,
    textArea,
    smallText,
    largeText,
    cardWrapper,
    card,
    quote,
    attribution,
    imageHolder,
    image,
    button,
    buttonLink,
    buttonText,
  } = classes;

  const headlineMarkup = (
    <div className={root}>
      <Header />
      <div className={imageHolder}>
        <img src={protestImage} className={image} alt=""></img>
      </div>
      <h1 className={textArea}>
        <Typography variant="headline" component="span" className={smallText}>
          Resources for
        </Typography>
        <Typography variant="display4" component="span" className={largeText}>
          organising
        </Typography>
        <Typography variant="display4" component="span" className={largeText}>
          a protest
        </Typography>
      </h1>
      <a href={ProtestGuide} className={buttonLink} target="_blank" rel="noopener noreferrer">
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>Download the Guide</Button>
        </div>
      </a>
    </div>
  )
  

  const quoteMarkup = (
    <div className={cardWrapper}>
      <Card className={card}>
        <p>
          <Typography variant="headline" className={quote} component="span">
            “Everyone has the right, peacefully and unarmed, to assemble, to demonstrate, to picket and to present petitions.”
          </Typography>
          <Typography className={attribution} component="span">
            - Section 17 of the constitution
          </Typography>
        </p>
      </Card>
    </div>
  )


  return (
  <React.Fragment>
    {headlineMarkup}
    {quoteMarkup}
  </React.Fragment>
  )
};


export default addStyles(Hero);
