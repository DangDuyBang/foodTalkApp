import React from 'react'
import { ScrollView } from 'react-native'

const InfinityScrollView = (props) => {
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <ScrollView
            {...props}
            onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                    props.useLoads()
                }
            }}
            scrollEventThrottle={1000}
        >
            {props.children}
        </ScrollView>
    )
}

export default InfinityScrollView