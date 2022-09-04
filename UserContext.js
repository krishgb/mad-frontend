import React, {useState, createContext, useContext, useEffect} from 'react'
import {BottomBar} from './components/ui'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UsersContext = createContext()
export const useUsers = () => useContext(UsersContext)

export const Users = ({children}) => {
    const [user, setUser] = useState({email: '', password: ''})
    
    useEffect(() => {
        AsyncStorage.getItem('user')
        .then(d => {
          if(!!d){
            const u = JSON.parse(d)
            setUser(u)
          }
        })
        .catch(e => console.log('first', e));
    }, [])

    return (
        <UsersContext.Provider value={{user, setUser}}>
        
            {children}
            {user.email.trim().length > 1 && <BottomBar />}
        </UsersContext.Provider>
    )
}