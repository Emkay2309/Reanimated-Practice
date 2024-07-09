import styled from "styled-components/native"
import { colors } from "../../utils/colors"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { FunctionComponent } from "react"
import { InputsProps } from "./types"

const color = colors;

const InputWrapper = styled.View`
    width : 100%;
`
const LeftIcon = styled.View`
    position : absolute;
    top : 35px;
    left : 15px;
    z-index : 1;
    border-right-width : 2px;
    border-color : ${color.secondary};
    padding-right : 10px;
`


const StyledTextInput : FunctionComponent<InputsProps>  = ({icon , ...props}) => {
    return (
        <InputWrapper>
            <LeftIcon>
                <AntDesign name={icon} size={30} color={color.accent} /> 
            </LeftIcon>
        </InputWrapper>
    )
}

export default StyledTextInput;