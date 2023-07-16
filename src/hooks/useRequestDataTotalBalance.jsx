import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestDataTotalBalance (baseUrlBalance) {
    const [data, setData] = useState(undefined)
    
    useEffect(() => {
        axios.get(baseUrlBalance)
        .then(response => setData(response.data))
        .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo: ", err.response.data))
    }, [baseUrlBalance])

    return [data]
}