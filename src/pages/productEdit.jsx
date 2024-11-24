import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../api";

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
    margin-top: 30px;
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
    resize: none;
    
    
`
const Select = styled.select`
    height: 60px;
    border: none;
    background-color: ${backgroundColor};
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    font-size: large;
    font-family: sans-serif;
    color: #525252;
    resize: none;
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



export default function ProductEdit(){

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [category_id, setCategory_id] = useState(0);


    useEffect(() => {
        // get product
        api.get(`/products/${id}`)
        .then((response) => {
            setProduct(response.data);
            setName(response.data.name);
            setDescription(response.data.description);
            setStock(response.data.stock);
            setPrice(response.data.price);
            setCategory_id(response.data.category_id);
            setImage(response.data.image_path)
        })
        .catch((error) => {
            console.error('Error fetching Products:', error);
        });
    }, [id]);

    let imagePath = "";

    if (product.image_path === null){
        imagePath = "/images/placeholder_item.webp"
    }else{
        imagePath = `http://akemihouse-backend.test/${product.image_path}`
    }

    
    
    

    const formData = {
        name,
        description,
        stock,
        price,
        category_id,
        image_path: image
    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get('/categories')
        .then((response) => {
            setCategories(response.data);
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
    }, []);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await api.patch(`/products/${product.id}`, formData);
            alert('Datos actualizados con éxito: ' + response.data.message);
            navigate("/products")
        } catch (error) {
            console.error('Error al actualizar los datos', error.response?.data);
            alert('Ocurrió un error al actualizar los datos. ' + error.response?.data.message);
        }
    };


    
    
    console.log(formData);
    

    return(
        <ProfilePage>
            
            <FormDiv>
                <ProfilePicDiv>
                    <ProfilePic src={imagePath} alt="Profile Pic" />
                </ProfilePicDiv>
                
                

                <Label htmlFor="name">Nombre</Label>
                <Text type="text" value={name} onChange={(event)=>{
                    setName(event.target.value)
                }}/>
                <Label htmlFor="description">Descripcion</Label>
                <Text type="text" value={description} onChange={(event)=>{
                    setDescription(event.target.value)
                }}/>
                <Label htmlFor="price">Precio</Label>
                <Text type="number" value={price} onChange={(event)=>{
                    setPrice(event.target.value)
                }}/>
                <Label htmlFor="stock">Stock Inicial</Label>
                <Text type="number" value={stock} onChange={(event)=>{
                    setStock(event.target.value)
                }}/>
                <Label htmlFor="category">Categoría</Label>
                <Select name="category_id"
                        value={category_id}
                        onChange={(event)=>{
                            setCategory_id(event.target.value)
                        }}
                        required>
                    <option value={undefined}>Seleccione</option>
                {categories.map((category) => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </Select>
                
                <Button onClick={handleSubmit}>Guardar Producto</Button>
                <Button onClick={handleSubmit}>Eliminar Producto</Button>
            </FormDiv>
        </ProfilePage>
    )
}