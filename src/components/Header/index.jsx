import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../images/ndifuna-image-logo.png';
import SpeedDials from '../SpeedDial';
import styled from 'styled-components';

import addStyles from './styles';

const HeaderContainer = styled.div`
  display: flex;
  margin-left: 0%;
`

const LogoWrapper = styled.div`
  display: flex;
  width: 69.3%;
  height: 90%;
  margin-bottom: 0px;
`

const Header = ({ classes }) => {
  const { root, content, button, buttonLogo, } = classes;

  return (
    <AppBar position="static" color="default" className={root}>
      <Toolbar className={content}>
       <HeaderContainer>
        <LogoWrapper>
          <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <Button className={button}><img src={logo} className={buttonLogo} alt="right2protest Logo"></img></Button>
          </a>
           <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <Button className={button}><img src={logo} className={buttonLogo} alt="right2protest Logo"></img></Button>
          </a>
          <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <Button className={button}><img src={logo} className={buttonLogo} alt="right2protest Logo"></img></Button>
          </a>
        </LogoWrapper>
        </HeaderContainer>
      </Toolbar>
      <SpeedDials />
    </AppBar>
  )
};


export default addStyles(Header);