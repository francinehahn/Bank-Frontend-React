import { useProtectedPage } from "../../hooks/useProtectedPage"

export function UserInformation () {
    useProtectedPage()

    return (
        <div>
            Olá, eu sou a página de info do usuario!
        </div>
    )
}