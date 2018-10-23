import { withStyles } from '@material-ui/core';


const styles = {
  root: {
    backgroundColor: 'white',
    boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)',
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
  }
}


export default withStyles(styles);
