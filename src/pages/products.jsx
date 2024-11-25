import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/categoriCard";
import ProductCard from "../components/productCard";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import api from "../api";


const MainDiv = styled.div`
    max-width: 100%;
    display: flex;
    display: flex;
    margin: 50px 40px;
    column-gap: 10px;
    
`
const ContentDiv = styled.div`
    width: 80%;
    margin-left: 30px;
`
const CategoryDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        api.get('/categories')
        .then((response) => {
            setCategories(response.data);
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
        api.get('/products')
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    }, []);


    

   

    return(
        <MainDiv>
            <Sidebar/>
            <ContentDiv>
                <CategoryDiv>  
                    {categories.map((category) => {
                        return(
                            <CategoryCard key={category.id} nombre={category.name}/>
                        )
                    })}
                </CategoryDiv>
                <ProductDiv>
                {products.map((product) => {
                        return(
                            
                            <ProductLink key={product.id} to={`/products/details/${product.id}`}><ProductCard key={product.id} data={product}/></ProductLink>
                        )
                    })}
                    
                    
                    
                </ProductDiv>
            </ContentDiv>
            <ProductLink to={"/products/new-product"}><Plus title="Agregar Producto"/></ProductLink>
            
        </MainDiv>
        
        
    );
};