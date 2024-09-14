import React from "react";
import styled from "styled-components";
import { IoIosNotifications } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { backgroundColor } from "../styles";

const HeaderDiv = styled.div`
    max-width: 100%;
    height: 70px;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
`
const SidebarLogo = styled.img`
    width: 130px;
`
const NavContent = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    gap: 15px;
    
`
const ProfilePic = styled.img`
    width: 45px;
    align-self: center;
    border-radius: 100%;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`
const NavButton = styled.div`
    display: grid;
    place-items: center;
    color: gray;
    font-size: larger;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: ${backgroundColor};
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`

export default function AppHeader(){
    return(
        <HeaderDiv>
            <SidebarLogo src="/images/main_logo.svg" alt="Logo"/>
            <NavContent>
                <NavButton><IoIosNotifications /></NavButton>
                <NavButton><FaGear /></NavButton>
                <ProfilePic src="/images/profile_pic.jpg" alt="Profile Pic" />
            </NavContent>
        </HeaderDiv>
    )
}