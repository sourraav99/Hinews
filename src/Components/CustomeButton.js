import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colour from '../styles/colour'
import { moderateScale, scale, VerticalScale, moderateVerticalScale } from 'react-native-size-matters'



const CustomeButton = ({ btnText,
  btnstyle = {},
  onpress = () => { },
  btnTextStyle,
  img,
  opacity,
  disabled
}) => {
  return (

    <TouchableOpacity
      disabled={disabled}
      activeOpacity={opacity} onPress={onpress} style={{ ...styles.EmailSignup, ...btnstyle }} >
      {!!img ? <Image source={img} /> :
        <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
      }
    </TouchableOpacity>

  )
}

export default CustomeButton

const styles = StyleSheet.create({
  EmailSignup: {
    backgroundColor: colour.theme_Colour_red,
    height: moderateScale(56),
    borderRadius: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: colour.theme_Colour_Grey,
    width: '90%'
  },
  btnTextStyle: {
    color: '#FFFFFF',
    fontSize: scale(18)
  }
})