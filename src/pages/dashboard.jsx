import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/categoriCard";
import ProductCard from "../components/productCard";
import Order from "../components/order";
import Sidebar from "../components/sidebar";
import { useState, useEffect } from "react";
import api from "../api";


const MainDiv = styled.div`
    margin: 50px 40px;
    width: 70%;
    column-gap: 10px;
    display: flex;
    
    
`
const ContentDiv = styled.div`
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
const OrderDiv = styled.div`
    width: 400px;
    height: 700px;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    position: fixed;
    right: 50px;
    bottom: 50px;
    border-radius: 15px;
    padding: 20px;
    color: #a1a1a1;
`
const PriceDiv = styled.div`
    background-color: #00A261;
    width: 100%;
    height: 150px;
    border-radius: 15px;
    margin-top: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const PriceContentDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: -10px;
    margin-top: -10px;
`
const PayDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: #006AE6;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 30px;
    cursor: pointer;
`

export default function Dashboard(){


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
                {categories.map((categoria) => {
                        return(
                            <CategoryCard key={categoria.id} nombre={categoria.name}/>
                        )
                    })}
                </CategoryDiv>
                <ProductDiv>
                {products.map((producto) => {
                        return(
                            
                            <ProductCard key={producto.id} data={producto}/>
                        )
                    })}
                </ProductDiv>
            </ContentDiv>
            <OrderDiv>
                <h1>Orden actual</h1>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <PriceDiv>
                    <PriceContentDiv>
                        <p>Subtotal</p>
                        <p>$125.000</p>
                    </PriceContentDiv>
                    <PriceContentDiv>
                        <p>Descuento</p>
                        <p>$25.000</p>
                    </PriceContentDiv>
                    <PriceContentDiv>
                        <h2>Total</h2>
                        <h2>$100.000</h2>
                    </PriceContentDiv>
                </PriceDiv>
                <PayDiv>
                    <h2>Pagar</h2>
                </PayDiv>
            </OrderDiv>
        </MainDiv>
        
        
    );
};