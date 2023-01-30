import './App.scss';
import Router from './Pages/Frontend/Router';
import { ThemeProvider } from '@mui/material';
import {theme} from './Components/muiTheme'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'Components/Global'



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
