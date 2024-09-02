import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import BasicCard from './components/Card';
import { useEffect, useLayoutEffect, useState } from 'react';
import { MyThemeProvider } from './context/theme';


function App() {

  const [themeMode, SetThemeMode] = useState('light')
  const applyLightTheme = () => {
    SetThemeMode('light')
  }
  const applyDarkTheme = () => {
    SetThemeMode('dark')
  }

  let theme = createTheme({
    palette: {
      mode: (themeMode === 'dark') ? 'dark' : 'light',
    },
  });

  useLayoutEffect(()=>{
    const isLastDarkTheme = localStorage.getItem('darkTheme')
    if(isLastDarkTheme === 'true')
    {
      SetThemeMode('dark')
    }
    else{
      SetThemeMode('light')
    }
  })

  useEffect(() => {
    

    theme = createTheme({
      palette: {
        mode: (themeMode === 'dark') ? 'dark' : 'light',
      },
    });

  }, [themeMode])

  return (
    <MyThemeProvider value={{ themeMode, applyLightTheme, applyDarkTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <BasicCard></BasicCard>
      </ThemeProvider>
    </MyThemeProvider>

  );
}

export default App;
