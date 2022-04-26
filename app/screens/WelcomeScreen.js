import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function WelcomeScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Top Bottom Side Images */}
            <Image style={styles.TLImage} source={require('../../assets/images/tl.png')} />
            <Image style={styles.BRImage} source={require('../../assets/images/br.png')} />

            <Text style={{ color: Colors.black, fontSize: RFPercentage(3.9), marginTop: RFPercentage(10), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }}>
                Welcome
            </Text>

            {/* Lgoo */}
            <Image style={{ marginTop: RFPercentage(4), width: RFPercentage(20), height: RFPercentage(20) }} source={require('../../assets/images/logo.png')} />

            <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(2.2), marginTop: RFPercentage(4) }} >
                Please select your login type
            </Text>

            {/* Buttons */}

            <View style={{ marginTop: RFPercentage(5), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Student"
                    padding={RFPercentage(1.6)}
                    onPress={() => props.navigation.navigate("StudentIDScreen")}
                    backgroundColor={Colors.blue}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"50%"}
                />
                <View style={{ marginTop: RFPercentage(2) }} />
                <MyAppButton
                    title="Driver"
                    padding={RFPercentage(1.6)}
                    onPress={() => props.navigation.navigate("DriverIDScreen")}
                    backgroundColor={Colors.blue}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"50%"}
                />
                <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(2.2), marginTop: RFPercentage(4) }} >
                    OR
                </Text>
                <View style={{ marginTop: RFPercentage(4) }} />
                <MyAppButton
                    title="SIGN UP"
                    padding={RFPercentage(1.6)}
                    onPress={() => props.navigation.navigate("LoginScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1.5)}
                    width={"33%"}
                />
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    TLImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: RFPercentage(38),
        height: RFPercentage(15.8)
    },
    BRImage: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: RFPercentage(38),
        height: RFPercentage(15.8)
    }
})

export default WelcomeScreen;