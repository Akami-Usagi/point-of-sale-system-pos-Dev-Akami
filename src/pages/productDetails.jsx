import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";

const ProfilePage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
const FormDiv = styled.div`
    width: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
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
const ItemDescription = styled.div`
    min-height: 40px;
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
const ProfilePic = styled.img`
    width: 300px;
    align-self: center;
    border-radius: 100%;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`



export default function ProductDetails(){

    const lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return(
        <ProfilePage>
            <FormDiv>

                <ProfilePic src="/images/placeholder_item.webp" alt="Profile Pic" />

                <Label htmlFor="name">Nombre</Label>
                <Text type="text" value={"Placeholder Item"} disabled/>
                <Label htmlFor="id">Codigo</Label>
                <Text type="number" value={"001"} disabled/>
                <Label htmlFor="price">Precio</Label>
                <Text type="number" value={"$5.000"} disabled/>
                <Label htmlFor="description">descripcion</Label>
                <ItemDescription>{lorenIpsum}</ItemDescription>
                <Label htmlFor="stock">Cantidad en Stock</Label>
                <Text type="number" value={35} disabled/>
                
                <Button>Editar Producto</Button>
            </FormDiv>
        </ProfilePage>
    )
}