import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Header from '../Header';

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
    button,
    buttonLink,
    buttonText,
    paragraphText,
  } = classes;

  const headlineMarkup = (
    <div className={root}>
      <Header />
      <h1 className={textArea}>
        <Typography variant="headline" component="span" className={smallText}>
          This resource is still being developed
        </Typography>
        <Typography variant="display4" component="span" className={largeText}>
          Check back soon
        </Typography>
        <Typography variant="display4" component="span" className={paragraphText}>
          We are currently working hard to develop and publish this resource! Please check back soon or join our mailing list to receive updates about this guide.
        </Typography>
      </h1>
      <a href="/" className={buttonLink} target="_self" rel="noopener noreferrer">
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>Visit the homepage</Button>
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
