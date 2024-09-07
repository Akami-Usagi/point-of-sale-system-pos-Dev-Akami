import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
`
const FormDiv = styled.div`
    width: 500px;
    margin-top: -100px;
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
const Text = styled.textarea`
    height: 40px;
    border: none;
    background-color: ${backgroundColor};
    border-radius: 15px;
    padding: 10px;
    font-size: large;
    margin-bottom: 10px;
    outline: none;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    font-size: x-large;
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
const ProfilePicDiv = styled.div`
    align-self: center;
    width: 300px;
    height: 300px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    margin-bottom: 30px;
`
const ProfilePic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const FileInput = styled.input`
    
    align-self: center;
    
`



export default function NewProduct(){
    const navigate = useNavigate()
    const [file, setFile] = useState("/images/add_product.webp")

    function handleClick(){
        alert("Producto Guardado.... en alguna parte")
        navigate("/products")
    }

    

    return(
        <ProfilePage>
            <FormDiv>
                <ProfilePicDiv>
                    <ProfilePic src={file} alt="Profile Pic" />
                </ProfilePicDiv>
                

                <FileInput type="file" accept="image/*" webkitdirectory onChange={(event) => {
                    setFile(URL.createObjectURL(event.target.files[0]))
                }}/>

                <Label htmlFor="name">Nombre</Label>
                <Text type="text" />
                <Label htmlFor="documento">Descripcion</Label>
                <Text type="text"/>
                <Label htmlFor="price">Precio</Label>
                <Text type="number"/>
                <Label htmlFor="email">Stock Inicial</Label>
                <Text type="number"/>
                
                <Button onClick={handleClick}>Guardar Producto</Button>
            </FormDiv>
        </ProfilePage>
    )
}