import React, { createContext, useState } from 'react'


const ThemeContext = createContext(null);

function GlobalContext({children}) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>

  )
}

export default GlobalContext;