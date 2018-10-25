import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../images/r2p-logo.jpg';

import addStyles from './styles';


const Header = ({ classes }) => {
  const { root, content, button, buttonText, buttonLogo, buttonLeft } = classes;

  return (
    <AppBar position="static" color="default" className={root}> 
      <Toolbar className={content}>
        <div>
          <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <Button className={buttonLeft}><img src={logo} className={buttonLogo} alt="right2protest Logo"></img></Button>
          </a>
        </div>
        <div className={button}>
          <Button size="large" variant="contained" color="primary" className={buttonText}>Download the Guide</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
};


export default addStyles(Header);