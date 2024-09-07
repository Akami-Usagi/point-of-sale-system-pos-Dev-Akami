import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/categoriCard";
import ProductCard from "../components/productCard";
import Order from "../components/order";

const MainDiv = styled.div`
    position: absolute;
    top: 112px;
    left: 100px;
    width: 60%;
    display: flex;
    
`
const ContentDiv = styled.div`
    
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
`

export default function Dashboard(){


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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
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