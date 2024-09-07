import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/categoriCard";
import ProductCard from "../components/productCard";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const MainDiv = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 150px;
    
`
const ContentDiv = styled.div`
    width: 80%;
`
const CategoryDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
    left: 30px;
`
const ProductDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`
const Plus = styled(FaPlusCircle)`
    width: 80px;
    height: 80px;
    color: gray;
    background-color: white;
    border-radius: 100%;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    transition: 300ms ease;
    &:hover{
        
        color: red;
    }
`
const ProductLink = styled(Link)`
    text-decoration: none;
`

export default function Products(){


    const categorias = [
        {
            nombre: "Peluches",
            cantidad: 10
        },
        {
            nombre: "Decoraciones",
            cantidad: 7
        },
        {
            nombre: "Arreglos",
            cantidad: 18
        },
        {
            nombre: "Promociones",
            cantidad: 9
        },
        {
            nombre: "Importados",
            cantidad: 21
        },
    ]

   

    return(
        <MainDiv>
            <ContentDiv>
                <CategoryDiv>  
                    {categorias.map((categoria) => {
                        return(
                            <CategoryCard nombre={categoria.nombre} cantidad={categoria.cantidad}/>
                        )
                    })}
                </CategoryDiv>
                <ProductDiv>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    <ProductLink to={"/products/details"}><ProductCard/></ProductLink>
                    
                    
                    
                </ProductDiv>
            </ContentDiv>
            <ProductLink to={"/products/new-product"}><Plus title="Agregar Producto"/></ProductLink>
            
        </MainDiv>
        
        
    );
};