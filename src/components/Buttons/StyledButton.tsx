import React from "react";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import { colors } from "../../utils/colors";
import { ButtonProps } from "./types";

const color = colors;

const ButtonView = styled.TouchableOpacity`
    //background-color ?: ${color.accent};
    width: 100%;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const StyledButton: React.FunctionComponent<ButtonProps> = (props) => {
    const { onPress, style, textStyle, children } = props;

    return (
        <ButtonView 
            style={style}
            onPress={onPress}>
            <RegularText style={[{ color: color.primary }, textStyle]}>{children}</RegularText>
        </ButtonView>
    );
};

export default StyledButton;

// import React, { FunctionComponent } from "react";
// import styled from "styled-components/native";
// import RegularText from "../Text/RegularText";
// import { colors } from "../../utils/colors";
// import { ButtonProps } from "./types";

// const color = colors;

// const ButtonView = styled.TouchableOpacity`
//     background-color : ${color.accent};
//     width : 80%;
//     height : 60px;
//     padding : 15px;
//     border-radius : 10px;
//     justify-content : 'center';
//     align-item : 'center;
// `

// const StyledButton: FunctionComponent<ButtonProps> = (props) => {

//     return (
//         <ButtonView
//             style={props.style}
//             onPress={props.onPress}>
//             <RegularText style={[{ color : color.primary }, props.textStyle]}>{props.children}</RegularText>
//         </ButtonView>
//     )
// }

// export default StyledButton



