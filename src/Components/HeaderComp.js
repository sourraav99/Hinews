import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
const { height, width } = Dimensions.get('window')

const HeaderComp = ({ onpress,
    img,
    headerText,
    headerTextStyle,
    headerContainerStyle,
    headerTextonPress,
    headerTextViewStyle = {},
    imgStyle = {},
    backbtnstyles ,
    resizee
}) => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={{ ...styles.headerContainer, ...headerContainerStyle }}>
            {!!img ? <TouchableOpacity
                style={{ ...styles.backbtn, ...backbtnstyles }}

                onPress={onpress}>
                <Image resizeMode={resizee} style={{ ...styles.imgStyle, ...imgStyle }} source={img} />
            </TouchableOpacity> :
                <TouchableOpacity
                    style={headerTextViewStyle}
                    onPress={headerTextonPress}>
                    <Text style={{ ...styles.headerTextStyle, ...headerTextStyle }} >{headerText}</Text>
                </TouchableOpacity>

            }
        </View>
    )
}
export default HeaderComp

const styles = StyleSheet.create({
    headerContainer: {
        height: height * 0.085,
        flexDirection: 'row',
        alignItems: 'center',

    },
    backbtn: {
        borderWidth: 1,
        width: moderateScale(45),
        height: moderateScale(45),
        marginLeft: moderateVerticalScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(12),
        borderColor: '#E8E6EA',
    },
    headerTextStyle: {
        fontSize: 17,
        color: '#E94057',
    },
    imgStyle: {

    }
})