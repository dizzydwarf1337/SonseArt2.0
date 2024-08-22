import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import './styles.css'
import { NavLink } from 'react-router-dom';
export default function NavBar() {

    

    return (
        <AppBar style={{ backgroundColor: '#2f4f4f' }}  >
            <Container>
                <Toolbar style={{ alignContent: "start" }} sx={{}}  >
                    <Box sx={{mr:2} }>
                    <Typography as={NavLink} to={"/"} className="NavText" variant="h6" component="div" >
                        SonseArt
                        </Typography>
                    </Box>
                    <Typography as={NavLink} to={"/products"} className="NavText" variant="h6" component="div" >
                        Products
                        </Typography>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );

}