import axios from "axios"
import { useState, useEffect } from "react"


export function useRequestData (url) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(url).then(
            response => {
                setIsLoading(false)
                setData(response.data)
            }
        ).catch(err => {
            setIsLoading(false)
            setError(err.response.data)
        })
    }, [url])
    
    return [data, isLoading, error]
}