import { createContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import { ToggleButton } from '../styles/components/Sidebar';

interface SidebarContextData {
  isSideBarOpen: boolean,
  toggleSideBar: () => void,
}

export const SidebarContext = createContext({} as SidebarContextData)

export function SidebarProvider() {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 720px)'
  })

  useEffect(() => {
    if (isDesktop) {
      setSideBarOpen(true);
    }
  }, [isDesktop])

  function toggleSideBar() {
    isSideBarOpen === false ? setSideBarOpen(true) : setSideBarOpen(false)
  }

  return (
    <SidebarContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar
      }}
    >
      {!isDesktop && (
        <ToggleButton onClick={toggleSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </ToggleButton>
      )}

      <Sidebar />
    </SidebarContext.Provider>
  )
}
