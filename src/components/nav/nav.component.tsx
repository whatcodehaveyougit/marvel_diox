import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './nav.styles.scss'

const Nav = () => {

    return (
        <div>
            <div>
                <Typography align="center" variant="h3"><Link to="/">Marvel Application!</Link></Typography>
            </div>
            <div className='navbar-links-container'>
                <Typography variant="h5"><Link to="/">Home</Link></Typography>
                <Typography variant="h5"><Link to="/about">About</Link></Typography>
                <Typography variant="h5"><Link to="/add-character">Add Character</Link></Typography>
            </div>
        </div>
    )
}

export default Nav;