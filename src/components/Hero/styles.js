import { withStyles } from '@material-ui/core';
import protestImage from "../../images/icon.png";


const styles = theme => ({
  root: {
    backgroundColor: '#D34727',
    padding: '0px 0px 100px',
  
    [theme.breakpoints.up('sm')]: {
      padding: '0px 0px 130px',
    }
  },
  
  textArea: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20,

    [theme.breakpoints.up('sm')]: {
      marginTop: 110,
    }
  },
  
  smallText: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: '#FF9015',
    letterSpacing: '0.05rem',
    fontSize: '30px',
    lineHeight: 0.8,
    display: 'inline-block',
  },
  
  largeText: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: '#FF9015',
    letterSpacing: '0.05rem',
    fontSize: '30px',
    lineHeight: 1.5,
    margin: '0 auto',
  
    [theme.breakpoints.up('sm')]: {
      maxWidth: '500px',
      color: 'white',
      lineHeight: 0.95,
      fontSize: '5rem',
      letterSpacing: '0.025rem',
    },
  },

  cardWrapper: {
    maxWidth: '620px',
    margin: '0 auto',
  },

  card: {
    margin: '0 2rem',
    position: 'relative',
    bottom: '80px',
    padding: '20px',
  
    [theme.breakpoints.up('sm')]: {
      padding: '30px 60px',
    }
  },

  quote: {
    fontSize: '1rem',
    textAlign: 'center',
    maxWidth: 415,
    fontFamily: 'Oswald, Arial, sans-serif',
  
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    }
  },

  attribution: {
    marginTop: '1.5rem',
    display: 'block',
    fontSize: '1rem',
    color: '#FF9015',
    textAlign: 'center',
    fontFamily: 'Oswald, Arial, sans-serif',
  },

  imageHolder: {
    position: 'absolute',
    bottom : 120,
    left: 0,
    right: 0,
    margin: '0 auto',
    maxWidth: 1000,
  },

  image: {
    maxHeight: 375,
    maxWidth: 200,
  }
})



export default withStyles(styles);
