import { Header } from "./components/common/header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Container } from "@mui/material";

const App = () => {
    return(
    <>
    <Header/>
        <Container maxWidth="md">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </Container>
    </>
    )
}
export default App;