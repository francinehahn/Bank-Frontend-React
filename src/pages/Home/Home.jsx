import { useState } from "react";
import { HomeContainer } from "./style";
import { useNavigate } from "react-router-dom";

export function Home () {
    const [accountId, setAccountId] = useState("")
    const navigate = useNavigate()
    //Fazer requisição para o backend para o endpoint de getUsers

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("accountId", accountId)
        navigate("/user")
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form">Escolha o id da conta que deseja acessar:</label>
                <select name="form" value={accountId} onChange={e => setAccountId(e.target.value)} required>
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <button>Prosseguir</button>
            </form>
        </HomeContainer>
    )
}