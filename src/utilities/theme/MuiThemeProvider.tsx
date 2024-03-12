import React, { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./index";
import { NextAppDirEmotionCacheProvider } from "./Emotioncache";


type Props = {
  children: ReactNode;
};

const MuiThemeProvider = ({ children }: Props) => {
 

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default MuiThemeProvider;
