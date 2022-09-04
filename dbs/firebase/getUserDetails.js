import {db, doc, getDoc} from './firebase'

export const getUserDetails = async (email) => {
    try{

        const d = doc(db, 'users', email)
        const j = await getDoc(d)
        const data = j.data()
        return {done: true, data}
    }catch(e) {
        return {done: false, msg: 'Server error Please try again later'}
    }
}
