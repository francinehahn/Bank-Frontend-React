import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestDataTransactions (baseUrlTransfers, formSubmited, operatorName, startDate, endDate) {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    
    useEffect(() => {
        let formattedUrl = baseUrlTransfers

        if (startDate && endDate && operatorName) {
            formattedUrl = baseUrlTransfers+`&nomeOperador=${operatorName}&dataInicio=${startDate}&dataFim=${endDate}`
        } else if (startDate && endDate) {
            formattedUrl = baseUrlTransfers+`&dataInicio=${startDate}&dataFim=${endDate}`
        } else if (operatorName) {
            formattedUrl = baseUrlTransfers+`&nomeOperador=${operatorName}`
        }

        axios.get(formattedUrl)
        .then(response => setData(response.data))
        .catch(err => setError(err.response.data))
    }, [baseUrlTransfers, formSubmited])

    return [data, error]
}