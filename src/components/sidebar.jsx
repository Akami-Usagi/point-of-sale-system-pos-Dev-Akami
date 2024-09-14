import React from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SidebarDiv = styled.div`
    min-width: 200px;
    height: 600px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const SidebarLogo = styled.img`
    width: 180px;
    margin-top: 15px;
`
const NavigationDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 15px;
    margin-top: 30px;
`
const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: x-large;
    font-weight: 600;
    color: gray;
    margin-bottom: -20px;
    transition: 300ms ease-in-out;
    cursor: pointer;
    &:hover{
        color: red;

    }
`
export default function Sidebar(){

    const navigate = useNavigate();
    function gotoLogin (){
        navigate("/")
    }
    function gotoDashboard (){
        navigate("/dashboard")
    }
    function gotoProducts (){
        navigate("/products")
    }

    return(
        <SidebarDiv>
            <SidebarLogo src="/images/main_logo.svg" alt="Logo" onClick={gotoLogin}/>
            <NavigationDiv>
                <LinkContainer onClick={gotoDashboard}>
                    <MdSpaceDashboard />
                    <p>Dashboard</p>
                </LinkContainer>
                <LinkContainer onClick={gotoDashboard}>
                    <MdOutlinePointOfSale />
                    <p>Ventas</p>
                </LinkContainer>
                <LinkContainer onClick={gotoProducts}>
                    <FaBoxesPacking />
                    <p>Productos</p>
                </LinkContainer>
                <LinkContainer>
                    <FaFileAlt />
                    <p>Facturas</p>
                </LinkContainer>
            </NavigationDiv>
            
        </SidebarDiv>
    )
}