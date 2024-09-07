import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";

const LoginPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${backgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormDiv = styled.div`
    width: 500px;
    height: fit-content;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;
`
const Label = styled.label`
    color: gray;
    font-size: x-large;
    margin-bottom: 10px;
    position: relative;
    left: 10px;
`
const Input = styled.input`
    height: 40px;
    border: none;
    background-color: ${backgroundColor};
    border-radius: 15px;
    padding: 10px;
    font-size: large;
    margin-bottom: 30px;
    outline: none;
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
    &:hover{
        background-color: white;
        color: gray;
        cursor: pointer;
    }
`
const Logo = styled.img`
    width: 450px;
    margin-bottom: 30px;
`
const Title = styled.h1`
    color: gray;
`

export default function Login(){
    return(
        <LoginPage>
            <Logo src="/images/main_logo.svg" alt="Logo" />
            <Title>INICIAR SESION</Title>
            <FormDiv>
                <Label htmlFor="username">Usuario</Label>
                <Input type="text" placeholder="Ingrese su Usuario"/>
                <Label htmlFor="username">Contraseña</Label>
                <Input type="text" placeholder="Ingrese su Contraseña"/>
                <Button>Iniciar Sesion</Button>
            </FormDiv>
        </LoginPage>
    )
}