import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React, {useState} from 'react'
import color from '../contains/color';
import uuid from 'react-native-uuid';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SwipeSlide = (props) => {
    const images1 = props.photos
    const [imgActive, setimgActive] = useState(0);

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }

    return (
        <View style={styles.wrap}>
            <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
            >
                {
                    images1&&images1.map((e, index) =>
                        <Image
                            key={uuid.v4()}
                            resizeMode='cover'
                            style={styles.wrap}
                            source={{ uri: e }}
                        />
                    )
                }

            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images1&&images1.map((index) =>
                        <Text
                            key={uuid.v4()}
                            style={imgActive == index ? styles.dotActive : styles.dot}
                        >
                            ●
                        </Text>
                    )
                }
            </View>
        </View >
    )
}

export default SwipeSlide

const styles = StyleSheet.create({
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25 + 40,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: color.primary,
        fontSize: 10,
    },
    dot: {
        margin: 3,
        color: 'white',
        fontSize: 10,
    },
})