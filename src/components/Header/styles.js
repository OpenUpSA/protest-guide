import { withStyles } from '@material-ui/core';


const styles = {
  root: {
    backgroundColor: 'white',
  },

  content: {
    maxWidth: '960px',
    width: '100%',
    margin: '0 auto',
  },

  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  buttonText: {
    fontWeight: 700,
    padding: '4px 13px',
    fontSize: '1.1rem',
    fontFamily: 'Oswald, Arial, sans-serif',
  },

  buttonLeft: {
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  buttonLogo: {
    maxWidth: 192
  }
}


export default withStyles(styles);
