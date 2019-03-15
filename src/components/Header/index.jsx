import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import landLogo from '../../images/ndifuna-image-logo.png';
import openupLogo from '../../images/openup-logo.png';
import land4pLogo from '../../images/land-for-people-logo.png';
// import IconButton from '@material-ui/core/IconButton';
import SpeedDials from '../SpeedDial';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

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
const ButtonLink = styled(Button)`
  height: 55px;
  max-width: 65px;
`

const Header = ({ classes }) => {
  const { root, content, button, buttonLogo, } = classes;

  return (
    <AppBar position="static" color="default" className={root}>
      <Toolbar className={content}>
       <HeaderContainer>
        <LogoWrapper>
          <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <ButtonLink className={button}><img src={landLogo} className={buttonLogo} alt="ndifuna-image Logo"></img></ButtonLink>
          </a>
           <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <ButtonLink className={button}><img src={land4pLogo} className={buttonLogo} alt="land4people Logo"></img></ButtonLink>
          </a>
          <a href='https://www.r2p.org.za/' rel="noopener noreferrer" target='_blank'>
            <ButtonLink className={button}><img src={openupLogo} className={buttonLogo} alt="openup Logo"></img></ButtonLink>
          </a>
          </LogoWrapper>
        </HeaderContainer>
        <MenuIcon />
      </Toolbar>
      <SpeedDials />
      {/* <IconButton /> */}
    </AppBar>
  )
};


export default addStyles(Header);