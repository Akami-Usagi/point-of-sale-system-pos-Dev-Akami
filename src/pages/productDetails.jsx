import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";


const ProfilePage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormDiv = styled.div`
    width: 400px;
    margin: 40px;
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
    height: 30px;
    border: none;
    background-color: ${backgroundColor};
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    font-size: large;
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
    margin-bottom: 10px;
    outline: none;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
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
    width: 300px;
    align-self: center;
    border-radius: 100%;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`



export default function ProductDetails({data}){

    let imagePath = "";

    if (data.image_path === null){
        imagePath = "/images/placeholder_item.webp"
    }else{
        imagePath = `http://akemihouse-backend.test/${data.image_path}`
    }


    function handleEdit(){
        alert("Not implemented yet")
    }

    return(
        <ProfilePage>
            <FormDiv>

                <ProfilePic src={imagePath} alt="Profile Pic" />

                <Label htmlFor="name">Nombre</Label>
                <Text type="text" value={data.name} disabled/>
                <Label htmlFor="category">Categoría</Label>
                <Text type="text" value={data.category_id} disabled/>
                <Label htmlFor="price">Precio</Label>
                <Text type="number" value={`$${data.price}`} disabled/>
                <Label htmlFor="description">descripcion</Label>
                <ItemDescription>{data.description}</ItemDescription>
                <Label htmlFor="stock">Cantidad en Stock</Label>
                <Text type="number" value={data.stock} disabled/>
                
                <Button onClick={handleEdit}>Editar Producto</Button>
            </FormDiv>
        </ProfilePage>
    )
}