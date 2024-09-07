import React from "react";
import styled from "styled-components";


const CardDiv = styled.div`
    background-color: white;
    width: 270px;
    height: 320px;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #7a7b83;
    
`
const ProductDiv = styled.div`
    width: 190px;
    height: 190px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
`
const ProductPic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h3`
    margin-bottom: -15px;
`
const Description = styled.p`
    margin-bottom: -15px;
    font-size: 14px;
    color: #626573;
`
const Price = styled.h2`
    color: #00A261;
    margin-bottom: -10px;
`

export default function ProductCard(){
    return(
        <CardDiv>
            <ProductDiv>
                <ProductPic src="images/placeholder_item.webp" alt="picture" />   
            </ProductDiv>
            <Title>Placeholder Item</Title>
            <Description>Item Description</Description>
            <Price>$5.000</Price>
        </CardDiv>
    )
}