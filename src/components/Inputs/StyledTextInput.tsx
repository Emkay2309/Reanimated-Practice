import styled from "styled-components/native"
import { colors } from "../../utils/utils"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FunctionComponent, useState } from "react"
import { InputsProps } from "./types"
import SmallText from "../Text/SmallText"
import { TouchableOpacity } from "react-native"

const color = colors;

const InputWrapper = styled.View`
    width : 100%;

`

const InputField = styled.TextInput`
    background-color : ${color.primary};
    height : 60px;
    border-width : 2px;
    border-radius : 10px;
    border-color : ${color.secondary};
    margin-vertical : 3px;
    margin-bottom : 10px;
    padding : 15px;
    padding-left : 65px;
    padding-right : 55px;
    width : 320px;
    font-size : 16px;
    color : ${color.gray}
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

const RightIcon = styled(TouchableOpacity)`
    position : absolute;
    top : 35px;
    right : 15px;
    z-index : 1;
    border-right-width : 2px;
    border-color : ${color.secondary};
    padding-right : 10px;
`


const StyledTextInput: FunctionComponent<InputsProps> = ({ icon, label , isPassword , ...props }) => {
    const [bg, setBg] = useState(color.primary);
    const [hidden, setHidden] = useState<boolean>(true);

    const handleFocus = () => {
        props?.onFocus;
        setBg(color.secondary);
    }

    const handleBlur = () => {
        props?.onBlur;
        setBg(color.primary);
    }

    const handleIcon = () => {
        setHidden(!hidden);
    }
    return (
        <InputWrapper>
            <LeftIcon>
                <MaterialCommunityIcons name={icon} size={30} color={color.accent} />
            </LeftIcon>
            <SmallText>{label}</SmallText>
            <InputField
                {...props}
                style={[{ backgroundColor: bg }, props.style]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                secureTextEntry={isPassword && hidden}
            />
            {
                isPassword && (
                    <RightIcon onPress={handleIcon}>
                        <MaterialCommunityIcons name={hidden ? 'eye-off' : 'eye'} size={30} color={color.accent} />
                    </RightIcon>
                )  
            }
        </InputWrapper>
    )
}

export default StyledTextInput;