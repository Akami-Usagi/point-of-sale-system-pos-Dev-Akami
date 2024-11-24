import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";


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



export default function ProductDetails(){

    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        //get categories
        api.get(`/categories/${id}`)
        .then((response) => {
            setCategory(response.data);
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
        // get product
        api.get(`/products/${id}`)
        .then((response) => {
            setProduct(response.data);
        })
        .catch((error) => {
            console.error('Error fetching Products:', error);
        });
    }, [id]);


    const navigate = useNavigate()

    let imagePath = "";

    if(product.image_path === null){
        imagePath = "/images/placeholder_item.webp"
    }else{
        imagePath = `http://akemihouse-backend.test/${product.image_path}`
    }
        
    


    function handleEdit(){
        navigate(`/products/product-edit/${id}`)
    }

    

    return(
        <ProfilePage>
            <FormDiv>

                <ProfilePicDiv>
                    <ProfilePic src={imagePath} alt="Profile Pic" />
                </ProfilePicDiv>

                <Label htmlFor="name">Nombre</Label>
                <Text type="text" value={product.name} disabled/>
                <Label htmlFor="category">Categoría</Label>
                <Text type="text" value={category.name} disabled/>
                <Label htmlFor="price">Precio</Label>
                <Text type="number" value={`$${product.price}`} disabled/>
                <Label htmlFor="description">descripcion</Label>
                <ItemDescription>{product.description}</ItemDescription>
                <Label htmlFor="stock">Cantidad en Stock</Label>
                <Text type="number" value={product.stock} disabled/>
                
                <Button onClick={handleEdit}>Editar Producto</Button>
            </FormDiv>
        </ProfilePage>
    )
}