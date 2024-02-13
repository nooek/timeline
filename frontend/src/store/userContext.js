import React, { useState, useContext, createContext } from "react"

const userContext = createContext()

export const useUserData = () => useContext(userContext);

const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({})
  return (
    <userContext.Provider value={{user, setUser}}>
      { children }
    </userContext.Provider>
  )
}

export default UserDataProvider