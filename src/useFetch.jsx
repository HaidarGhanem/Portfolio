import { useState , useEffect } from "react";

const useFetch = (url) =>{
    const [ data , setData ] = useState(null)
    const [ ispending , setIspending ] = useState(true)
    const [ error , setError ] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('Couldnt Fetch Data from Server')
            }
            return res.json()
        })
        .then(data =>{
            setData(data)
            setIspending(flase)
            setError(null)
        })
        .catch(err =>{
            setIspending(false)
            setError(err.message)
        })
        return ()=>{console.log('cleaned up')}
    },[url])

    return { data , ispending , error }
}

export default useFetch