import { useState } from "react"

import { Header } from "../../components/Header/Header"
import { Transactions } from "../../components/Transactions/Transactions"

import { formatDate } from "../../utils/formatDate"

import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestDataTransactions } from "../../hooks/useRequestDataTransactions"
import { useRequestDataBalancePeriod } from "../../hooks/useRequestDataBalancePeriod"
import { useRequestDataTotalBalance } from "../../hooks/useRequestDataTotalBalance"

import {MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft} from "react-icons/md"
import {BsSearch} from "react-icons/bs"

import { Balance, FormContainer, MainContainer, NoData, PageNumber, Titles, TransactionsContainer } from "./style"

export function UserInformation () {
    useProtectedPage()

    const accountId = localStorage.getItem("accountId")
    const [pageNumber, setPageNumber] = useState(0)
    
    const baseUrlTransfers = `http://localhost:8080/usuario/${accountId}/transferencias?numeroPagina=${pageNumber}`
    const baseUrlBalance = `http://localhost:8080/usuario/${accountId}/saldo`

    const [formSubmited, setFormSubmited] = useState(false)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [operatorName, setOperatorName] = useState("")

    const [dataTransfers, errorTransfers] = useRequestDataTransactions(
        baseUrlTransfers, formSubmited, operatorName, startDate, endDate
    )

    const [dataTotalBalance] = useRequestDataTotalBalance(baseUrlBalance)
    const [dataBalancePeriod] = useRequestDataBalancePeriod(baseUrlBalance, dataTransfers, startDate, endDate)

    const handleSubmit = (e) => {
        e.preventDefault()

        //start date cannot be later than end date
        if (new Date(startDate) > new Date(endDate)) {
            alert('A data de início não pode ser posterior à data de fim.');
            return
        }

        setFormSubmited(!formSubmited)
    }

    return (
        <MainContainer>
            <Header/>
            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="startDate">Data de início</label>
                    <input 
                        type="date" 
                        max={new Date().toISOString().slice(0,10)} 
                        name="startDate" value={startDate} 
                        onChange={e => setStartDate(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="endDate">Data de fim</label>
                    <input 
                        type="date" 
                        max={new Date().toISOString().slice(0,10)} 
                        name="endDate" 
                        value={endDate} 
                        onChange={e => setEndDate(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="operatorName">Nome do operador transacionado</label>
                    <input 
                        type="text" 
                        placeholder="Nome do operador" 
                        name="operatorName" 
                        value={operatorName} 
                        onChange={e => setOperatorName(e.target.value)}
                    />
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

                {dataTransfers && dataTransfers.content.length > 0 && (
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