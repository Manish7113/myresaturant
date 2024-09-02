import { createContext, useContext } from "react"; 

export const MyThemeContext = createContext({themeMode : "light", 
    applyDarkTheme : () =>{},
    applyLightTheme : () =>{}
})

export const MyThemeProvider = MyThemeContext.Provider;


export default function useTheme(){
    return useContext(MyThemeContext);
}