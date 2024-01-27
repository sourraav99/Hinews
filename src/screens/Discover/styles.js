import { StyleSheet, Dimensions, } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colour from '../../styles/colour';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    SafeAreaMain: {
        flex: 1,
        backgroundColor: 'white',
    },
    Viewmain: {
        flex: 1,
        backgroundColor: 'white',
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    threeBottomButtonsView: {
        width: width,
        flexDirection: 'row',
        bottom: -height * 0.78,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
        position: 'absolute',
    },
    LikeBtnView: {
        height: height * 0.090,
        width: height * 0.090,
        backgroundColor: '#E94957',
        borderRadius: height * 0.090 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 0.5 },
        shadowOpacity: 5,
        shadowRadius: 1,
        elevation: 5,
    },
    DislikeAndStarbtnView: {
        height: height * 0.070,
        width: height * 0.070,
        backgroundColor: '#ffff',
        borderRadius: height * 0.070 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 0.5 },
        shadowOpacity: 5,
        shadowRadius: 1,
        elevation: 5,
    },
    FilterModalView: {
        width: '100%',
        marginLeft: 0,
        marginBottom: moderateVerticalScale(-18),
    },
    FilterModalView2: {
        flex: 1,
        backgroundColor: 'white',
        bottom: 0,
        width: width,
        height: height * 0.7,
        position: 'absolute',
        borderRadius: 25,
    },
    filterAndClearView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: moderateVerticalScale(10),
    },
    FilterText: {
        fontSize: scale(30),
        left: moderateVerticalScale(10),
        color: 'black',
        fontWeight: '500',
    },
    clearBtnView: {
        left: moderateVerticalScale(100)
    },
    clearBtnText: {
        color: colour.theme_Colour_red,
        fontSize: scale(18)
    },
    IntrestedInTextView: {
        left: '5%',
        marginTop: moderateVerticalScale(20),
    },
    IntrestedInTextstyle: {
        fontWeight: '500',
        fontSize: scale(18),
        color: 'black'
    },
    GendersViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: moderateScale(50),
        width: width * 0.9,
        borderWidth: scale(1),
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: moderateVerticalScale(10),
        borderColor: colour.theme_Colour_Grey,
    },
    genderTextView: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
    },
    setLocationBoxView: {
        borderColor: colour.theme_Colour_Grey,
        borderWidth: 1,
        height: moderateVerticalScale(50),
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: moderateVerticalScale(30)

    },
    LocationTextView: {
        backgroundColor: 'white',
        top: moderateVerticalScale(-12),
        left: moderateVerticalScale(18),
        width: moderateScale(58),
        alignItems: 'center'
    },
    LocationTextStyle: {
        color: 'black'
    },
    SelectLocationTouchableViewStyle: {
        flexDirection: 'row',
        marginLeft: moderateVerticalScale(10),
        justifyContent: 'space-between',
        paddingRight: moderateVerticalScale(15),
        bottom: moderateVerticalScale(5),
    },
    SelectLocationTouchableTextStyle: {
        fontSize: scale(18),
        color: 'grey'
    },
    AllSlidersMainView: {
        marginTop: moderateVerticalScale(10)
    },
    DistanceAndValueView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center'
    },
    DistanceTextStyle: {
        fontSize: scale(18),
        color: 'black'
    },
    DistanceValueTextStyle: {
        fontSize: scale(18),
        color: 'black'
    },
    SliderStyle: {
        height: moderateVerticalScale(35),
        width: width * 0.9,
        alignSelf: 'center',
    },
    MaximumAgeAndValueView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center'
    },
    MaximumAgeTextStyle: {
        fontSize: scale(18),
        color: 'black'
    },
    MaximumAgeValueTextStyle: {
        fontSize: scale(18),
        color: 'black'
    }, MinimumAgeAndValueView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center'
    }, MinimumAgeTextView: {
        fontSize: scale(18),
        color: 'black'
    },
    statesName: {
        height: height * 0.066,
        width: width * 0.9,
        borderBottomWidth: .3,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    dropDownStyle: {
        height: height * 0.335,
        width: width * 0.9,
        borderWidth: .5,
        borderColor: colour.theme_Colour_Grey,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        top: height * 0.30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 3,
        shadowRadius: 2,
        position: 'absolute',

    },
    textInputInDropDownStyle: {
        height: moderateVerticalScale(40),
        width: '90%',
        borderWidth: .5,
        alignSelf: 'center',
        borderRadius: 8,
        borderColor: 'grey',
        fontSize: scale(15),
        marginTop: scale(10),
        paddingLeft: scale(10),
    }
});
export default styles