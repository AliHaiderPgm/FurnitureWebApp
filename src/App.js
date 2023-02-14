import './App.scss';
import Router from 'Pages/Routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './Components/muiTheme'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'Components/Global'
import { MantineProvider } from '@mantine/core';
import { AuthContextProvider } from 'Context/AuthContext';




function App() {
  return (
    <>
      <AuthContextProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </MantineProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
