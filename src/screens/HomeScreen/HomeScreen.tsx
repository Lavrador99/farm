import React, { useEffect } from 'react';
import { FlatList, View, Animated, StyleSheet, Dimensions } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';
import PigComponent from '../../components/PigComponent/PigComponent';
import { initialDataBase } from '../../data/initialDatabase';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const window = Dimensions.get('window');


const HomeScreen = () => {

    const renderItem = ({item, index}) => {
      return  (<PigComponent item={item} offset={offset} index ={index}/>)
    } 

    const keyExtractor = (item, index) => index.toString(); 

    const offset = new Animated.Value(0);

    const onScroll = Animated.event([{nativeEvent: {contentOffset: {x:offset} }}], { useNativeDriver: true});

    return (        
        <Animated.View style={styles.container}>
                    
                <AnimatedFlatList contentContainerStyle={{}} horizontal  scrollEventThrottle={16} showsHorizontalScrollIndicator={false} data={initialDataBase} renderItem={renderItem} keyExtractor={keyExtractor} {...{onScroll}}/>

    </Animated.View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'pink',
    }
})