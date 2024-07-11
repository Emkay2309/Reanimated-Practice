import { StyleSheet } from "react-native"

export const colors = {
    primary : '#ECFDF5',
    secondary : '#A7F3D0',
    black : '#0F172A',
    gray : '#64748B',
    accent : '#047857'
}

export const fontSize = {
    h1 : 40,

}

export const fontType = {
    regular : 'Inter-Regular',
    bold : 'Inter-Bold',
    medium : 'Inter-Medium',
    light : 'Inter-Light',
    semibold : 'Inter-SemiBold',

}
export const style = StyleSheet.create({
    headingH1 : {
        fontSize : fontSize.h1,
        fontWeight : '400',
        lineHeight : 18,
        letterSpacing : 0.3,
        color : colors.primary
    }
})