import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";


const LoginPage = styled.div`
    width: 100%;   
    display: flex;
    display: grid;
    place-items: center;
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
    margin-top: 100px;
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
    font-size: large;
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
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
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
    margin-top: 30px;
    &:hover{
        background-color: white;
        color: gray;
        cursor: pointer;
    }
`

const Title = styled.h1`
    font-size: x-large;
    text-align: center;
`


export default function PasswordRecovery(){
    return(
        <LoginPage>
            
            
            <FormDiv>
            <Title>Recuperar Contraseña</Title>
                <Label htmlFor="document">Documento</Label>
                <Input type="text" placeholder="Ingrese su numedo de documento"/>
                <Label htmlFor="email">Email</Label>
                <Input type="text" placeholder="Ingrese su Correo Electronico"/>
                <Button>Enviar Correo de Recuperacion</Button>
                
            </FormDiv>
        </LoginPage>
    )
}