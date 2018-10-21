import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#F78E20',
    fontFamily: 'Oswald, Arial, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.05rem',
    fontSize: '19px',
  },

  line: {
    background: '#DADADA',
    flexGrow: 1,
    height: '2px',
    marginLeft: '1rem',
  },

  linkWrapper: {
    textDecoration: 'none',
  },

  cardHeading: {
    fontWeight: 'bold',
    color: '#212121',
    flexGrow: 1,
    fontSize: '1.25rem',
    marginTop: '0.5rem',
  },

  cardText: {
    margin: '1.5rem 0 1rem',
    lineHeight: '1.5rem',
  },

  cardHeadingWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  callToAction: {
    textTransform: 'uppercase',
    margin: '1.5rem 0 0.5rem',
  },
});


export default withStyles(styles);
