import { TransitionSpecs } from "@react-navigation/stack";
import { Easing } from "react-native-reanimated";

export const config = {
  animation: "spring",
  config: {
    stiffness: 1500,
    damping: 300,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

export const customTransition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              })
              : 1,
          },
        ],
      },
    };
  },
};
