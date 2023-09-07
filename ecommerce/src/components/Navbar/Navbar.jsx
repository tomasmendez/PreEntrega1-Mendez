import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

const Navbar = () => {

    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{displya: "flex", justifyContent: "space-around"}}>
            <Typography sx={{color: "black"}}>
                Ecommerce
            </Typography>
            <Button sx={{color: 'black'}}>
                Home
            </Button>  
            <Button sx={{color: 'black'}}>
                Categorias
            </Button> 
            <Button sx={{color: 'black'}}>
                Productos
            </Button>
            <CarWidget />

        </Toolbar>

    </AppBar>);
}

export default Navbar;