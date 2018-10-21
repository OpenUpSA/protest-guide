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
    justifyContent: 'center',
  }
}


export default withStyles(styles);
