import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  title: {
    display: 'flex',
    alignItems: 'flex-end',
    color: '#F78E20',
    fontFamily: 'Oswald, Arial, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.05rem',
    fontSize: '19px',
    marginBottom: '1.5rem',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  },

  titleMain: {
    marginBottom: '-7px',
    marginTop: 0,
    textAlign: 'center',
  },

  line: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
      background: '#DADADA',
      flexGrow: 1,
      height: '1px',
      marginLeft: '1rem',
    }
  },

  linkWrapper: {
    textDecoration: 'none',
  },

  cardHeading: {
    fontWeight: 'bold',
    color: '#212121',
    flexGrow: 1,
    fontSize: '1.25rem',
    fontFamily: 'Archivo, Arial, sans-serif',
  },

  cardText: {
    margin: '1.5rem 0 1rem',
    lineHeight: '1.5rem',
    fontFamily: 'Archivo, Arial, sans-serif',
  },

  cardHeadingWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  callToAction: {
    textTransform: 'uppercase',
    margin: '1.5rem 0 0.5rem',
    fontFamily: 'Archivo Narrow, Arial, sans-serif',
    color: '#F78E20',
  },

  cardHover: {
    '&:hover': {
      color: 'rgba(255, 144, 21, 0.8)',
      backgroundColor: 'rgba(255, 144, 21, 0.08)',
    }
  }
});


export default withStyles(styles);
