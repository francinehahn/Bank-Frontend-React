import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestDataBalancePeriod (baseUrlBalance, dataTransfers, startDate, endDate) {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        if (startDate && endDate) {
            axios.get(`${baseUrlBalance}?dataInicio=${startDate}&dataFim=${endDate}`)
            .then(response => setData(response.data))
            .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo?dataInicio=${startDate}&dataFim=${endDate}: ", err.response.data))
        } else {
            axios.get(baseUrlBalance)
            .then(response => setData(response.data))
            .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo: ", err.response.data))
        }
    }, [dataTransfers])

    return [data]
}