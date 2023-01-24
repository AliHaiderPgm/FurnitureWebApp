import './App.scss';
import Router from './Pages/Router';
import { ThemeProvider } from '@mui/material';
import {theme} from './Components/muiTheme'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


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
