import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Video } from 'expo-av';
import color from '../../assets/color/color';
import { Easing } from 'react-native-reanimated';
import { windowHeight, windowWidth } from '../../constants/Constants';

export default function VideoItem({ data, isActive }) {

    const { uri, caption, channelName, musicName, likes, comments, avatarUri } = data;

    const discAnimatedValue = useRef(new Animated.Value(0)).current;

    const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
    const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;

    const discAnimLoopRef = useRef();
    const musicAnimLoopRef = useRef();

    const triggerAnimation = useCallback(() => {
        discAnimLoopRef.current = Animated.loop(
            Animated.timing(discAnimatedValue, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false,
            }),
        )
        discAnimLoopRef.current.start();
        musicAnimLoopRef.current = Animated.loop(
            Animated.sequence([
                Animated.timing(musicNoteAnimatedValue1, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(musicNoteAnimatedValue2, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
            ])
        )
        musicAnimLoopRef.current.start();
    }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2])

    const discAnimation = {
        transform: [
            {
                rotate: discAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            },
        ],
    }

    const musicNoteAnimation1 = {
        transform: [
            {
                translateX: musicNoteAnimatedValue1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [8, -16],
                }),
            },
            {
                translateY: musicNoteAnimatedValue1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -32],
                }),
            },
            {
                rotate: musicNoteAnimatedValue1.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg'],
                }),
            },
        ],
        opacity: musicNoteAnimatedValue1.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [0, 1, 0],
        }),
    }

    const musicNoteAnimation2 = {
        transform: [
            {
                translateX: musicNoteAnimatedValue2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [8, -16],
                }),
            },
            {
                translateY: musicNoteAnimatedValue2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -32],
                }),
            },
            {
                rotate: musicNoteAnimatedValue2.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-45deg'],
                }),
            },
        ],
        opacity: musicNoteAnimatedValue2.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [0, 1, 0],
        }),
    }

    useEffect(() => {
        if (isActive) {
            triggerAnimation();
        } else {
            discAnimLoopRef.current?.stop();
            musicAnimLoopRef.current?.stop();
            discAnimatedValue.setValue(0);
            musicNoteAnimatedValue1.setValue(0);
            musicNoteAnimatedValue2.setValue(0);
        }
    }, [isActive, triggerAnimation, discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2])

    const bottomTabHeight = useBottomTabBarHeight() - 30;

    return (
        <View style={[styles.container, { height: windowHeight - bottomTabHeight }]}>
            <Video
                source={{ uri }}
                style={styles.video}
                resizeMode="cover"
                shouldPlay={isActive}
                isLooping
                isMuted={false}
            />

            <View style={styles.bottomView}>
                <View style={styles.bottomLeftView}>
                    <Text style={styles.channelName}>{channelName}</Text>
                    <Text style={styles.caption}>{caption}</Text>
                    <View style={styles.musicNameContainer}>
                        <Image
                            source={require('../../assets/ImageDefault/musicNote.png')}
                            style={styles.musicNameIcon}
                        />
                        <Text style={styles.musicName}>{musicName}</Text>
                    </View>
                </View>
                <View style={styles.bottomRightView}>
                    <Animated.Image
                        source={require('../../assets/ImageDefault/floatingMusicNote.png')}
                        style={[styles.floatingMusicNote, musicNoteAnimation1]}
                    />
                    <Animated.Image
                        source={require('../../assets/ImageDefault/floatingMusicNote.png')}
                        style={[styles.floatingMusicNote, musicNoteAnimation2]}
                    />
                    <Animated.Image
                        source={require('../../assets/ImageDefault/musicDisc.png')}
                        style={[styles.musicDisc, discAnimation]}
                    />
                </View>
            </View>

            <View style={styles.verticalBar}>
                <View style={[styles.verticalBarItem, styles.avatarContainer]}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: avatarUri }}
                    />
                </View>
                <View style={styles.verticalBarItem}>
                    <Image
                        source={require('../../assets/ImageDefault/whiteHeart.png')}
                        style={styles.verticalBarIcon}
                    />
                    <Text style={styles.verticalBarText}>{likes}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Image
                        source={require('../../assets/ImageDefault/replyIcon.png')}
                        style={styles.verticalBarIcon}
                    />
                    <Text style={styles.verticalBarText}>{comments}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Image
                        source={require('../../assets/ImageDefault/shareIcon.png')}
                        style={styles.verticalBarIcon}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: windowWidth
    },
    video: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    bottomView: {
        position: 'absolute',
        bottom: 60,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    bottomLeftView: {
        flex: 4,
    },
    bottomRightView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    channelName: {
        color: color.background,
        fontWeight: 'bold',
    },
    caption: {
        color: color.background,
        marginVertical: 8
    },
    musicNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    musicNameIcon: {
        color: color.background,
        width: 20,
        height: 20,
        marginRight: 8
    },
    musicName: {
        color: color.background
    },
    musicDisc: {
        width: 40,
        height: 40
    },
    verticalBar: {
        position: 'absolute',
        right: 8,
        bottom: 150,
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: 'center'
    },
    verticalBarIcon: {
        width: 30,
        height: 30
    },
    verticalBarText: {
        color: color.background,
        marginTop: 4
    },
    avatarContainer: {
        marginBottom: 48,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    floatingMusicNote: {
        position: 'absolute',
        right: 40,
        bottom: 16,
        width: 16,
        height: 16,
        tintColor: color.background
    },
})