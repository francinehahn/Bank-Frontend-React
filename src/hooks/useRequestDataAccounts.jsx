import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestDataAccounts (url) {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    
    useEffect(() => {
        axios.get(url)
        .then(response => setData(response.data))
        .catch(err => setError(err.response.data))
    }, [url])

    return [data, error]
}