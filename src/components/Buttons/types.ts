import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
import { StyleProp, TextStyle, ViewStyle } from "react-native";


export interface ButtonProps {
    children : ReactNode;
    style ?: StyleProp<ViewStyle>;
    textStyle ?: StyleProp<TextStyle>;
    onPress : (event : GestureResponderEvent) => void | undefined;
}