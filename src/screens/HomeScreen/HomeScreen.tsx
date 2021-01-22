import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ButtonPig from '../../components/PigComponent/ButtonPig';
import PigComponent from '../../components/PigComponent/PigComponent';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const window = Dimensions.get('window');

const HomeScreen = (props) => {
  const {navigation} = props;
  const renderItem = ({item, index}) => {
    return <PigComponent item={item} offset={offset} index={index} />;
  };

  const keyExtractor = (item, index) => index.toString();

  const offset = new Animated.Value(0);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: offset}}}],
    {useNativeDriver: true},
  );

  const yTitle = useSharedValue(0);
  const animatedTitleStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: yTitle.value}],
      opacity: interpolate(
        yTitle.value,
        [0, 40],
        [0, 1],
        Animated.Extrapolate.CLAMP,
      ),
    };
  });

  const y = useSharedValue(40);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: y.value}],
      opacity: interpolate(
        y.value,
        [40, 0],
        [0, 1],
        Animated.Extrapolate.CLAMP,
      ),
    };
  });

  const [haveButton, setHaveButton] = useState<boolean>(false);

  useEffect(() => {
    yTitle.value = withTiming(40, {duration: 1000, easing: Easing.bounce});
  }, []);

  setTimeout(() => {
    y.value = withTiming(0, {duration: 2000, easing: Easing.bounce});
    setHaveButton(true);
  }, 2000);

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.titleContainer, animatedTitleStyles]}>
        <Text style={styles.titleStyle}>Bem-Vindo</Text>
      </Animated.View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.animation}>
          <LottieView
            source={require('../../res/animations/pig.json')}
            autoPlay
            loop
            style={{width: 200, height: 180}}
          />
        </View>
      </View>

      {haveButton && (
        <Animated.View style={[styles.buttonContainer, animatedStyles]}>
          <ButtonPig
            disabled={false}
            onClick={() => navigation.navigate('Person')}
            containerStyle={styles.buttonUniqueContainerLeft}
            buttonStyle={styles.buttonStyle}
            text={'Seguinte'}
            titleStyle={styles.buttonTitleStyle}
            type={'solid'}
            raised={true}
          />
        </Animated.View>
      )}

      {/* <AnimatedFlatList
          contentContainerStyle={{}}
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          data={initialDataBase}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          {...{onScroll}}
        /> */}
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    borderRadius: 50,
    margin: 5,
  },
  animation: {
    backgroundColor: '#FFF',
    borderRadius: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 320,
  },
  buttonUniqueContainerLeft: {paddingHorizontal: 20, paddingVertical: 10},
  buttonStyle: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 30,
  },
  buttonContainer: {
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
    paddingBottom: 40,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  buttonTitleStyle: {
    color: '#4D45C8',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  titleContainer: {
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 38,
  },
});
