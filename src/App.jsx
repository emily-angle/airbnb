import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import {ThemeProvider} from 'styled-components'

import routes from "./router";
import {theme} from '@/assets/theme'
import Footer from "@/components/app-footer";
import Header from "@/components/app-header";

const App = memo(() => {
  return (
    <ThemeProvider theme={theme}>
     <Header/>
      <div>
        
        {useRoutes(routes)}
        </div>
      <Footer/>
    </ThemeProvider>
  );
});

export default App;
