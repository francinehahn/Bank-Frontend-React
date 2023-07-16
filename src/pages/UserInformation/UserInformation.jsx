import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { Balance, FormContainer, MainContainer, NoData, Titles, TransactionsContainer } from "./style"
import {BsSearch} from "react-icons/bs"
import axios from "axios"
import { Transactions } from "../../components/Transactions/Transactions"
import { formatDate } from "../../utils/formatDate"

export function UserInformation () {
    useProtectedPage()

    const accountId = localStorage.getItem("accountId")
    const baseUrlTransfers = `http://localhost:8080/usuario/${accountId}/transferencias`
    const baseUrlBalance = `http://localhost:8080/usuario/${accountId}/saldo`

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [operatorName, setOperatorName] = useState("")
    const [pageNumber] = useState(0)

    const [dataTransfers, setDataTransfers] = useState(undefined)
    const [errorTransfers, setErrorTransfers] = useState("")

    const [dataTotalBalance, setDataTotalBalance] = useState(undefined)
    const [dataBalancePeriod, setDataBalancePeriod] = useState(undefined)

    
    //This request will happen every time the dataTransfers change
    useEffect(() => {
        if (startDate && endDate) {
            axios.get(`${baseUrlBalance}?dataInicio=${startDate}&dataFim=${endDate}`)
            .then(response => setDataBalancePeriod(response.data))
            .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo?dataInicio=${startDate}&dataFim=${endDate}: ", err.response.data))
        } else {
            axios.get(baseUrlBalance)
            .then(response => setDataBalancePeriod(response.data))
            .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo: ", err.response.data))
        }
    }, [dataTransfers])
    
    //This request will happen only when the page is reloaded
    useEffect(() => {
        axios.get(baseUrlBalance)
        .then(response => setDataTotalBalance(response.data))
        .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo: ", err.response.data))
    }, [baseUrlBalance, dataTotalBalance])

    const handleSubmit = (e) => {
        e.preventDefault()

        let formattedUrl = baseUrlTransfers

        if (startDate && endDate && operatorName) {
            formattedUrl = baseUrlTransfers+`?nomeOperador=${operatorName}&dataInicio=${startDate}&dataFim=${endDate}&numeroPagina=${pageNumber}`
        } else if (startDate && endDate) {
            formattedUrl = baseUrlTransfers+`?dataInicio=${startDate}&dataFim=${endDate}&numeroPagina=${pageNumber}`
        } else if (operatorName) {
            formattedUrl = baseUrlTransfers+`?nomeOperador=${operatorName}&numeroPagina=${pageNumber}`
        }

        axios.get(formattedUrl)
        .then(response => setDataTransfers(response.data))
        .catch(err => setErrorTransfers(err.response.data))
    }

    return (
        <MainContainer>
            <Header/>
            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="startDate">Data de início</label>
                    <input type="date" name="startDate" value={startDate} onChange={e => setStartDate(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="endDate">Data de fim</label>
                    <input type="date" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="operatorName">Nome do operador transacionado</label>
                    <input type="text" placeholder="Nome do operador" name="operatorName" value={operatorName} onChange={e => setOperatorName(e.target.value)}/>
                </div>

                <button>
                    <span>Pesquisar</span>
                    <BsSearch/>
                </button>
            </FormContainer>

            <TransactionsContainer>
                <Balance>
                    <h2>Saldo total: R${Number(dataTotalBalance).toFixed(2)},00</h2>
                    <h2>Saldo no período: R${Number(dataBalancePeriod).toFixed(2)},00</h2>
                </Balance>
                
                <Titles>
                    <h3>Data</h3>
                    <h3>Valor</h3>
                    <h3>Tipo</h3>
                    <h3>Nome do operador</h3>
                </Titles>

                <div>
                    {!dataTransfers && <NoData>**Clique em pesquisar para obter os dados.</NoData>}
                    {dataTransfers && dataTransfers.content.length === 0 && <NoData>Não há dados para os filtros selecionados.</NoData>}
                    {errorTransfers && <NoData>Houve um erro: {errorTransfers}</NoData>}
                    
                    {dataTransfers && dataTransfers.content.length > 0 && dataTransfers.content.map((item, index) => {
                        return (
                            <Transactions 
                                key={item.id} 
                                date={formatDate(item.dataTransferencia)} 
                                value={item.valor} 
                                type={item.tipo}
                                operatorName={item.nomeOperadorTransacao}
                                index={index}
                            />
                        )
                    })}
                </div>
            </TransactionsContainer>
        </MainContainer>
    )
}