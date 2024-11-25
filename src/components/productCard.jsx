import React from "react";
import styled from "styled-components";
import api from "../api";
import { useState, useEffect } from "react";


const CardDiv = styled.div`
    background-color: white;
    width: 200px;
    height: 280px;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #7a7b83;
    cursor: pointer;
    
`
const ProductDiv = styled.div`
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    transition: 300ms ease-in-out;
    &:hover{
        width: 150px;
        height: 150px;
    }
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

export default function ProductCard({data}){

    const [imagePath, setImagePath] = useState("/images/placeholder_item.webp")

    useEffect(() => {
        api.get(`images/${data.image_id}`)
        .then((response) => {
            setImagePath(`http://akemihouse-backend.test/storage/${response.data.image_path}`)
            
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
    }, [data.image_id]);

    return(
        <CardDiv>
            <ProductDiv>
                <ProductPic src={imagePath} alt="picture" />   
            </ProductDiv>
            <Title>{data.name}</Title>
            <Description>{data.description}</Description>
            <Price>{`$${data.price}`}</Price>
        </CardDiv>
    )
}