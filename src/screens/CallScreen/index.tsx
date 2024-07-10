import { GestureResponderEvent, StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import SmallText from "../../components/Text/SmallText"
import RegularText from "../../components/Text/RegularText"
import LargeText from "../../components/Text/LargeText"
import StyledTextInput from "../../components/Inputs/StyledTextInput"
import { useState } from "react"
import StyledButton from "../../components/Buttons/StyledButton"
import { createGlobalStyle } from "styled-components"


const PhoneScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <View style={styles.container}>
            <View style={[styles.dot, styles.center]}>
                <Feather name="phone-call" size={42} color={'#FFF'} />
            </View>
            <View>
                {/* <SmallText>Hello</SmallText>
                <RegularText>Hello</RegularText>
                <LargeText>Hello</LargeText> */}
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <StyledTextInput
                    icon="email"
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="joe123@gmail.com"
                    keyboardType="email-address"
                    style={{ marginBottom: 20 }}
                />

                <StyledTextInput
                    icon="lock-open"
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholder=""
                    keyboardType="default"
                    isPassword={true}
                    style={{ marginBottom: 20 }}
                />

                <StyledButton
                    onPress={() => console.log('submit')}
                >
                    <Text>submit</Text>
                </StyledButton>
            </View>
        </View>
    )
}
export default PhoneScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: '#6E01EF',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})