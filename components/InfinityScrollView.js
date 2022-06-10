import React from 'react'
import { ScrollView } from 'react-native'

const InfinityScrollView = (props) => {
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return contentOffset.y == 0;
    }

    return (
        <ScrollView
            {...props}
            onScroll={({ nativeEvent }) => {
                if (!props.reverse && isCloseToBottom(nativeEvent)) {
                    props.useLoads()
                }

                if (props.reverse && isCloseToTop(nativeEvent)) {
                    props.useLoadReverse()
                }

            }}
            scrollEventThrottle={1000}
        >
            {props.children}
        </ScrollView>
    )
}

export default InfinityScrollView