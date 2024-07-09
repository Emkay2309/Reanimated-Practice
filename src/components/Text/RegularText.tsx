import {styled} from 'styled-components/native'
import React,{FunctionComponent} from 'react';
import {TextProps} from './types'
import { colors } from '../../utils/colors';

const {black} = colors

const StyledText = styled.Text`
    font-size : 30px;
    color : ${black};
    text-align : left;
`

const RegularText : FunctionComponent<TextProps> = (props) => {
    return (
        <StyledText style={props.style}>
            {props.children}
        </StyledText>
    )
}
export default RegularText;
