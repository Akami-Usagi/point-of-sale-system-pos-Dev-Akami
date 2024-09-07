import React from "react";
import styled from "styled-components";
import { BiSolidCategory } from "react-icons/bi";
import { backgroundColor } from "../styles";

const CardDiv= styled.div`
    width: 135px;
    height: 180px;
    border-radius: 15px;
    background-color: ${backgroundColor};
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #626573;
    transition: 200ms ease-in-out;
    &:hover{
        outline: 5px solid gray;
    }
`
const Icon =styled(BiSolidCategory)`
    color: #626573;
    width: 55px;
    height: 55px;
    padding-bottom: 30px;
`
const Title = styled.h3`
    margin-top: 0;
    color: #B5B7C3;
`
const Description = styled.p`
    margin-top: -20px;
    font-size: 12px;
    
`

export default function CategoryCard({nombre, cantidad}){
    return(
        <CardDiv>
            <Icon/>
            <Title>{nombre}</Title>
            <Description>{`${cantidad} productos`}</Description>
        </CardDiv>
    )
}