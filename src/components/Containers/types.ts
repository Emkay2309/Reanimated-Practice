import { ReactNode } from "react";
import { StyleProp, ViewProps } from "react-native";


export interface MainContainerProps {
    children : ReactNode,
    style ?: StyleProp<ViewProps>
}