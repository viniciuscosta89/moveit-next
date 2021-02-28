import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface ModeContextData {
  mode: string,
  modeToggler: () => void
}

interface ModeProviderProps {
  children: ReactNode;
  mode: string,
}

export const ModeContext = createContext({} as ModeContextData)

export function ModeProvider({
  children,
  ...rest
}: ModeProviderProps) {
  const [mode, setMode] = useState(rest.mode ?? 'light');

  useEffect(() => {
    Cookies.set('mode', mode)
  }, [mode])

  function modeToggler() {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <ModeContext.Provider value={{
      mode,
      modeToggler
    }}>
      {children}
    </ModeContext.Provider>

  )
}
