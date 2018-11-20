import React from 'react'
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import addStyles from './styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa643',
      main: '#FF9015',
      dark: '#b2640e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#db6b52',
      main: '#D34727',
      dark: '#93311b',
      contrastText: '#fff',
    },
  },
});


const BaseLayout = ({ children, classes }) => {
  const { preventOverflow } = classes;

  return (
    <MuiThemeProvider {...{ theme }}>
      <div className={preventOverflow}>
        <CssBaseline />
        {children}
      </div>
    </MuiThemeProvider>
  );
}


export default addStyles(BaseLayout);
