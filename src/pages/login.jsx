import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";

const LoginPage = styled.div`
    width: 100%;  
    display: grid;
    place-items: center;
    margin-top: 50px;
    
`
const FormDiv = styled.form`
    width: 400px;
    height: fit-content;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 60px 30px 20px 30px;
    @media (max-width: 600px){
        width: 80%;
    }
`
const Label = styled.label`
    color: gray;
    font-size: large;
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
    &:hover{
        background-color: white;
        color: gray;
        cursor: pointer;
    }
`
const Logo = styled.img`
    width: 350px;
    margin-bottom: 10px;
    @media (max-width: 500px){
        width: 80%;
    }
`
const Title = styled.h1`
    font-size: x-large;
    text-align: center;
`
const ForgotText = styled.p`
    align-self: flex-end;
    margin-top: -20px;
    margin-bottom: 40px;
`
const RegisterText = styled.p`
    align-self: center;
`

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    function handleNavigate (){
        navigate("/dashboard")
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/login', { email, password });
          alert('Login successful:', response.data);
          navigate("/dashboard")
        } catch (error) {
          console.error('Login failed:', error.response.data.message);
        }
      };



    return(
        <LoginPage>
            <Logo src="/images/main_logo.svg" alt="Logo" />
            
            <FormDiv onSubmit={handleLogin}>
            <Title>INICIAR SESION</Title>
                <Label htmlFor="username">Usuario</Label>
                <Input type="text" id="username" placeholder="Ingrese su Usuario" onChange={(event) => setEmail(event.target.value)}/>
                <Label htmlFor="password">Contraseña</Label>
                <Input type="password" id="password" placeholder="Ingrese su Contraseña" onChange={(event) => setPassword(event.target.value)}/>
                <ForgotText>Olvido la contraseña? <Link to={"/recovery"}>Restablecer contraseña</Link></ForgotText>
                <Button type="submit">Iniciar Sesion</Button>
                <RegisterText>No tienes cuenta? <Link to={"/register"}>Registrate</Link></RegisterText>
            </FormDiv>
        </LoginPage>
    )
}