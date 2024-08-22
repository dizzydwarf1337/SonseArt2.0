import { Container } from '@mui/material'
import NavBar from './navBar'
import './styles.css'
import { Outlet } from 'react-router-dom'

export default function App() {

    return (
        <>
            <NavBar />
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}