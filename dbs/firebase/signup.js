import {db, setDoc, doc, getDoc} from './firebase'

export const sign = async (username, email, password) => {
    try{
        const docs = doc(db, 'users', email)
        
        if((await getDoc(docs)).exists()){
            return {done: false, msg: 'User already exists!'}
        }

        await setDoc(docs,{
            username,
            password
        })

        return {done: true}

    }catch(e) {
        return {done: true, msg: 'Server error Please try again later'}
    }
}