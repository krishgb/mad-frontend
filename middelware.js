import axios from "axios"

const BASE_URL = 'https://apisearcher.herokuapp.com'

export const getSome = async() => {
    try{
        const fetched = await axios.get(`${BASE_URL}`)
        const data = await fetched.data.data
        return {done: !0, data}
    }catch(e) {
        return {done: !1, msg: 'Possibly network error'}
    }    
}

export const search = async(keyword) => {
    try{
        const fetched = await axios.get(`${BASE_URL}/search/${keyword}`)
        let data = await fetched.data.data
        return {done: !0, data}
    }catch(e) {
        return {done: !1, msg: 'Possibly network error'}
    }
}


export const cate = async(keyword) => {
    try{
        const fetched = await axios.get(`${BASE_URL}/category/${keyword}`)
        const data = await fetched.data.data
        return {done: !0, data}
    }catch(e) {
        return {done: !1, msg: 'Possibly network error'}
    }
}

export const getApi = async(url) => {
    try{
        const fetched = await fetch(`${BASE_URL}/api`, {
            method: 'POST',
            body: JSON.stringify({url}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await fetched.json()
        return {done: !0, data: data.data}
    }catch(e) {
        console.log(e)
        return {done: !1, msg: 'Possibly network error'}
    }
}