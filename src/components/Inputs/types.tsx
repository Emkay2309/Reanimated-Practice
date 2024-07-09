import { ComponentProps, ReactNode } from "react";
import { TextInputProps } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

interface ExtraInputProps {
    label : ReactNode;
    icon : ComponentProps<typeof FontAwesome6>['name'];
}

export type InputsProps = ExtraInputProps & TextInputProps;