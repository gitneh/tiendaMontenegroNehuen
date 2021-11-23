import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <div>
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Tienda de Egiptología</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "white"}}><MenuItem>Nefertari</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Horus</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Escarabajos</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </div>
    );
}

export default NavBar;