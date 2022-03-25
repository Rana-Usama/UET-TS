import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModal';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Student ID",
            value: "",
        },
        {
            placeholder: "Password",
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />
            {/* logo */}
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

            {/* Input field */}
            <View style={{ marginTop: RFPercentage(8), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(1.5) }} >
                        <InputField
                            placeholder={item.placeholder}
                            placeholderColor={Colors.darkGrey}
                            backgroundColor={Colors.white}
                            borderWidth={RFPercentage(0.2)}
                            borderColor={Colors.grey}
                            secure={item.secure}
                            borderRadius={RFPercentage(1)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"86%"}
                        />
                    </View>
                ))}
            </View>

            {/* Login Button */}
            <View style={{ marginTop: RFPercentage(15), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="LOGIN"
                    padding={RFPercentage(1.6)}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.black}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1.5)}
                    width={"33%"}
                />
            </View>

            {/* T&C */}
            <View style={{ width: '70%', position: 'absolute', bottom: RFPercentage(3), justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ textAlign: 'center', color: Colors.darkGrey, fontSize: RFPercentage(2) }} >
                    By logging in you agree to the terms and
                    policies of this service
                </Text>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: RFPercentage(20),
        height: RFPercentage(20),
        marginTop: RFPercentage(5)
    }
})

export default LoginScreen;