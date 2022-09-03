import React, {useState, createContext, useContext, useEffect} from 'react'
import {BottomBar} from './components/ui'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'

// const Stack = create

const UsersContext = createContext()
export const useUsers = () => useContext(UsersContext)

export const Users = ({children}) => {
    const [user, setUser] = useState({email: '', password: ''})
    
    return (
        <UsersContext.Provider value={{user, setUser}}>
        
            {children}
            {user.email.trim().length > 1 && <BottomBar />}
        </UsersContext.Provider>
    )
}