import React from 'react';
import {Animated, StyleSheet, TouchableHighlight, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AddButton = () => {
  const buttonSize = new Animated.Value(1);
  const mode = new Animated.Value(0);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100],
  });

  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -24],
  });

  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -150],
  });

  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 50],
  });

  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  return (
    <View style={{position: 'absolute', alignItems: 'center'}}>
      <Animated.View
        style={{position: 'absolute', left: thermometerX, top: thermometerY}}>
        <View style={styles.secondaryButton}>
          <Feather name="thermometer" size={24} color="#FFF" />
        </View>
      </Animated.View>

      <Animated.View style={{position: 'absolute', left: timeX, top: timeY}}>
        <View style={styles.secondaryButton}>
          <Feather name="user" size={24} color="#FFF" />
        </View>
      </Animated.View>

      <Animated.View style={{position: 'absolute', left: pulseX, top: pulseY}}>
        <View style={styles.secondaryButton}>
          <Feather name="activity" size={24} color="#FFF" />
        </View>
      </Animated.View>

      <Animated.View
        onTouchStart={handlePress}
        style={[styles.button, sizeStyle]}>
        <TouchableHighlight underlayColor="#7F58FF">
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <FontAwesome5 name="plus" size={24} color="#FFF" />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7F58FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 40,
    position: 'absolute',
    top: -60,
    borderWidth: 2,
    borderColor: '#FFF',
    elevation: 2,
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7F58FF',
  },
});
