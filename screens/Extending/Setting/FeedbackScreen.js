import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { CheckBox } from 'react-native-elements'
import SubmitNoLogo from '../../../components/SubmitNoLogo'

const FeedbackScreen = ({ navigation }) => {

    const [checked1, setchecked1] = useState(false);
    const [checked2, setchecked2] = useState(false);
    const [checked3, setchecked3] = useState(false);
    const [checked4, setchecked4] = useState(false);

    const handleChangePassword = () => {
        alert('Send Feedback Successfully')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                </TouchableOpacity>
                <Text style={styles.topText}>Feedback</Text>
            </View>
            <ScrollView>
                <View style={styles.bodyView}>
                    <View>
                        <Text style={styles.introText}>Hi, Glad you have experienced the application.
                            Your feedback will be very valuable.
                            We would greatly appreciate it if you could give us sincere reviews about our application. {'\n'}
                            Firstly, Can you give us know your problem
                        </Text>
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                checked={checked1}
                                onPress={() => setchecked1(!checked1)}
                            />
                            <Text style={styles.textCheckBox}>Experience</Text>
                        </View>
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                checked={checked2}
                                onPress={() => setchecked2(!checked2)}
                            />
                            <Text style={styles.textCheckBox}>Function</Text>
                        </View>
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                checked={checked3}
                                onPress={() => setchecked3(!checked3)}
                            />
                            <Text style={styles.textCheckBox}>Interactive</Text>
                        </View>
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                checked={checked4}
                                onPress={() => setchecked4(!checked4)}
                            />
                            <TextInput
                                placeholder='Others...'
                                maxLength={25}
                                style={styles.inputInfo}
                            />
                        </View>
                    </View>

                    <View style={styles.infoOptionView}>
                        <Text style={styles.inforOptions}>Tittle</Text>
                        <TextInput
                            placeholder='Type the tittle of feedback'
                            maxLength={25}
                            style={styles.inputInfo}
                        />
                    </View>
                    <View style={styles.infoOptionView}>
                        <Text style={styles.inforOptions}>Description</Text>
                        <TextInput
                            placeholder='Write detail description'
                            maxLength={500}
                            multiline={true}
                            style={styles.inputContent}
                        />
                    </View>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <SubmitNoLogo
                        nameButton='Send Feedback'
                        colorView={color.primary}
                        colorName={color.background}
                        eventButton={handleChangePassword}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default FeedbackScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 35,
        paddingBottom: 10,
    },
    topView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 7,
        paddingHorizontal: 15
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
    bodyView: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    introText: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 15,
        color: color.textGray,
    },
    infoOptionView: {
        marginBottom: 10
    },
    inforOptions: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputInfo: {
        borderBottomWidth: 0.2,
        paddingVertical: 5,
        fontSize: 16,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    },
    inputContent: {
        marginTop: 5,
        paddingVertical: 10,
        fontSize: 16,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        backgroundColor: color.inputColor,
        borderRadius: 10,
        height: 250
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCheckBox: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 15
    }
})