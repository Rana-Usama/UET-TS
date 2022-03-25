import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function StudentIDScreen(props) {

    const [cart, setCart] = useState(false)

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* student id button */}
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: Colors.primary, width: '90%', height: RFPercentage(7), borderRadius: RFPercentage(2) }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: RFPercentage(1.5), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(1.4), backgroundColor: Colors.black }} >
                    <MaterialCommunityIcons name="account-circle-outline" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                </View>
                <Text style={{ fontSize: RFPercentage(2.6), color: Colors.white }} >
                    Student ID
                </Text>
            </TouchableOpacity>

            {/* MAP INTEGRATION */}
            <Text style={{ marginTop: RFPercentage(30), fontSize: RFPercentage(2.5) }} >
                Map Integration
            </Text>

            {/* Bus details */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', bottom: 0, backgroundColor: Colors.grey, width: '100%', height: RFPercentage(35), borderTopLeftRadius: RFPercentage(3.8), borderTopRightRadius: RFPercentage(3.8) }} >

                <TouchableOpacity onPress={() => setCart(true)} activeOpacity={0.8} style={{ marginTop: RFPercentage(2), borderRadius: RFPercentage(2), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '85%', height: RFPercentage(7), alignSelf: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.6) }} >
                        Bus NO.
                    </Text>

                    {/* Dropdown Icon */}
                    {cart == true ?
                        <AntDesign name="caretup" onPress={() => setCart(false)} style={{ fontSize: RFPercentage(2.5), position: 'absolute', right: RFPercentage(3) }} color={Colors.white} />
                        :
                        <AntDesign name="caretdown" style={{ fontSize: RFPercentage(2.5), position: 'absolute', right: RFPercentage(3) }} color={Colors.white} />
                    }
                </TouchableOpacity>

                {/* details cart */}
                {cart == true ?
                    <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(2), borderRadius: RFPercentage(2), backgroundColor: '#7C8E94', justifyContent: 'center', alignItems: 'center', width: '85%', height: RFPercentage(20), alignSelf: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(2), backgroundColor: '#ECECEC', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '85%', height: RFPercentage(6.5), alignSelf: 'center' }} >
                            <Text style={{ marginLeft: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2.6) }} >
                                Route
                            </Text>
                            <Text style={{ position: 'absolute', right: RFPercentage(4), color: Colors.darkGrey, fontSize: RFPercentage(1.8) }} >
                                Route
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(1), borderRadius: RFPercentage(2), backgroundColor: '#ECECEC', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '85%', height: RFPercentage(6.5), alignSelf: 'center' }} >
                            <Text style={{ marginLeft: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2.6) }} >
                                ETA
                            </Text>
                            <Text style={{ position: 'absolute', right: RFPercentage(4), color: Colors.darkGrey, fontSize: RFPercentage(1.8) }} >
                                Time
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>

        </Screen>
    );
}

export default StudentIDScreen;