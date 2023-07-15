import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { UserContainer } from "./style"
import {BsSearch} from "react-icons/bs"

export function UserInformation () {
    useProtectedPage()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <main>
            <Header/>
            <UserContainer>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Data de início</label>
                        <input type="date"/>
                    </div>

                    <div>
                        <label>Data de fim</label>
                        <input type="date"/>
                    </div>

                    <div>
                        <label>Nome do operador transacionado</label>
                        <input type="text"/>
                    </div>

                    <button>
                        <span>Pesquisar</span>
                        <BsSearch/>
                    </button>
                </form>
            </UserContainer>
        </main>
    )
}