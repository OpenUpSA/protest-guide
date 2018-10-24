import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import addStyles from './styles';


const Header = ({ classes }) => {
  const { root, content, button, buttonText } = classes;

  return (
    <AppBar position="static" color="default" className={root}> 
      <Toolbar className={content}>
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>Download the Guide</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
};


export default addStyles(Header);