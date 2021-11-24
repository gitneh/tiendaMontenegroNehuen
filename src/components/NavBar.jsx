import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <div>
            <Wrapper>
                <Left>
                    <p to='/' style={{textDecoration: "none", color: "white"}}><Logo>Tienda de Egiptología</Logo></p>
                </Left>
                <Center>
                    <MenuItem>Nefertari</MenuItem>
                    <MenuItem>Horus</MenuItem>
                    <MenuItem>Escarabajos</MenuItem>                  
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