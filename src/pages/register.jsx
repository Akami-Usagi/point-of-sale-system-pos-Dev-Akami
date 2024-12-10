import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const RegisterPage = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormDiv = styled.form`
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

    const navigate = useNavigate();

    const [name, setName] = useState("tets");
    const [document, setDocument] = useState("12345");
    const [phone, setPhone] = useState("12345");
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("testerpass");

    


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !document || !email || !phone || !password) {
            alert("Por favor completa todos los campos obligatorios.");
            return;
        }

        try {            
            // autentica el usuario
            const response = await api.post("/users", {name, document, phone, email, password});
            alert("Producto guardado correctamente, " + response.data.message);
            navigate("/");
        } catch (error) {
            console.error("Error al enviar los datos", error.response?.data);
            alert("Ocurrió un error al enviar los datos. " + error.response?.data.message);
        }
    };


    
   
    return(
        <RegisterPage>
            
            
            <FormDiv onSubmit={handleSubmit}>
            <Title>Completa el formulario de registro</Title>
                <Label htmlFor="name">Nombre</Label>
                <Input type="text" id="name" placeholder="Ingrese su Nombre" onChange={(event)=>{
                    setName(event.target.value);
                }}/>

                <Label htmlFor="document">Documento</Label>
                <Input type="text" id="document" placeholder="Ingrese su numero de documento" onChange={(event)=>{
                    setDocument(event.target.value);
                }}/>
                
                <Label htmlFor="phone">Telefono</Label>
                <Input type="text" id="phone" placeholder="Ingrese su Telefono" onChange={(event)=>{
                    setPhone(event.target.value);
                }}/>

                <Label htmlFor="email">Correo Electronico</Label>
                <Input type="text" id="email" placeholder="Ingrese su Email" onChange={(event)=>{
                    setEmail(event.target.value);
                }}/>
                
                <Label htmlFor="confirmEmail">Confirmar Correo Electronico</Label>
                <Input type="text" id="confirmEmail" placeholder="Confirme su Email"/>

                <Label htmlFor="password">Contraseña</Label>
                <Input type="password" id="password" placeholder="Ingrese su Contraseña" onChange={(event)=>{
                    setPassword(event.target.value);
                }}/>

                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input type="password" id="confirmPassword" placeholder="Confirme su Contraseña"/>

                <Button type="submit">Registrarse</Button>
            </FormDiv>
        </RegisterPage>
    )
}