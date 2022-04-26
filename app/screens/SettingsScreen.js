import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function SettingsScreen(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }} >
                <Ionicons name="ios-settings-outline" style={{ fontSize: RFPercentage(6.5) }} color={Colors.black} />
                <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(1), backgroundColor: Colors.primary, width: RFPercentage(18), height: RFPercentage(4.5), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }} >
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(10), width: '85%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                    Notifications
                </Text>
                <View style={{ position: 'absolute', right: 0 }} >
                    <Switch
                        trackColor={{ false: Colors.grey, true: Colors.primary }}
                        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                        ios_backgroundColor={Colors.grey}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(8), width: '85%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                    Pre-departure notification
                </Text>
                <View style={{ position: 'absolute', right: 0 }} >
                    <Switch
                        trackColor={{ false: Colors.grey, true: Colors.primary }}
                        thumbColor={isEnabled2 ? "#fff" : "#f4f3f4"}
                        ios_backgroundColor={Colors.grey}
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(8), width: '85%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                    Pre-departure notification
                </Text>
                <View style={{ position: 'absolute', right: 0 }} >
                    <Switch
                        trackColor={{ false: Colors.grey, true: Colors.primary }}
                        thumbColor={isEnabled3 ? "#fff" : "#f4f3f4"}
                        ios_backgroundColor={Colors.grey}
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                    />
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(8), width: '85%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                    Pre-notification time
                </Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(5), backgroundColor: Colors.primary, borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.4) }} >
                        10 min
                    </Text>
                </View>
            </View>

            {/* Bottom Image */}
            <Image style={{ position: 'absolute', bottom: 0, right: 0, width: RFPercentage(35), height: RFPercentage(15) }} source={require('../../assets/images/bottom.png')} />
        </Screen>
    );
}

export default SettingsScreen;