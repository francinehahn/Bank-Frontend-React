import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { FormContainer, TransactionsContainer } from "./style"
import {BsSearch} from "react-icons/bs"
import axios from "axios"
import { Transactions } from "../../components/Transactions/Transactions"

export function UserInformation () {
    useProtectedPage()

    const accountId = localStorage.getItem("accountId")
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [operatorName, setOperatorName] = useState()
    const [pageNumber] = useState(0)

    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")

    console.log(error)

    const handleSubmit = (e) => {
        e.preventDefault()

        const baseUrl = `http://localhost:8080/usuario/${accountId}/transferencias`
        let formattedUrl = baseUrl

        if (startDate && endDate && operatorName) {
            formattedUrl = baseUrl+`?nomeOperador=${operatorName}&dataInicio=${startDate}&dataFim=${endDate}&numeroPagina=${pageNumber}`
        } else if (startDate && endDate) {
            formattedUrl = baseUrl+`?dataInicio=${startDate}&dataFim=${endDate}&numeroPagina=${pageNumber}`
        } else if (operatorName) {
            formattedUrl = baseUrl+`?nomeOperador=${operatorName}&numeroPagina=${pageNumber}`
        }

        axios.get(formattedUrl).then(
            response => {
                setData(response.data)
            }
        ).catch(err => {
            setError(err.response.data)
        })
    }

    return (
        <main>
            <Header/>
            <FormContainer>
                <form onSubmit={handleSubmit}>
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
                </form>
            </FormContainer>

            <TransactionsContainer>
              <span>
                <h2>Data</h2>
                <h2>Valor</h2>
                <h2>Tipo</h2>
                <h2>Nome do operador</h2>
              </span>

              <div>
                {!data && <p>Clique em pesquisar para obter os dados.</p>}
                {data && data.content.length === 0 && <p>Não há dados para os filtros selecionados.</p>}
                {data && data.content.length > 0 && data.content.map(item => {
                    return (
                        <Transactions 
                            key={item.id} 
                            date={item.dataTransferencia} 
                            value={item.valor} 
                            type={item.tipo}
                            operatorName={item.nomeOperadorTransacao}
                        />
                    )
                })}
              </div>

              {/*Chamar aqui o componente de transactions*/}
            </TransactionsContainer>
        </main>
    )
}