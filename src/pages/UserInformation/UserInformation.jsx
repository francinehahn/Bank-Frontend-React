import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { FormContainer, TransactionsContainer } from "./style"
import {BsSearch} from "react-icons/bs"

export function UserInformation () {
    useProtectedPage()

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [operatorName, setOperatorName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(operatorName, startDate, endDate)
        //fazer a chamada para api
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
              <div>
                <h2>Data</h2>
                <h2>Valor</h2>
                <h2>Tipo</h2>
                <h2>Nome do operador</h2>
              </div>

              {/*Chamar aqui o componente de transactions*/}
            </TransactionsContainer>
        </main>
    )
}