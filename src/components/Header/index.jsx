import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ndifunaLogo from '../../images/ndifuna-image-logo.png';
import openupLogo from '../../images/openup-logo.png';
import land4pLogo from '../../images/land-for-people-logo.png';
// import IconButton from '@material-ui/core/IconButton';
import SpeedDials from '../SpeedDial';
import styled from 'styled-components';
// import MenuIcon from '@material-ui/icons/Menu';

import addStyles from './styles';

const HeaderContainer = styled.div`
  display: flex;
  margin-left: 0%;
  @media (min-width: 650px) {
      justify-content: space-between;
      margin-right: 55%;
     }
`

const LogoWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  height: 90%;
  margin-bottom: 0px;
`
const ButtonLink = styled(Button)`
  height: 55px;
  width: 65px;
  margin: 0 auto;
`

const PipeDivider = styled.div`
  border: 1px solid lightgrey;
  height: 45px;
  margin: 5px;
`

const Header = ({ classes }) => {
  const { root, content, button, buttonLogo, } = classes;

  return (
    <AppBar position="static" color="default" className={root}>
      <Toolbar className={content}>
       <HeaderContainer>
        <LogoWrapper>
          <a href='http://nu.org.za/' rel="noopener noreferrer" target='_blank'>
            <ButtonLink className={button}><img src={ndifunaLogo} className={buttonLogo} alt="ndifuna-image Logo"></img></ButtonLink>
            </a>
            <PipeDivider></PipeDivider>
           <a href='http://reclaimthecity.org.za/' rel="noopener noreferrer" target='_blank'>
            <ButtonLink className={button}><img src={land4pLogo} className={buttonLogo} alt="land4people Logo"></img></ButtonLink>
            </a>
            <PipeDivider></PipeDivider>
          <a href='https://openup.org.za/' rel="noopener noreferrer" target='_blank'>
            <ButtonLink className={button}><img src={openupLogo} className={buttonLogo} alt="openup Logo"></img></ButtonLink>
          </a>
          </LogoWrapper>
        </HeaderContainer>
        {/* <MenuIcon /> */}
      </Toolbar>
      <SpeedDials />
      {/* <IconButton /> */}
    </AppBar>
  )
};


export default addStyles(Header);