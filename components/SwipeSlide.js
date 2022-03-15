import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React, {useState} from 'react'
import color from '../contains/color';

const images = [
    'https://www.cet.edu.vn/wp-content/uploads/2019/04/nhung-loi-ich-cua-fastfood.jpg',
    'https://i.pinimg.com/564x/9c/3e/83/9c3e834338f471c33d88ce82cac07791.jpg',
    'https://datxeviet.vn/uploads/7e75382ff7.jpg',
    'https://datxeviet.vn/uploads/eb2aecf4e0.jpg',
    'https://datxeviet.vn/uploads/4d9007aa91.jpg'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SwipeSlide = () => {
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
                    images.map((e, index) =>
                        <Image
                            key={e}
                            resizeMode='stretch'
                            style={styles.wrap}
                            source={{ uri: e }}
                        />
                    )
                }

            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images.map((e, index) =>
                        <Text
                            key={e}
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
        height: HEIGHT * 0.25 + 30,
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