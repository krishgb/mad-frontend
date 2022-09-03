import {db, doc, getDoc} from './firebase'

export const checkLogin = async (email, password) => {
    try{

        const d = doc(db, 'users', email)
        const j = await getDoc(d)
        const data = j.data()
        if(data.password === password){
            return {done: true, data}
        }
        return {done: false, msg: 'Wrong Credentials'}
    }catch(e) {
        return {done: false, msg: 'Server error Please try again later'}
    }
}
