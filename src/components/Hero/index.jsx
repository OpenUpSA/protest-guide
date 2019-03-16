import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Header from '../Header';
import protestImage from '../../images/header-illustration.png';
import styled from 'styled-components';

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

  const ButtonsContainer = styled.div`
     @media (min-width: 650px) {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      width: 366px;
     }
  `

  const CardContainer = styled(Card)`
     @media (min-width: 650px) {
       min-width: 98%;
     }
  `

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
      <ButtonsContainer>
      <a href={props.buttonContent.url_pdf} className={buttonLink} target={props.buttonContent.target} rel="noopener noreferrer">
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>{props.buttonContent.text}Download the Guide</Button>
        </div>
      </a>
         <br/>
        <a href={props.buttonContent.url_form} className={buttonLink} target={props.buttonContent.target} rel="noopener noreferrer">
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>{props.buttonContent.text}Provide Feedback</Button>
        </div>
        </a>
     </ButtonsContainer>
    </div>
  )

  const quoteMarkup = (
    <div className={cardWrapper}>
      <CardContainer className={card}>
        <p>
          <Typography variant="headline" className={quote} component="span">
            “No one may be evicted from their home, or have their home demolished, without an order
            of court <br />
             made after considering <br/>
             all relevant circumstances.”
          </Typography>
          <Typography className={attribution} component="span">
            - Section 26(3) of the constitution
          </Typography>
        </p>
      </CardContainer>
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
