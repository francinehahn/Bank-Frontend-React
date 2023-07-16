import { useState } from "react";
import { HomeContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { useRequestDataAccounts } from "../../hooks/useRequestDataAccounts";

export function Home () {
    const navigate = useNavigate()

    const [accountId, setAccountId] = useState("")
    const [data, error] = useRequestDataAccounts("http://localhost:8080/usuarios")

    const selectOptions = data && data.map(item => {
        return <option key={item.idConta} value={item.idConta}>{item.idConta} - {item.nomeResponsavel}</option>
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("accountId", accountId)
        navigate("/user")
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form">Escolha a conta que deseja acessar:</label>
                <select name="form" value={accountId} onChange={e => setAccountId(e.target.value)} required>
                    <option value="">Selecione</option>
                    {selectOptions}
                </select>
                <button>Prosseguir</button>
            </form>
            <p>{error}</p>
        </HomeContainer>
    )
}