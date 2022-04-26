import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModal';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function EditProfileScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            value: "",
        },
        {
            placeholder: "Reg No",
            value: "",
        },
        {
            placeholder: "Contact",
            value: "",
        },
        {
            placeholder: "Route",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleUpdate = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "") {
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

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }} >
                <MaterialCommunityIcons name="account-circle-outline" style={{ fontSize: RFPercentage(6.5) }} color={Colors.black} />
                <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(1), backgroundColor: Colors.primary, width: RFPercentage(18), height: RFPercentage(4.5), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }} >
                        Edit Profile
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

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

                    {/* Update Button */}
                    <View style={{ marginTop: RFPercentage(12), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <MyAppButton
                            title="UPDATE"
                            padding={RFPercentage(1.6)}
                            onPress={() => handleUpdate()}
                            backgroundColor={Colors.black}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.5)}
                            width={"33%"}
                        />
                    </View>

                </View>
            </ScrollView>

            {/* Bottom Image */}
            <Image style={{ position: 'absolute', bottom: 0, right: 0, width: RFPercentage(35), height: RFPercentage(15) }} source={require('../../assets/images/bottom.png')} />
        </Screen>
    );
}

export default EditProfileScreen;