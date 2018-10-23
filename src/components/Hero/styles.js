import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    backgroundColor: '#D34727',
    padding: '20px 20px 100px',
  
    [theme.breakpoints.up('sm')]: {
      padding: '100px 20px 130px',
    }
  },
  
  textArea: {
    textTransform: 'uppercase',
    textAlign: 'center',
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
    // color: '#656565',
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
  }
})



export default withStyles(styles);
