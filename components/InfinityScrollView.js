import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";

const InfinityScrollView = (props) => {
  const ref = useRef();
  const [onScroll, setOnScroll] = useState(false);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return contentOffset.y == 0;
  };

  return (
    <ScrollView
      {...props}
      ref={ref}
      onContentSizeChange={() =>
        props.scrollEnd &&
        onScroll &&
        ref.current.scrollToEnd({ animated: true })
      }
      onScroll={({ nativeEvent }) => {
        setOnScroll(true);
        if (!props.reverse && isCloseToBottom(nativeEvent)) {
          props.useLoads();
        }

        if (props.reverse && isCloseToTop(nativeEvent)) {
          props.useLoadReverse();
          setOnScroll(false);
        }
      }}
      scrollEventThrottle={1000}
    >
      {props.children}
    </ScrollView>
  );
};

export default InfinityScrollView;
