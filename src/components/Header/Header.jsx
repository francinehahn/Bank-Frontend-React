import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./style";
import {FiLogOut} from "react-icons/fi";
import logo from "../../assets/Banco_Logo.png";

export function Header () {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("accountId")
        navigate("/")
    }

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo do banco supera"/>
            <button onClick={handleLogout}>
                <span>Sair</span>
                <FiLogOut/>
            </button>
        </HeaderContainer>
    )
}