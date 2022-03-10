import { StyleSheet, Text, View, Image, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import color from '../../contains/color';
import SignInScreen from '../Authentication/SignInScreen';

const SplashScreen = ({ navigation }) => {

  const edges = useSafeAreaInsets();

  const startAnimation = useRef(new Animated.Value(0)).current;

  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTittle = useRef(new Animated.Value(1)).current;

  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTittle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          startAnimation,
          {
            toValue: -Dimensions.get('window').height + (edges.top + 65),
            useNativeDriver: true
          }
        ),
        Animated.timing(
          scaleLogo,
          {
            toValue: 0.45,
            useNativeDriver: true
          }
        ),
        // Animated.timing(
        //   scaleTittle,
        //   {
        //     toValue: 0.8,
        //     useNativeDriver: true
        //   }
        // ),
        Animated.timing(
          moveLogo,
          {
            toValue: {
              x: (Dimensions.get("window").width / 2) - 35,
              y: (Dimensions.get("window").height / 2) - 18,
            },
            useNativeDriver: true
          }
        ),
        Animated.timing(
          moveTittle,
          {
            toValue: {
              x: 0,
              y: (Dimensions.get('window').height / 2) - 86,
            },
            useNativeDriver: true
          }
        )
      ])
        .start();
      navigation.navigate('SignIn');
    }, 1000);
  }, [])

  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <Animated.View style={[styles.container, { zIndex: 1 }, { flex: 1 }, {
        transform: [
          { translateY: startAnimation }
        ]
      }]}
      >
        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Animated.Image
            source={require('../../contains//assetImages//logoIcon_foodtalk.png')}
            style={[styles.logoIcon, {
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo }
              ]
            }]}
            resizeMode='stretch'
          />
          <Animated.Text style={[styles.nameApp, {
            transform: [
              { translateY: moveTittle.y },
              { scale: scaleTittle }
            ]
          }]}>Food Talk</Animated.Text>
        </Animated.View>
      </Animated.View>

      <Animated.View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: color.post,
        zIndex: 0
      }}>

      </Animated.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: color.background,
  },
  logoIcon: {
    height: 71 * 1.5,
    width: 98 * 1.5,
  },
  nameApp: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold',
    color: color.textGray,
  }
})