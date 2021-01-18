import { transform } from '@babel/core';
import React from 'react'
import { StyleSheet, View , Animated, Text, Dimensions, Image} from 'react-native';
import { Value } from 'react-native-reanimated';

import {
    PinchGestureHandler,
    ScrollView,
    State,
  } from "react-native-gesture-handler";
  import {
    onGestureEvent,
    pinchActive,
    pinchBegan,
    timing,
    transformOrigin,
    translate,
    vec,
  } from  "react-native-redash/lib/module/v1";

const CARD_WIDTH = 280;
const CARD_HEIGHT = 450;
const window = Dimensions.get('window');

const PigComponent = ({item, offset, index}) => {

    const position = Animated.subtract(index * CARD_WIDTH, offset);
    const isDisappearing = -CARD_WIDTH;
    const isLeft = 0;
    const isRight = (window.width - CARD_WIDTH);
    const isAppearing = CARD_WIDTH;


    const translateX = Animated.add(
        Animated.add(
             offset, offset.interpolate({
        inputRange: [0,  0.00001 +index * CARD_WIDTH],
        outputRange: [0, -index * CARD_WIDTH],
        extrapolateRight: 'clamp'
    })
    ), position.interpolate({
        inputRange: [0, isAppearing ],
        outputRange: [(((window.width - CARD_WIDTH) / 4) * -index) + (((window.width - CARD_WIDTH) / 2))  , 0],
    })
        
    )

    const scale = position.interpolate({
        inputRange: [isDisappearing, isLeft,isRight,isAppearing],
        outputRange: [0.5, 1,1,0.5],
        extrapolate: 'clamp'
    })

    const opacity = position.interpolate({
        inputRange: [isDisappearing, isLeft, isRight, isAppearing],
        outputRange: [0.5, 1,1,0.5],
    });

    const state = new Value(State.UNDETERMINED); 
    const scl = new Value(1);
    const focal = vec.create(0,0)
    const gestureHandler = onGestureEvent({state, scl, focalX: focal.x, focalY: focal.y});

    return (
        <Animated.View style={[styles.container, { opacity, transform: [{translateX}, {scale}]}]}>
            <Animated.View style={{height: '100%', alignSelf: 'center'}}>
                <PinchGestureHandler {...gestureHandler}>
                <Animated.Image style={[{width: 200, height: 200, borderRadius: 100, marginTop: CARD_HEIGHT / 8 }, {transform : [{scale: 1}] }]} source={require('../../res/images/pig_default.jpg')} />
                </PinchGestureHandler>
            </Animated.View>
           
        </Animated.View>
    )
}

export default PigComponent

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 50,
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#78DBE2',
        marginRight: 20
    }
})