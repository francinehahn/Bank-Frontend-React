import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { UserInformation } from '../pages/UserInformation/UserInformation'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/user"} element={<UserInformation/>}/>
            </Routes>        
        </BrowserRouter>
    )
}