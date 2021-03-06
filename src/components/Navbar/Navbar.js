import React, {useState, useEffect} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavItemBtn} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={closeMobileMenu}>
                    <NavIcon />
                    COMPANY
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onCLick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/' onClick={closeMobileMenu}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services' onClick={closeMobileMenu}>Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/products' onClick={closeMobileMenu}>Produtos</NavLinks>
                    </NavItem>
                    <NavItemBtn onClick={closeMobileMenu}>
                        {button ? (
                            <NavBtnLink to='/sing-up'>
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/sign-up">
                                <Button fontBig primary>
                                    Conectar-se
                                </Button>
                            </NavBtnLink>
                        )}   
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>   
        </IconContext.Provider>   
        </>
    );
};

export default Navbar;

