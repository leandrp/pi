import { useState } from 'react'
import { createContext, useContext } from 'react'

const UserContext = createContext()


export function UserProvider(props) {
    const [userData, setUserData] = useState({auth: false})
    return (
    <UserContext.Provider value={{userData, setUserData}}>{props.children}</UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  return context
}
