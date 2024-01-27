import { View, Text, Image, Dimensions, Animated, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';


const { height, width } = Dimensions.get('window');
const TinderScreen = ({ item, isFirst, swipe, ...rest }) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],

  })
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })
  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })
  const tinderSelecection = useCallback(() => {
    return <>
      <Animated.View style={{ position: 'absolute', opacity: likeOpacity,marginTop: height*0.3, right: width*0.20, alignSelf: 'center' }}>
        <Image source={require('../pictures/like.png')} />
      </Animated.View>
      <Animated.View style={{ position: 'absolute', marginTop: height*0.3, left: width*0.26, opacity: nopeOpacity }}>
        <Image source={require('../pictures/dislike.png')} />
      </Animated.View>
    </>
  }, [])
  return (
    <Animated.View
      style={[
        {
          width: width - width * 0.08,
          height: height - height * 0.31,
          alignSelf: 'center',
          position: 'absolute',
          top: 3,
          borderRadius: 15,
          elevation: 3,
        },
        isFirst && { transform: [...swipe.getTranslateTransform(), { rotate: rotate }] },
      ]}
      {...rest}>
      <Image
        resizeMode='cover'
        source={item.Image}
        style={{ height: '100%', width: '100%', borderRadius: 15 }}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.5)']}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 15,
          position: 'absolute',
          // backgroundColor: 'pink',
          // justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            position: 'absolute',
            bottom: verticalScale(15),
            left: moderateVerticalScale(20),
            color: '#fff',
            fontSize: scale(30),
            fontWeight: '400',
          }}>
          {item.title},{item.age}
        </Text>
      </LinearGradient>
      {isFirst && tinderSelecection()}
    </Animated.View>
  );
};

export default TinderScreen;
