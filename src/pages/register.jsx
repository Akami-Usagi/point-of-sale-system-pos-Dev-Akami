import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";

const RegisterPage = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
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
const Input = styled.input`
    height: 40px;
    border: none;
    background-color: ${backgroundColor};
    border-radius: 15px;
    padding: 10px;
    font-size: large;
    margin-bottom: 10px;
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
    margin-top: 20px;
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

export default function Register(){
    return(
        <RegisterPage>
            
            
            <FormDiv>
            <Title>Completa el formulario de registro</Title>
                <Label htmlFor="name">Nombre</Label>
                <Input type="text" placeholder="Ingrese su Nombre"/>
                <Label htmlFor="documento">Documento</Label>
                <Input type="number" placeholder="Ingrese su numero de documento"/>
                
                <Label htmlFor="phone">Telefono</Label>
                <Input type="number" placeholder="Ingrese su Telefono"/>
                <Label htmlFor="email">Correo Electronico</Label>
                <Input type="email" placeholder="Ingrese su Email"/>
                
                <Label htmlFor="confirmEmail">Confirmar Correo Electronico</Label>
                <Input type="text" placeholder="Confirme su Email"/>
                <Label htmlFor="password">Contraseña</Label>
                <Input type="password" placeholder="Ingrese su Contraseña"/>
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input type="password" placeholder="Confirme su Contraseña"/>
                <Button>Registrarse</Button>
            </FormDiv>
        </RegisterPage>
    )
}