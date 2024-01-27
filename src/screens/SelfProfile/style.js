import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import colour from '../../styles/colour'
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
        backgroundColor: colour.white,
    },
    mainView: {
        flex: 1,
        backgroundColor: colour.white,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'green',
        // height:40
    },
    headerTextStyle: {
        color: colour.theme_Colour_red,
        fontSize: scale(30),
        fontWeight: '700',
        marginLeft: width * 0.04
    },
    settingIconContainer: {
        height: height * 0.050,
        width: height * 0.050,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateVerticalScale(10),
    },
    screenContainer1: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignSelf: 'center',
        alignItems: 'center'
    },
    screenContainer2: {
        flex: 1.3,
        backgroundColor: '#F3F3F3',
    },
    profileAnimation: {
        height: height * 0.225,
        width: height * 0.225,
        borderRadius: height * 0.225 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: scale(5),
        borderColor: 'orange'
    },
    profilePicSpace: {
        height: height * 0.2,
        width: height * 0.2,
        borderRadius: height * 0.2 / 2,
        backgroundColor: 'gold',
    },
    profileEditIconContainer: {
        height: height * 0.045,
        width: height * 0.045,
        borderRadius: 100,
        backgroundColor: 'white',
        position: 'absolute',
        top: height * 0.01,
        right: height * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: 'darkgrey',
        shadowOffset: { width: 2, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 1.5,
    },
    profilePercentComplete: {
        height: height * 0.050,
        width: height * 0.2,
        borderRadius: 100,
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: -height * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: 'darkgrey',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1.5,
    },
    likeBoostSubsContainer: {
        height: height * 0.15,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    likeBoostSubsView: {
        height: height * 0.12,
        width: width * 0.24,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    plusIconView: {
        height: height * 0.030,
        width: height * 0.030,
        borderRadius: 100,
        backgroundColor: 'white',
        position: 'absolute',
        right: -width * 0.013,
        top: -height * 0.009,
        borderWidth: 0.5,
        borderColor: '#737373',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles

