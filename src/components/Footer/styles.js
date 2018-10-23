import { withStyles } from '@material-ui/core';


const styles = theme => ({
  helpline: {
    backgroundColor: '#D34727',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  helplineText: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    margin: '0 1rem',
    fontSize: '28.5px',
    marginLeft: 0,
  },

  helpLineTitle: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    margin: '0 1rem',
    fontSize: '28.5px',
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },

  links: {
    backgroundColor: '#FF9015',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    }
  },

  helplineTitle: {
    textDecoration: 'none',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'rows',
    }
  },

  linkUnderline: {
    textDecoration: 'none',
  },

  textWhite: {
    color: 'white',
    textTransform: 'lowercase',
    fontFamily: 'Archivo, Arial, sans-serif',
    fontWeight: 'bold'
  },

  divider: {
    margin: '0 0.5rem',
    color: 'white',
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },

  helplineWrapper: {
    textDecoration: 'none'
  },

  callIcon: {
    transform: 'rotate(-90deg)',
    width: 30,
    height: 30,
  },

})


export default withStyles(styles);
