import React from "react";
import styled from "styled-components";
import HeaderMenu from "./headerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    width: 100%;
    height: fit-content;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`
const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: fixed;
    @media (max-width: 1270px){
        justify-content: center;
    }
    @media (max-width: 600px){
        justify-content: space-between;
    }
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    
   
    @media (max-width: 1000px){
        display: none;
    }
    
`
const NavButton = styled.button`
    width: 150px;
    height: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    transition: ease-in-out 200ms;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    &:hover{
        background-color: red;
        font-weight: 600;
        width: 170px;
        color: white;
    }
`
const MenuImage = styled.img`
        width: 50px;
        display: none;
        transition: ease-in-out 200ms;
        @media (max-width: 1000px){
            display: block;
            position: absolute;
            right: 30px;
            top: 30px;
        }
    `
export default function Header(){

    
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <StyledHeader>
            <HeaderDiv>
                
                <nav>
                    <NavList>
                        <li><Link to={"/"}><NavButton>Login</NavButton></Link></li>
                        <li><Link to={"/register"}><NavButton>Registrarse</NavButton></Link></li>
                        <li><Link to={"/recovery"}><NavButton>Recuperar Contraseña</NavButton></Link></li>
                        <li><Link to={"/inscripciones"}><NavButton>Inscribete</NavButton></Link></li>
                        <li><Link to={"/centros-transformacion-digital"}><NavButton>CTD</NavButton></Link></li>
                        <li><Link to={"/talento-humano"}><NavButton>Talento Humano</NavButton></Link></li>
                    </NavList>
                </nav>
            </HeaderDiv>
            {menuOpen ? <MenuImage src="/images/menu_open.svg" onClick={()=> setMenuOpen(!menuOpen)}/> : <MenuImage src="/images/menu_closed.svg" onClick={()=> setMenuOpen(!menuOpen)}/>}
            {menuOpen && <HeaderMenu setMenuOpen={setMenuOpen}/>}
        </StyledHeader>
    )
}
