import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";

const ProfilePage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormDiv = styled.div`
    width: 400px;
    height: fit-content;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    @media (max-width: 600px){
        width: 80%;
    }
`
const Label = styled.label`
    color: gray;
    font-size: x-large;
    margin-bottom: 10px;
    position: relative;
    left: 10px;
    font-size: medium;
`
const Text = styled.textarea`
    height: 25px;
    border: none;
    background-color: ${backgroundColor};
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    text-align: center;
    font-size: large;
    font-family: sans-serif;
    padding-top: 20px;
    color: #525252;
    
    
`
const Button = styled.button`
    width: 250px;
    height: 50px;
    border: none;
    background-color: red;
    border-radius: 15px;
    align-self: center;
    color: white;
    font-size: large;
    font-weight: 600;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    transition: 300ms ease-in-out;
    margin-top: 20px;
    &:hover{
        background-color: white;
        color: gray;
        cursor: pointer;
    }
`
const ProfilePic = styled.img`
    width: 200px;
    align-self: center;
    border-radius: 100%;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`



export default function Profile(){
    return(
        <ProfilePage>
            <FormDiv>

                <ProfilePic src="/images/profile_pic.jpg" alt="Profile Pic" />

                <Label htmlFor="name">Nombre</Label>
                <Text type="text" value={"Camilo Arango"} disabled/>
                <Label htmlFor="documento">Documento</Label>
                <Text type="number" value={"1115066671"} disabled/>
                <Label htmlFor="phone">Telefono</Label>
                <Text type="number" value={"3103565058"} disabled/>
                <Label htmlFor="email">Correo Electronico</Label>
                <Text type="email" value={"akami.3ds@gmail.com"} disabled/>
                
                <Button>Editar Informacion</Button>
            </FormDiv>
        </ProfilePage>
    )
}