import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");

function StudentIDScreen(props) {

    const [pickerModel, setPickerModel] = useState(false);

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
                <TouchableOpacity onPress={() => setPickerModel(true)} activeOpacity={0.8} style={{ position: 'absolute', right: RFPercentage(2) }} >
                    <Entypo name="dots-three-vertical" style={{ color: Colors.white, fontSize: RFPercentage(2.8) }} color={Colors.white} />
                </TouchableOpacity>
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


            {/* Model */}
            <Modal visible={pickerModel} transparent={true} >
                <View style={{ justifyContent: "center", flex: 1, height: height, width: "100%", backgroundColor: 'rgba(255,255,255,0.5)', marginBottom: RFPercentage(5) }} >
                    <View style={{ backgroundColor: Colors.primary, alignSelf: 'center', alignItems: "center", justifyContent: 'flex-start', borderRadius: RFPercentage(3), width: "80%", height: RFPercentage(45) }} >

                        <TouchableOpacity onPress={() => [props.navigation.navigate("EditProfileScreen"), setPickerModel(false)]} style={{ marginTop: RFPercentage(4), width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ position: 'absolute', left: 0 }} >
                                <MaterialCommunityIcons name="account-circle-outline" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                            </View>
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }} >
                                Profile
                            </Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: RFPercentage(5), width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ position: 'absolute', left: 0 }} >

                                <FontAwesome name="calendar" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                            </View>
                            <Text style={{ left: RFPercentage(2), color: Colors.white, fontSize: RFPercentage(2.5) }} >
                                Schedules
                            </Text>
                        </View>

                        <View style={{ marginTop: RFPercentage(5), width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ position: 'absolute', left: 0 }} >
                                <Feather name="phone-call" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                            </View>
                            <Text style={{ left: RFPercentage(2), color: Colors.white, fontSize: RFPercentage(2.5) }} >
                                Contact Us
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => [props.navigation.navigate("SettingsScreen"), setPickerModel(false)]} style={{ marginTop: RFPercentage(5), width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ position: 'absolute', left: 0 }} >
                                <Ionicons name="ios-settings-outline" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                            </View>
                            <Text style={{ left: RFPercentage(2), color: Colors.white, fontSize: RFPercentage(2.5) }} >
                                Settings
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPickerModel(false)} activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(6), backgroundColor: Colors.black, borderRadius: RFPercentage(1.6) }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </Screen>
    );
}

export default StudentIDScreen;