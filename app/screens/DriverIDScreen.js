import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function DriverIDScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Driver id button */}
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: Colors.black, width: '90%', height: RFPercentage(7), borderRadius: RFPercentage(2) }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: RFPercentage(1.5), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(1.4), backgroundColor: Colors.primary }} >
                    <MaterialCommunityIcons name="account-circle-outline" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                </View>
                <Text style={{ fontSize: RFPercentage(2.6), color: Colors.white }} >
                    Driver ID
                </Text>
            </TouchableOpacity>

            {/* MAP INTEGRATION */}
            <Text style={{ marginTop: RFPercentage(40), fontSize: RFPercentage(2.5) }} >
                Map Integration
            </Text>

            {/* SOS Button */}
            <View style={{ position: 'absolute', bottom: RFPercentage(3), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="SOS"
                    padding={RFPercentage(1.6)}
                    // onPress={() => HandleFunction()}
                    backgroundColor={Colors.red}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1.5)}
                    width={"85%"}
                />
            </View>

        </Screen>
    );
}

export default DriverIDScreen;