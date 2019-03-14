import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Header from '../Header';
import protestImage from '../../images/protest-illustration.svg';

import addStyles from './styles';
import Button from "@material-ui/core/Button/Button";


const Hero = ({ classes, ...props }) => {
  const {
    root,
    textArea,
    smallText,
    largeText,
    largeText404,
    paragraphText,
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
      {props.image &&
        <div className={imageHolder}>
          <img src={protestImage} className={image} alt=""></img>
        </div>
      }
      <h1 className={textArea}>
        <Typography variant="headline" component="span" className={smallText}>
          {props.title}
        </Typography>
        <Typography variant="display4" component="span" className={props.main.class === 'largeText' ? largeText : largeText404 }>
          {props.main.content}
        </Typography>
        {props.paragraph &&
          <Typography variant="display4" component="span" className={paragraphText}>
            {props.paragraph}
          </Typography>
        }
      </h1>
      <a href={props.buttonContent.url} className={buttonLink} target={props.buttonContent.target} rel="noopener noreferrer">
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>{props.buttonContent.text}</Button>
        </div>
      </a>
      <br/>
      <a href={props.buttonContent.url} className={buttonLink} target={props.buttonContent.target} rel="noopener noreferrer">
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>{props.buttonContent.text}</Button>
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
