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

})


export default withStyles(styles);
