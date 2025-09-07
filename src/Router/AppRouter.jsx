import { BrowserRouter, Routes, Route } from "react-router";
import CurrencyConverter from "../Projects/CurrencyConverter";
import BackgroundChanger from "../Projects/BackgroundChanger";
import PasswordGenerator from "../Projects/PasswordGenerator";
import AppLayout from "../Layouts/AppLayout";
import Home from "../Pages/Home";
import ScrollToTop from "../Components/Utility/ScrollToTop";
import Projects from "../Pages/Projects";
import TodoList from "../Projects/Todos";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="" element={<AppLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/currency-converter" element={<CurrencyConverter/>}/>
                    <Route path="/password-generator" element={<PasswordGenerator/>}/>
                    <Route path="/bg-changer" element={<BackgroundChanger/>}/>
                    <Route path="/todos" element={<TodoList/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;