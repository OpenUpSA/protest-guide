import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '0 20px',
  },

  sectionWrapper: {
    marginBottom: '1.5rem',

    [theme.breakpoints.up('sm')]:{
      marginBottom: '3rem',
    }
  },
})


export default withStyles(styles);
