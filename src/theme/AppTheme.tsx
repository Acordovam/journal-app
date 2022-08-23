import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {purpleTheme} from "./";


export const AppTheme = ({children}: any) => {
    return (
      <ThemeProvider theme={purpleTheme}>
          <CssBaseline />
          {children}
      </ThemeProvider>
    );
};
