import { createContext, ReactNode, useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';

interface LoginContextData {
  session: object,
  loading: boolean,
  handleSignout: (e: any) => void,
}

interface LoginProviderProps {
  children: ReactNode;
  session: object
}

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider({ children }: LoginProviderProps) {
  const [session, loading] = useSession();

  function handleSignout(e: { preventDefault: () => void; }) {
    e.preventDefault()
    signOut({
      callbackUrl: 'http://localhost:3000/login'
    })
  }

  return (
    <LoginContext.Provider
      value={{
        session,
        loading,
        handleSignout
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
