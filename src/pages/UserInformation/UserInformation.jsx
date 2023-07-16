import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { Balance, FormContainer, MainContainer, NoData, PageNumber, Titles, TransactionsContainer } from "./style"
import {BsSearch} from "react-icons/bs"
import axios from "axios"
import { Transactions } from "../../components/Transactions/Transactions"
import { formatDate } from "../../utils/formatDate"
import {MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft} from "react-icons/md"

export function UserInformation () {
    useProtectedPage()

    const [pageNumber, setPageNumber] = useState(0)
    const accountId = localStorage.getItem("accountId")
    const baseUrlTransfers = `http://localhost:8080/usuario/${accountId}/transferencias?numeroPagina=${pageNumber}`
    const baseUrlBalance = `http://localhost:8080/usuario/${accountId}/saldo`

    const [formSubmited, setFormSubmited] = useState(false)

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [operatorName, setOperatorName] = useState("")

    const [dataTransfers, setDataTransfers] = useState(undefined)
    const [errorTransfers, setErrorTransfers] = useState("")

    const [dataTotalBalance, setDataTotalBalance] = useState(undefined)
    const [dataBalancePeriod, setDataBalancePeriod] = useState(undefined)

    useEffect(() => {
        let formattedUrl = baseUrlTransfers

        if (startDate && endDate && operatorName) {
            formattedUrl = baseUrlTransfers+`?nomeOperador=${operatorName}&dataInicio=${startDate}&dataFim=${endDate}`
        } else if (startDate && endDate) {
            formattedUrl = baseUrlTransfers+`?dataInicio=${startDate}&dataFim=${endDate}`
        } else if (operatorName) {
            formattedUrl = baseUrlTransfers+`?nomeOperador=${operatorName}`
        }

        axios.get(formattedUrl)
        .then(response => setDataTransfers(response.data))
        .catch(err => setErrorTransfers(err.response.data))
    }, [formSubmited, pageNumber, operatorName, startDate, endDate, baseUrlTransfers])
    
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
    }, [dataTransfers, startDate, endDate, baseUrlBalance])
    
    //This request will happen only when the page is reloaded
    useEffect(() => {
        axios.get(baseUrlBalance)
        .then(response => setDataTotalBalance(response.data))
        .catch(err => alert("Houve um erro ao requisitar o endpoint /saldo: ", err.response.data))
    }, [baseUrlBalance, dataTotalBalance])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmited(!formSubmited)
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

                {dataTransfers && (
                    <PageNumber>
                        <MdKeyboardDoubleArrowLeft onClick={() => setPageNumber(0)}/>
                        <MdKeyboardArrowLeft onClick={() => dataTransfers.first? setPageNumber(0): setPageNumber(pageNumber - 1)}/>
                        <p>{pageNumber + 1}</p>
                        <MdKeyboardArrowRight onClick={() => dataTransfers.last? setPageNumber(pageNumber) : setPageNumber(pageNumber + 1)}/>
                        <MdKeyboardDoubleArrowRight onClick={() => setPageNumber(dataTransfers.totalPages - 1)}/>
                    </PageNumber>
                )}
            </TransactionsContainer>
        </MainContainer>
    )
}