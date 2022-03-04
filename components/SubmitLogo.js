import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SubmitLogo = (props) => {
    return (
        <TouchableOpacity onPress={props.eventButton}>
            <View style={styles.containerButton} backgroundColor={props.colorView}>
                <Image
                    style={styles.logo}
                    resizeMode='stretch'
                    source={{
                        uri: 'https://o.remove.bg/downloads/2dfaa18d-468c-4764-98aa-b5e7f4db5004/image-removebg-preview.png',
                    }}
                />
                <Text style={[styles.nameStyle, { color: props.colorName }]}>{props.nameButton}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubmitLogo

const styles = StyleSheet.create({
    containerButton: {
        marginHorizontal: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 340,
        height: 50,
        borderRadius: 50,
        flexDirection: 'row',
    },
    logo: {
        width: 35,
        height: 25,
        marginLeft: 20
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Roboto',
        marginHorizontal: 30
    }
})