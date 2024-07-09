import { styled } from "styled-components/native";
import React, { FunctionComponent } from 'react'
import { colors } from "../../utils/colors";
import { MainContainerProps } from "./types";


const {primary} = colors;

const StyledView = styled.View`
    flex : 1;
    padding : 25px;
    padding-top : 40px;
    background-color : ${primary};
`

const MainContainer : FunctionComponent<MainContainerProps> = (props) => {
    return (
        <StyledView style={props.style}>
            {props.children}
        </StyledView>
    )
}
export default MainContainer